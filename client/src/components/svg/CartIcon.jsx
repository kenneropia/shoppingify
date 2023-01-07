import { BsCartDash } from 'react-icons/bs'
import { useBreakpoint, Box, Text, IconButton } from '@chakra-ui/react'
import useStore from '../../state/useStore'

function CartIcon(props) {
  const numberofItems = useStore((state) => state.list.length)
  const toggleSideBar = useStore((state) => state.toggleSideBar)
  const isSideBar = useStore((state) => state.isSideBar)
  const bp = useBreakpoint()

  console.log(toggleSideBar)
  return (
    <Box position={'relative'} w={'60px'}>
      <Text
        justifyContent={'center'}
        alignItems={'center'}
        fontSize="xs"
        rounded={'5px'}
        w={'19px'}
        h={'19px'}
        bgColor={'brand.lightRed'}
        color={'white'}
        display={'inline-flex'}
        position={'absolute'}
        zIndex={1}
        left={10}
        right={0}
      >
        {numberofItems}
      </Text>
      <IconButton
        rounded={'20px'}
        h={'44px'}
        fontSize={'18px'}
        m={'10px'}
        p={'10px'}
        fill="white"
        as={BsCartDash}
        onClick={bp == 'sm' || bp == 'base' ? toggleSideBar : () => {}}
        bgColor={'brand.lightOrange'}
        {...props}
      />
    </Box>
  )
}

export default CartIcon
