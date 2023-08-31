import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";


const OrderCard = ({ item, image }) => {
    const { _id, name, recipe, price } = item;
    const { user } = useContext(AuthContext)
    const [ , refetch ] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = id => {
        if (user && user.email) {
            const cartItem = { menuId: id, name, price, image, email: user.email }
            fetch('https://bistro-boss-server-tau-dusky.vercel.app/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food successfully Added to Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to Login first!',
            })
            navigate('/login', { state: { from: location } })
        }
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mt-4 mr-4 bg-slate-900 px-2 py-0.5 text-white">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions mt-5">
                    <button onClick={() => handleAddToCart(_id)} className="bg-[#E8E8E8] hover:bg-black uppercase text-xl text-orange-600 border-b-4 px-7 py-3 rounded-lg border-orange-600">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;