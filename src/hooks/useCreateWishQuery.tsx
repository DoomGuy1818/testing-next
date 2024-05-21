import {useMutation, useQuery} from "@tanstack/react-query";
import {CreateWish, CreateWishlist} from "@/services/fetch";

const UseCreateWishQuery =  () => {
     return useMutation({
        mutationFn: CreateWishlist
    });

}