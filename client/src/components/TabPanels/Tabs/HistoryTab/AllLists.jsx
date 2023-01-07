import { Box, VStack, Text, Heading, Flex } from '@chakra-ui/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import useAllLists from '../../../../hooks/useAllLists'
import SingleList from './SingleList'
import ViewList from './ViewList'

const ShowAllLists = () => {
  const query = useAllLists()
  if (query.isLoading) {
    return <Box>Loading ...</Box>
  }
  const datedList = Object.keys(query.data.datedList)
  return (
    <Flex
      w={'80%'}
      flexDir={'column'}
      alignItems={'start'}
      justifyContent={'start'}
    >
      <Heading fontWeight={'600'} fontSize={'30px'} w={'88%'} display={'flex'}>
        Shopping history
      </Heading>
      <VStack mt={'45px'} w={'100%'} display={'flex'} alignItems={'start'}>
        {datedList.map((list) => {
          return (
            <Box w={'100%'}>
              <Text fontSize={'13px'} fontWeight={'600'}>
                {list}
              </Text>
              <SingleList lists={query.data.datedList[list]} />
            </Box>
          )
        })}
      </VStack>
    </Flex>
  )
}

function AllLists() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<ShowAllLists />} />
        <Route path="/viewlist" element={<ViewList />} />
      </Routes>
    </MemoryRouter>
  )
}

export default AllLists
