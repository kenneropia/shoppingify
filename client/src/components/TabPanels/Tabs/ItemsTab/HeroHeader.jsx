import {
  Flex,
  Heading,
  Text,
  Input,
  useBreakpointValue,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { BiSearch as SearchIcon } from 'react-icons/bi'
import { useQueryClient } from 'react-query'

function HeroHeader({ searchValue, setSearchValue }) {
  const queryClient = useQueryClient()
  return (
    <Flex
      h={'max-content'}
      flexWrap={'wrap'}
      justifyContent={'space-between'}
      w={'80%'}
    >
      <Heading
        w={{ xl: '50%', md: '50%', sm: '100%' }}
        as="h1"
        size="md"
        fontWeight={'600'}
      >
        <Text display={'inline'} color={'brand.lightOrange'}>
          Shoppingify{' '}
        </Text>
        allows you to take your shopping list whereever you go
      </Heading>

      <Box
        as={'form'}
        onSubmit={(e) => {
          e.preventDefault()
        }}
        display={'flex'}
        rounded={10}
        boxShadow="sm"
        justifyContent={''}
        maxW={'90%'}
        h={'40px'}
        bg={'white'}
      >
        <IconButton
          type="submit"
          aria-label="Search database"
          icon={<SearchIcon />}
          bg={'transparent'}
          fontSize={'20px'}
        />

        <Input
          value={searchValue}
          p={0}
          onChange={(e) => {
            setSearchValue(e.target.value)
            queryClient.invalidateQueries('category')
          }}
          placeholder="search items"
          fontSize={'12px'}
          w={'200px'}
          maxLength={8}
          variant="unstyled"
        />
      </Box>
    </Flex>
  )
}

export default HeroHeader
