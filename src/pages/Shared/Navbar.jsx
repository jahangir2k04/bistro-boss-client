import { Link } from "react-router-dom";
import profile from '../../assets/others/profile.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const menuItems = <>
        <Link to="/">HOME</Link>
        <Link to="/menu">OUR MENU</Link>
        <Link to="/order/salad">ORDER FOOD</Link>
        <Link to={isAdmin ? '/dashboard/admin-home' : '/dashboard/user-home'}>DASHBOARD</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/secret">Secret</Link>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className="bg-[rgba(21,21,21,0.5)] fixed z-20 w-full">
            <div className="navbar md:h-32 max-w-screen-xl mx-auto md:p-0 text-white">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/">
                        <span className="text-3xl font-extrabold">BISTRO BOSS</span> <br />
                        <span className="text-2xl font-serif font-bold">RESTAURANT</span>
                    </Link>
                </div>
                <div className="ms-auto space-x-2">
                    <ul className="menu menu-horizontal px-1  hidden lg:flex text-xl font-bold gap-3">
                        {menuItems}
                    </ul>
                    <label className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaShoppingCart className="text-2xl" />
                            <span className="badge badge-sm indicator-item bg-red-600 py-3 text-sm border-none">+{cart?.length || 0}</span>
                        </div>
                    </label>
                    {user ?
                        <button onClick={handleLogOut} className="font-bold text-xl">LogOut</button> :
                        <Link to="/login" className="font-bold text-xl">LOGIN</Link>
                    }
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;