import { useBoolean, Flex, Text, IconButton, Center } from '@chakra-ui/react'
import useStore from '../../state/useStore'
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { itemMethodSelector } from '../../state/selectors'

const Item = ({ item, amount }) => {
  const [flag, setFlag] = useBoolean()
  const state = useStore(itemMethodSelector)

  return (
    <Flex
      key={item.id}
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'100%'}
      height={'25px'}
      mt={'5px'}
    >
      <Text w={'120px'} fontSize={'14px'} fontWeight={'500'}>
        {item.name}
      </Text>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        bg={flag && 'white'}
        rounded={'15px'}
        width={'60%'}
        height={'45px'}
        color={'brand.lightOrange'}
        onMouseEnter={setFlag.toggle}
        onMouseLeave={setFlag.off}
      >
        <IconButton
          visibility={!flag && 'hidden'}
          onClick={() => state.removeItem(item)}
          rounded={'10px'}
          aria-label="Search database"
          icon={<AiOutlineDelete />}
          bg={'brand.lightOrange'}
          color={'white'}
          h={'44px'}
          fontSize={'18px'}
        />

        <IconButton
          visibility={!flag && 'hidden'}
          onClick={() => state.reduceItemAmount(item)}
          bg={'transparent'}
          icon={<AiOutlineMinus />}
        />

        <Text
          rounded={'50px'}
          p="5px"
          border={'2px'}
          bg={'transprent'}
          fontSize={'15px'}
        >
          <Center w={'max-content'}> {amount} pcs</Center>
        </Text>

        <IconButton
          visibility={!flag && 'hidden'}
          onClick={() => state.insertItem(item)}
          bg={'transparent'}
          icon={<AiOutlinePlus />}
        />
      </Flex>
    </Flex>
  )
}

export default Item
