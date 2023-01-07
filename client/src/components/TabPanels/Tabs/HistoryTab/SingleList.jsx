import { Box, Text, VStack } from '@chakra-ui/react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import CalendarIcon from '../../../svg/CalendarIcon'
import RightArrowIcon from '../../../svg/RightArrowIcon'

function SingleList({ lists }) {
  return (
    <VStack
      my={'20px'}
      spacing={'20px'}
      w={'100%'}
      h="100%"
      display={'flex'}
      alignItems={'start'}
    >
      {lists.map((list) => {
        const completed = list?.completed
        return (
          <Box
            sx={{ boxShadow: '0px 0px 12px -9px rgba(0,0,0,0.48)' }}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            rounded={'10px'}
            h={'55px'}
            p={'15px'}
            w={'100%'}
            bg={'white'}
          >
            <Text
              textTransform={'capitalize'}
              fontSize={'16px'}
              fontWeight={'600'}
            >
              {list.name}
            </Text>
            <Box
              display={'flex'}
              justifyContent={'space-around'}
              w={'30%'}
              h={'15px'}
            >
              <CalendarIcon />
              <Text color={'brand.darkGray'} fontSize={'70%'}>
                {format(
                  new Date(list.createdAt),
                  `EEE
                d'.'MM'.'yyy`
                )}
              </Text>
              <Box
                px={'2px'}
                display={'flex'}
                alignItems={'center'}
                rounded={'5px'}
                h={'20px'}
                border={'1px'}
                color={completed ? 'lightBlue' : 'brand.lightRed'}
                borderColor={completed ? 'lightBlue' : 'brand.lightRed'}
                fontSize={'10px'}
              >
                {completed ? 'completed' : 'uncompleted'}
              </Box>
              <Link state={list} to={'/viewlist'}>
                <RightArrowIcon />
              </Link>
            </Box>
          </Box>
        )
      })}
    </VStack>
  )
}

export default SingleList
