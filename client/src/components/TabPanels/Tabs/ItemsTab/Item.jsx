import { Center, Text, WrapItem, IconButton } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { insertItemSelector } from '../../../../state/selectors'
import useStore from '../../../../state/useStore'

function Item({ item }) {
  const insertItem = useStore(insertItemSelector)

  return (
    <WrapItem>
      <Center
        key={item.id}
        display={'flex'}
        rounded={'10px'}
        mb={'25px'}
        bg={'white'}
        minW={'30%'}
        height={'30px'}
        minHeight={'30px'}
        py={'25px'}
        justifyContent={'space-between'}
        sx={{ boxShadow: '0px 0px 15px -7px rgba(0,0,0,0.48)' }}
      >
        <Text fontSize={'15px'} ml={'12px'} fontWeight={'550'} color={'black'}>
          {item.name}
        </Text>
        <IconButton
          onClick={() => insertItem(item)}
          m={'0px'}
          fontSize={'20px'}
          bg={'transparent'}
          color={'brand.darkGray'}
          aria-label="Search database"
          icon={<AiOutlinePlus />}
        />
      </Center>
    </WrapItem>
  )
}

export default Item
