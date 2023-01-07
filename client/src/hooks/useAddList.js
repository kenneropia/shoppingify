import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { createNewList } from '../utils'

function useAddList() {
  const queryClient = useQueryClient()

  return useMutation(createNewList, {
    onSuccess: () => {
      toast.success('List has been successfully created', {
        duration: 3000,
        position: 'bottom-center',
      })
      queryClient.invalidateQueries('lists')
    },
    onMutate: async (newList) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      //   await queryClient.cancelQueries('todos')
      //   // Snapshot the previous value
      //   const previousTodos = queryClient.getQueryData('todos')
      //   // Optimistically update to the new value
      //   queryClient.setQueryData('todos', (old) => [...old, newTodo])
      //   // Return a context object with the snapshotted value
      //   return { previousTodos }
    },
  })
}

export default useAddList
