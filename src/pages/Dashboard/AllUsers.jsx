import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://bistro-boss-server-tau-dusky.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is made an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-tau-dusky.vercel.app/users/${user._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="bg-base-200 px-20 py-10">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle heading="Manage All Users" subHeading="How many?"></SectionTitle>
            <div className="bg-white mt-10 p-14">
                <h3 className="text-3xl font-bold mb-5">Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-orange-200">#</th>
                                <th className="bg-orange-200">Name</th>
                                <th className="bg-orange-200">Email</th>
                                <th className="bg-orange-200">Role</th>
                                <th className="bg-orange-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ?
                                                "Admin" :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn border-none hover:bg-orange-600 bg-orange-600 btn-sm">
                                                    <FaUserShield className="text-lg" />
                                                </button>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user)} className="btn border-none hover:bg-red-600 bg-red-600 btn-sm">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;