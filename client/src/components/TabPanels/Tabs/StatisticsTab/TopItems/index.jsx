import {
  Flex,
  Text,
  VStack,
  Progress,
  useBreakpointValue,
} from '@chakra-ui/react'

function TopItems({ items }) {
  const display = useBreakpointValue({ base: '100%', lg: '45%' })

  return (
    <Flex mt={'5px '} flexDir={'column'} w={display}>
      <Text fontWeight={'600'} fontSize={'22px'}>
        Top Items
      </Text>
      <VStack mt={'10px'} spacing={'20px'}>
        {items.items.map(({ _id, count, item }) => {
          return (
            <Flex w={'100%'} flexDir={'column'} key={_id}>
              <Flex justifyContent={'space-between'}>
                <Text>{item.name} </Text>{' '}
                <Text>{Math.round((count / items.itemsAmount) * 100)}% </Text>
              </Flex>
              <Progress
                colorScheme={'ProgressItems'}
                mt={'10px'}
                rounded={'50px'}
                size="sm"
                h={'6px'}
                value={Math.round((count / items.itemsAmount) * 100)}
              />
            </Flex>
          )
        })}
      </VStack>
    </Flex>
  )
}

export default TopItems
