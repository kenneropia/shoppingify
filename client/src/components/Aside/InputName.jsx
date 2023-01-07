import {
  Flex,
  Center,
  Input,
  Button,
  useControllableState,
  FormControl,
} from '@chakra-ui/react'
import useAddList from '../../hooks/useAddList'
import useStore from '../../state/useStore'

function InputName() {
  const { mutate } = useAddList()
  const [name, setName] = useControllableState({ defaultValue: '' })
  const list = useStore(({ list }) => list)
  const isFormDisabled = !list.length && true

  return (
    <Center maxH={'100% '} h={'100px'} bg={'white'}>
      <FormControl
        isReadOnly={isFormDisabled ? true : false}
        display={'flex'}
        w={'80%'}
        height={'50px'}
        rounded={'8px'}
        border={'2px'}
        borderColor={isFormDisabled ? 'brand.darkGray' : 'brand.lightOrange'}
      >
        <Input
          p={0}
          placeholder="Enter a name"
          fontSize={'12px'}
          ml={'15px'}
          h={'100%'}
          w={'full'}
          maxLength={18}
          variant="unstyled"
          value={name}
          border={1}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          onClick={() => {
            mutate({ name, list })
          }}
          color={'white'}
          bg={isFormDisabled ? 'brand.darkGray' : 'brand.lightOrange'}
          w={'30%'}
          h={'100%'}
        >
          Save
        </Button>
      </FormControl>
    </Center>
  )
}

export default InputName
