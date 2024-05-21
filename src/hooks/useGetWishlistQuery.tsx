import { useQuery } from '@tanstack/react-query';
import { fetchWishlists } from '@/services/fetch';


const UseGetWishlistQuery = () => {

    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchWishlists,
        queryKey: ['wishlist'],
        staleTime: 1000 * 5,
    });
};
export { UseGetWishlistQuery };
