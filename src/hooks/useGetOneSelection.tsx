import { GetOneSelection } from '@/services/fetch'
import { useQuery } from '@tanstack/react-query'

const useGetOneSelection = () => {
  return useQuery({
    // queryFn: () => fetchCategories(),
    queryFn: GetOneSelection,
    queryKey: ['selection'],
    staleTime: 1000 * 5,
  })
}
export { useGetOneSelection }
