import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {

    const [cart, refetch] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

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
                fetch(`https://bistro-boss-server-tau-dusky.vercel.app/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Food has been deleted.',
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
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle heading="wanna add more" subHeading="My Cart"></SectionTitle>
            <div className="bg-white mt-10 p-14">
                <div className="flex justify-between uppercase text-3xl font-bold">
                    <h3>Total Items: {cart.length}</h3>
                    <h3>Total Price: ${total}</h3>
                    <Link to="/dashboard/payment">
                        <button className="btn btn-sm btn-warning text-white">Pay</button>
                    </Link>
                </div>
                <div className="overflow-x-auto w-full mt-9">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-orange-200">#</th>
                                <th className="bg-orange-200">Item Image</th>
                                <th className="bg-orange-200">Item Name</th>
                                <th className="bg-orange-200">Price</th>
                                <th className="bg-orange-200">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-500">
                            {
                                cart.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center ">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item)} className="btn border-none hover:bg-red-600 bg-red-600 btn-sm">
                                                <FaTrashAlt />
                                            </button>
                                        </th>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;