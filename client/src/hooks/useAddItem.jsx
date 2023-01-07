import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { createNewItem } from '../utils'

function useAddItem() {
  const queryClient = useQueryClient()

  return useMutation(createNewItem, {
    onSuccess: () => {
      toast.success('Item has been successfully created', {
        duration: 3000,
        position: 'bottom-center',
      })
      queryClient.invalidateQueries('category')
    },
    onMutate: async (newItem) => {
      //   Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries('category')
      //     // Snapshot the previous value
      const previousItems = queryClient.getQueryData('category')
      //     // Optimistically update to the new value
      // queryClient.setQueryData('category', (old) => {
      //   return { items: [...old.items, newItem] }
      // })
      //     // Return a context object with the snapshotted value
      return { previousItems }
    },
  })
}

export default useAddItem
