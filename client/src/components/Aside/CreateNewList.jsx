import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import { categorySelector } from '../../state/selectors'
import useStore from '../../state/useStore'
import AddItem from './AddItem'
import Empty from './Empty'
import InputName from './InputName'
import Item from './Item'

const Category = ({ name, category }) => {
  return (
    <Box width={'100%'} mt={'25px'}>
      <Heading color={'brand.darkGray'} fontWeight={'600'} size={'xs'}>
        {name}
      </Heading>
      <VStack mt={'10px'} spacing={'30px'} align={'flex-start'}>
        {category.map(({ item, amount }) => (
          <Item key={item.id} item={item} amount={amount} />
        ))}
      </VStack>
    </Box>
  )
}

const ShoppingList = () => {
  const categories = useStore(categorySelector)
  if (!Object.keys(categories).length) {
    return (
      <Center>
        <Box w={'100%'}>
          <Empty />
        </Box>{' '}
      </Center>
    )
  }
  return (
    <Center>
      <Box minH={'320px'} w={'100%'}>
        <Heading fontWeight={'500'}>Shopping list</Heading>
        <Box
          overflowY={'scroll'}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&': {
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            },
          }}
          h={'250px'}
          maxH={'100%'}
        >
          {Object.keys(categories).map((category) => (
            <Category
              key={category}
              name={category}
              category={categories[category]}
            />
          ))}
        </Box>
      </Box>
    </Center>
  )
}

function CreateNewList() {
  return (
    <Box w={'100%'} bg={'brand.lightWine'}>
      <AddItem />
      <ShoppingList />
      <InputName />
    </Box>
  )
}

export default CreateNewList
