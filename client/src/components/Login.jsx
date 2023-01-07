import {
  Center,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState(false)
  const auth = useAuth()
  const handleClick = async (e) => {
    e.preventDefault()

    if (form.email && form.password) {
      try {
        await auth.login(form)
        setErrorMessage(false)
        location.reload()
      } catch (err) {
        if (err.response.data.error.message) {
          setErrorMessage(err.response.data.error.message)
        } else if (err.response) {
          setErrorMessage(err.response.data.message)
        } else if (err.message) {
          setErrorMessage(err.message)
        }
      }
    }
  }
  return (
    <Center bg={'brand.lightGray'} w={'100%'} h={'100%'}>
      <Flex
        p={'clamp(30px,0px,0px)'}
        pt={'20px'}
        flexDir={'column'}
        alignItems={'center'}
        w="clamp(40%,400px,100%)"
        bg={'white'}
        sx={{ boxShadow: '0px 0px 10px -7px rgba(0,0,0,0.48)' }}
      >
        <Heading
          display={'flex'}
          maxW={'100%'}
          as="h1"
          size="md"
          fontWeight={'600'}
        >
          <Text w={'100%'} display={'inline'}>
            <Text display={'inline'} color={'brand.lightOrange'}>
              Shoppingify{' '}
            </Text>
            allows you to take your shopping list whereever you go
          </Text>
        </Heading>
        <Text fontWeight={'600'} w={'100%'} display={'inline-flex'} mt={'15px'}>
          Log into your account.
        </Text>
        <VStack
          mt={'5px'}
          alignItems={'start'}
          as={'form'}
          w={'100%'}
          flexDir={'column'}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="name">Email</FormLabel>
            <Input
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, email: e.target.value.trim() }
                })
              }
              value={form.name}
              id="Email"
              placeholder="Email"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, password: e.target.value.trim() }
                })
              }
              value={form.password}
              id="password"
              placeholder="password"
            />
          </FormControl>
          <FormControl isInvalid={errorMessage}>
            <FormErrorMessage color={'red'}>{errorMessage}</FormErrorMessage>
          </FormControl>
          <Button
            onClick={handleClick}
            color={'white'}
            bg={'brand.lightOrange'}
            disabled={!form.email || (!form.password && true)}
            type="submit"
          >
            Submit
          </Button>
        </VStack>
        <Text>email is aaron@kenny.com and password is 12345678</Text>
      </Flex>
    </Center>
  )
}

export default Login
