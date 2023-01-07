import { useQuery } from 'react-query'
import API from '../utils/API'

function useStats() {
  const query = useQuery(
    'stats',
    async () => {
      const data = await API.get('/stats')
        .then((res) => res)
        .catch((err) => {
          throw new Error(err)
        })

      return data.data
    },
    { refetchOnMount: false }
  )
  return query
}

export default useStats
