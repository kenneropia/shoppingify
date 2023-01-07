import { Box } from '@chakra-ui/react'
import AllLists from './AllLists'

function HistoryTab() {
  return (
    <Box
      flexDir={'column'}
      alignItems={'start'}
      display={'flex'}
      h="100%"
      w={'100%'}
    >
      <AllLists />
    </Box>
  )
}

export default HistoryTab
