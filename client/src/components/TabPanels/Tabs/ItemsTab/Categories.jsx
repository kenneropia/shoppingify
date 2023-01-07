import { Heading, Wrap, Box } from '@chakra-ui/react'
import useCategories from '../../../../hooks/useCategories'
import Item from './Item'

function Categories({ searchValue }) {
  const categories = useCategories(searchValue)
  if (categories.isLoading) {
    return 'loading...'
  }
  return (
    <Box mt={'30pt'}>
      {Object.keys(categories.data).map((category) => (
        <Box key={category}>
          <Heading mb={'20px'} fontWeight={'600'} fontSize={'1xl'}>
            {category}
          </Heading>
          <Wrap
            w={{
              sm: '100%',
              md: '80%',
              lg: '95%',
            }}
            spacing="16px"
          >
            {categories.data[category].map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </Wrap>
        </Box>
      ))}
    </Box>
  )
}

export default Categories
