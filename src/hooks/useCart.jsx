// import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    // using axios, tan stack
    // const axiosSecure = useAxiosSecure();
    // const {data: cart=[]} = useQuery({
    //     queryKey: ['cart'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/carts')
    //         return res.data;
    //     }
    // })
    // return [cart];

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.name],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch];
};

export default useCart;