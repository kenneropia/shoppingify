import { Center, Text, WrapItem } from '@chakra-ui/react'

function Item({ item }) {
  return (
    <WrapItem>
      <Center
        display={'flex'}
        rounded={'10px'}
        bg={'white'}
        width={'170px'}
        minHeight={'30px'}
        height={'52px'}
        justifyContent={'space-between'}
        px={'15px'}
        sx={{ boxShadow: '0px 0px 12px -7px rgba(0,0,0,0.48)' }}
      >
        <Text w={'80px'} fontSize={'15px'} fontWeight={'550'} color={'black'}>
          {item.name}
        </Text>
        <Text fontSize={'14px'} color={'brand.lightOrange'}>
          {item.amount} pcs
        </Text>
      </Center>
    </WrapItem>
  )
}

export default Item
