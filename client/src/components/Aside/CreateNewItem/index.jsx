import { Box, Heading } from '@chakra-ui/react'
import CreateNewItemForm from './CreateNewItemForm'

function CreateNewItem() {
  return (
    <Box h={'100%'} p={'30px'} w={'100%'} bg={'brand.lightGray'}>
      <Heading size={'md'}>Add a new Item</Heading>
      <CreateNewItemForm />
    </Box>
  )
}

export default CreateNewItem
