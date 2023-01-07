import { Box, VStack, Text } from '@chakra-ui/react'
import ItemsWrapper from './ItemsWrapper'

function Category({ list }) {
  const categories = {}
  list.forEach((item) => {
    categories[item.item.category.name]
      ? categories[item.item.category.name].push(item)
      : (categories[item.item.category.name] = [item])
  })
  return (
    <Box mt={'50px'}>
      <VStack alignItems={'start'}>
        {Object.keys(categories).map((category) => (
          <Box mb={'20px'}>
            <Text mb={'20px'} fontWeight={'600'}>
              {category}
            </Text>
            <ItemsWrapper Items={categories[category]} />
          </Box>
        ))}
      </VStack>{' '}
    </Box>
  )
}

export default Category
