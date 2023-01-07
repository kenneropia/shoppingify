import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { BsArrowLeft } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router'
import useAddItem from './../../hooks/useAddItem'

function PreviewItem() {
  const { mutate } = useAddItem()
  const navigate = useNavigate()
  const { state } = useLocation()
  const form = state || {}

  return (
    <VStack h={'100%'} px={'15px'} mt={'15px'} spacing={'8px'}>
      <Box w={'100%'}>
        <Button
          color={'brand.lightOrange'}
          bg={'transparent'}
          onClick={() => navigate('/createItem', { state: form })}
        >
          <BsArrowLeft />
          <Text mt={'-2px'} pl={'5px'}>
            back
          </Text>
        </Button>
      </Box>
      {Object.keys(form).length !== 0 ? (
        <>
          {' '}
          <Box height={'38%'} w={'100%'}>
            <Image
              height={'220px'}
              width={'100%'}
              rounded={'20px'}
              src={form.image}
            />
          </Box>
          <TextBox name={'name'} desc={form.name} />
          <TextBox name={'category'} desc={form?.category?.name} />
          <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'space-between'}
            w={'100%'}
          >
            <Text color={'brand.darkGray'}>note</Text>
            <Text
              height={'min-content'}
              maxHeight={'100px'}
              overflowY={'auto'}
              textTransform={'capitalize'}
              fontWeight={'550'}
              fontSize={'md'}
            >
              {form.note}
            </Text>
          </Box>
          <HStack mt={'auto'} spacing={'26px'}>
            <Button
              onClick={() => {
                navigate('/createItem', { state: {} })
              }}
              bg={'transparent'}
            >
              cancel
            </Button>
            <Button
              onClick={() => {
                const value = mutate(form)
              }}
              rounded={'10px'}
              py="30px"
              px="20px"
              color={'white'}
              bg={'brand.lightOrange'}
            >
              Save item
            </Button>
          </HStack>
        </>
      ) : (
        <Center h={'100%'} w={'100%'}>
          <Heading>No item is set</Heading>
        </Center>
      )}
    </VStack>
  )
}

const TextBox = ({ name, desc }) => {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
      w={'100%'}
    >
      <Text color={'brand.darkGray'}>{name}</Text>
      <Text
        height={'20px'}
        textTransform={'capitalize'}
        fontWeight={'550'}
        fontSize={'md'}
      >
        {desc}
      </Text>
    </Box>
  )
}

export default PreviewItem
