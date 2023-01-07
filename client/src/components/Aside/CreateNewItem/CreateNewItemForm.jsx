import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Select,
  HStack,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import API from '../../../utils/API'
import { useLocation, useNavigate } from 'react-router'

function CreateNewItemForm() {
  const navigate = useNavigate()
  let { state = {} } = useLocation()
  const categories = useQuery('categories', async () => {
    const data = await API.get('/categories').then((res) => res)

    return data
  })

  const [form, setForm] = useState(state)
  return (
    <Box mt={'30px'}>
      <form>
        <VStack spacing={'20px'}>
          <FormControl id="name" isRequired>
            <FormLabel fontSize={'15px'}>Name</FormLabel>
            <Input
              value={form?.name}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, name: e.target.value }
                })
              }
              type={'text'}
              fontSize={'15px'}
              size="lg"
              placeholder="Enter a name"
            />
          </FormControl>
          <FormControl id="note">
            <FormLabel fontSize={'15px'}>Note (optional)</FormLabel>
            <Textarea
              value={form?.note}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, note: e.target.value }
                })
              }
              placeholder="Enter a simple note"
              fontSize={'15px'}
              resize={'none'}
            />
          </FormControl>
          <FormControl id="image" isRequired>
            <FormLabel fontSize={'15px'}>Image (optional)</FormLabel>
            <Input
              value={form?.image}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, image: e.target.value }
                })
              }
              type={'url'}
              fontSize={'15px'}
              size="lg"
              placeholder="Enter a url"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={'15px'}>Catetgory </FormLabel>

            <Select placeholder="Enter a category">
              {categories.isLoading
                ? 'loading'
                : categories.data.categories.map((category) => {
                    return (
                      <option
                        selected={
                          category.id === form?.category?.id ? true : null
                        }
                        key={category.name}
                        onClick={() => {
                          setForm((prev) => {
                            return { ...prev, category }
                          })
                        }}
                        value="option1"
                      >
                        {category.name}
                      </option>
                    )
                  })}
            </Select>
          </FormControl>
          <HStack spacing={'26px'}>
            <Button
              onClick={() => {
                setForm({})
                navigate('/')
              }}
              bg={'transparent'}
            >
              cancel
            </Button>
            <Button
              onClick={() => navigate('/previewItem', { state: form })}
              rounded={'10px'}
              py="30px"
              px="20px"
              color={'white'}
              bg={'brand.lightOrange'}
            >
              Preview item
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  )
}

export default CreateNewItemForm
