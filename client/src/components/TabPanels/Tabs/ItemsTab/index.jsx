import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Categories from './Categories'
import HeroHeader from './HeroHeader'

function ItemTab() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Flex
      bg={'brand.lightGray'}
      display={'flex'}
      h="100%"
      w={'100%'}
      flexDirection={'column'}
    >
      <HeroHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <Categories searchValue={searchValue} />
    </Flex>
  )
}

export default ItemTab
