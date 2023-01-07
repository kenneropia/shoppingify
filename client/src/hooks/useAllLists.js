import { useQuery } from 'react-query'
import API from '../utils/API'

import { format } from 'date-fns'

function useAllLists() {
  const query = useQuery(
    'lists',
    async () => {
      const data = await API.get('/lists')
        .then((res) => res)
        .catch((err) => {
          throw new Error(err)
        })
      return data.data
    },
    { refetchOnMount: false }
  )
  const DatedList = {}

  if (query.isLoading) return query
  query.data.lists.forEach((list) => {
    const date = format(new Date(list.createdAt), 'MMMM yyy')
    DatedList[date] ? DatedList[date].push(list) : (DatedList[date] = [list])
  })
  query.data.datedList = DatedList
  return query
}

export default useAllLists
