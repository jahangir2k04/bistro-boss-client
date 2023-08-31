import { Helmet } from "react-helmet-async"
import SectionTitle from "../../components/SectionTitle"
import useMenu from "../../hooks/useMenu";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ManageItems = () => {

    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
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
              
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      refetch();
                }
            })

            }
          })
    }

    return (
        <div className="px-20 py-10">
            <Helmet>
                <title>Bistro Boss | Manage Item</title>
            </Helmet>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up!"></SectionTitle>
            <div className="bg-base-200 mt-16 p-12">
                <h3 className="text-3xl font-bold mb-5">Total Items: {menu.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-orange-200">#</th>
                                <th className="bg-orange-200">Item Image</th>
                                <th className="bg-orange-200">Item Name</th>
                                <th className="bg-orange-200">Price</th>
                                <th className="bg-orange-200">Update</th>
                                <th className="bg-orange-200">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className="btn border-none hover:bg-orange-200 bg-orange-200 btn-sm">
                                                <FaRegEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn border-none hover:bg-red-600 bg-red-600 btn-sm">
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

export default ManageItems;