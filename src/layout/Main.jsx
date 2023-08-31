import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;