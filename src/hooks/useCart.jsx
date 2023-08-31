import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email ? user?.email : ''],
        enabled: !loading && !!user?.email,
        // queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-tau-dusky.vercel.app/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
    })
    return [cart, refetch];
};

export default useCart;