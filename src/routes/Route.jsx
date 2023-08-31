import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'user-home',
                element: <UserHome></UserHome>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },

            // admin related routes
            {
                path: 'admin-home',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
]);