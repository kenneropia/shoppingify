import {
  Flex,
  Text,
  VStack,
  Progress,
  useBreakpointValue,
} from '@chakra-ui/react'

function TopCategories({ categories }) {
  const display = useBreakpointValue({ base: '100%', sm: '100%', lg: '45%' })

  return (
    <Flex mt={'5px '} flexDir={'column'} w={display}>
      <Text fontWeight={'600'} fontSize={'22px'}>
        Top Categories
      </Text>
      <VStack mt={'10px'} spacing={'20px'}>
        {categories.categories.map(({ _id, count, category }) => {
          return (
            <Flex w={'100%'} flexDir={'column'} key={_id}>
              <Flex justifyContent={'space-between'}>
                <Text>{category.name} </Text>{' '}
                <Text>
                  {Math.round((count / categories.categoriesAmount) * 100)}%{' '}
                </Text>
              </Flex>
              <Progress
                colorScheme={'ProgressCategories'}
                mt={'10px'}
                rounded={'50px'}
                size="sm"
                h={'6px'}
                value={Math.round((count / categories.categoriesAmount) * 100)}
              />
            </Flex>
          )
        })}
      </VStack>
    </Flex>
  )
}

export default TopCategories
