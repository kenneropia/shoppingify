import { BsCalendar3 } from 'react-icons/bs'
import { Box, Icon } from '@chakra-ui/react'

function CalendarIcon({ props }) {
  return (
    <Box>
      <Icon
        fill={'brand.darkGray'}
        fontSize={'20px'}
        as={BsCalendar3}
        bgColor={'white'}
        {...props}
      />
    </Box>
  )
}

export default CalendarIcon
