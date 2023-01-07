import {
  Tabs,
  TabList,
  Tab as ChakraTab,
  Box,
  Tooltip,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  AiOutlineUnorderedList,
  AiOutlineHistory,
  AiOutlineBarChart,
} from 'react-icons/ai'
import BrandIcon from '../../components/svg/BrandIcon'
import CartIcon from '../../components/svg/CartIcon'
import TabPanels from '../../components/TabPanels'

function LaziedDashBaord() {
  const display = useBreakpointValue({
    base: '80%',
    xs: '65%',
    sm: '65%',
    md: '65%',
    lg: '64%',
    xl: '75%',
  })

  return (
    <Tabs
      display={display}
      justifyContent={'space-between'}
      w={display}
      h={'100% '}
      variant="line"
      orientation="vertical"
      colorScheme={'orange'}
      bg={'brand.lightGray'}
      isLazy
    >
      <TabList
        display={'flex'}
        position={'fixed'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={'column'}
        h="100%"
        w={'80px'}
        bg={'white'}
      >
        <BrandIcon w={11 / 12} />
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'column'}
        >
          <Tab name={'items'} svgElement={AiOutlineUnorderedList} />
          <Tab name={'history'} svgElement={AiOutlineHistory} />
          <Tab name={'Statistics'} svgElement={AiOutlineBarChart} />
        </Box>
        <CartIcon />
      </TabList>
      <TabPanels />
    </Tabs>
  )
}

const Tab = ({ svgElement, name }) => {
  return (
    <ChakraTab my={'10px'}>
      <Tooltip hasArrow placement="right" label={name} aria-label="A tooltip">
        <span>
          <Icon fill={'black'} fontSize={'30px'} as={svgElement} />
        </span>
      </Tooltip>
    </ChakraTab>
  )
}

export default LaziedDashBaord
