import { GetManySelections } from '@/services/fetch'
import { useQuery } from '@tanstack/react-query'

const useGetManySelections = () => {
  return useQuery({
    // queryFn: () => fetchCategories(),
    queryFn: GetManySelections,
    queryKey: ['selections'],
    staleTime: 1000 * 5,
  })
}
export { useGetManySelections }
