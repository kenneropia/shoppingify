import { AiOutlineRight } from 'react-icons/ai'
import { Box, Icon } from '@chakra-ui/react'

function RightArrowIcon({ props }) {
  return (
    <Box>
      <Icon
        fill={'brand.lightOrange'}
        fontSize={'20px'}
        as={AiOutlineRight}
        bgColor={'white'}
        {...props}
      />
    </Box>
  )
}

export default RightArrowIcon
