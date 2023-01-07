import { Box, Button, Heading, list, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate, useLocation } from 'react-router-dom'
import CalendarIcon from '../../../../svg/CalendarIcon'
import Category from './Category'

function ViewList() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!Object.keys(state || {}).length) {
    return (
      <Box>
        <Box w={'100%'}>
          <Button
            color={'brand.lightOrange'}
            bg={'transparent'}
            onClick={() => navigate('/')}
          >
            <BsArrowLeft />
            <Text mt={'-2px'} pl={'5px'}>
              back
            </Text>
          </Button>
        </Box>
        <Text>No List has been selected</Text>
      </Box>
    )
  }
  return (
    <Box w={'100%'}>
      <Button
        display={'inline-flex'}
        variant={'unstyled'}
        w={'60px'}
        color={'brand.lightOrange'}
        bg={'transparent'}
        onClick={() => navigate('/')}
      >
        <BsArrowLeft />
        <Text mt={'-2px'} pl={'5px'}>
          back
        </Text>
      </Button>
      <Box mt={'10px'}>
        <Heading fontWeight={'550'} textTransform={'capitalize'}>
          {state.name}
        </Heading>
        <Box
          display={'flex'}
          justifyContent={'start'}
          maxW={'20%'}
          h={'15px'}
          my={'20px'}
        >
          <CalendarIcon />
          <Text
            ml={'10px'}
            w={'100px'}
            color={'brand.darkGray'}
            fontSize={'12px'}
          >
            {format(new Date(state.createdAt), `E d'.'MM'.'yyy`)}
          </Text>
        </Box>
      </Box>
      <Box>
        <Category list={state.list} />
      </Box>
    </Box>
  )
}

export default ViewList
