import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai'
import { FaBook, FaCalendarAlt, FaCalendarCheck, FaGratipay, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { GrMail } from 'react-icons/gr'
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-orange-200 text-base-content uppercase">
                    {/* Sidebar content here */}

                    {isAdmin ?
                        <>
                            <li><NavLink to="/dashboard/admin-home"><AiFillHome className="text-2xl" /> Admin Home</NavLink></li>

                            <li><NavLink to="/dashboard/add-item"><FaUtensils className="text-2xl" /> Add Items</NavLink></li>

                            <li><NavLink to="/dashboard/manage-items"><FiMenu className="text-2xl" /> Manage Items</NavLink></li>

                            <li><NavLink to="/dashboard/manage-bookings"><FaBook className="text-2xl" /> Manage Bookings</NavLink></li>

                            <li><NavLink to="/dashboard/all-users"><FaUsers className="text-2xl" /> All Users</NavLink></li>
                        </> :
                        <>
                            <li><NavLink to="/dashboard/user-home"><AiFillHome className="text-2xl" />User Home</NavLink></li>

                            <li><NavLink to="/dashboard/reservation"><FaCalendarAlt className="text-2xl" /> Reservation</NavLink></li>

                            <li><NavLink to="/dashboard/payment-history"><FaWallet className="text-2xl" /> Payment History</NavLink></li>

                            <li><NavLink to="/dashboard/my-cart"><FaShoppingCart className="text-2xl" />
                                My Cart
                                <span className="badge badge-sm indicator-item bg-red-600 py-3 text-sm border-none">+{cart?.length}</span>
                            </NavLink></li>

                            <li><NavLink to="/dashboard/add-review"><FaGratipay className="text-2xl" /> Add Review</NavLink></li>

                            <li><NavLink to="/dashboard/my-booking"><FaCalendarCheck className="text-2xl" /> My Booking</NavLink></li>
                        </>

                    }

                    <div className="divider"></div>

                    <li><NavLink to="/"><AiFillHome className="text-2xl" /> Home</NavLink></li>

                    <li><NavLink to="/menu"><FiMenu className="text-2xl" /> Menu</NavLink></li>

                    <li><NavLink to="/order/salad"><FaShoppingBag className="text-2xl" /> Shop</NavLink></li>

                    <li><NavLink to=""><GrMail className="text-2xl" /> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;