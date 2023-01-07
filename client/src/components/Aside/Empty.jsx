import { Box, Text } from '@chakra-ui/react'

import LadyWithCart from '../svg/LadyWithCart'

function Empty() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'end'}
      flexDir={'column'}
      h={'320px'}
      w={'100%'}
      bg={'brand.lightWine'}
    >
      <Text fontWeight={'600'}> No items</Text>
      <LadyWithCart />
    </Box>
  )
}

export default Empty
