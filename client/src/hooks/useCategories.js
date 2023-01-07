import { useQuery } from 'react-query'
import API from '../utils/API'
import Searcher from '../utils/Fuse'

const useCategories = (searchValue) => {
  const query = useQuery(
    'category',
    async () => {
      const data = await API.get('/items')
        .then((res) => res)
        .catch((err) => {
          throw new Error(err)
        })

      return data
    },
    { refetchOnMount: false }
  )
  if (query.isLoading) return query

  if (query.isError) {
    console.error(query.error)
    throw new Error(query.error)
  }
  const searchedList = searchValue.trim()
    ? Searcher(query.data.items, searchValue)
    : query.data.items
  const categories = {}

  searchedList.forEach((item) => {
    categories[item.category.name]
      ? categories[item.category.name].push(item)
      : (categories[item.category.name] = [item])
  })
  query.data = categories
  return query
}

export default useCategories
