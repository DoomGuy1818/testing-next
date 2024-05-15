'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchWishes } from '../services/fetch';

const useGetWishesQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchWishes,
        queryKey: ['wish'],
        staleTime: 1000 * 5,
    });
};

export { useGetWishesQuery };