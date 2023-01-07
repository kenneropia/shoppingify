import { useBreakpointValue, Flex, Text } from '@chakra-ui/react'
import useStats from '../../../../hooks/useStats'
import Chart from './Chart'
import TopCategories from './TopCategories'
import TopItems from './TopItems'

function StatisticsTab() {
  const display = useBreakpointValue({
    base: '200px',
    xs: '200px',
    sm: '200px',
    md: '200px',
    lg: '15px',
  })
  const query = useStats()
  if (query.isLoading) return <Text>Loading...</Text>
  return (
    <Flex
      justifyContent={'start'}
      alignItems={'start'}
      flexWrap={'wrap'}
      flexDir={'column'}
      h={'100%'}
      w={'80%'}
    >
      <Flex
        flexWrap={'wrap'}
        justifyContent={'space-between'}
        h={'220px'}
        w={'100%'}
        mb={display}
      >
        <TopItems items={query.data.items} />
        <TopCategories categories={query.data.categories} />
      </Flex>
      <Flex mt={'20px'} h={'500%'} w={'100%'}>
        <Chart itemsByMonths={query.data.itemsByMonths} />
      </Flex>
    </Flex>
  )
}

export default StatisticsTab
