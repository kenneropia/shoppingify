import {
  TabPanels as CharkaTabPanels,
  TabPanel as CharkaTabPanel,
} from '@chakra-ui/react'
import ItemTab from './Tabs/ItemsTab'
import HistoryTab from './Tabs/HistoryTab'
import StatisticsTab from './Tabs/StatisticsTab'

function TabPanels() {
  return (
    <CharkaTabPanels bg={'brand.lightGray'} w={'100%'} ml={'100px'}>
      <CharkaTabPanel>
        <ItemTab />
      </CharkaTabPanel>
      <CharkaTabPanel>
        <HistoryTab />
      </CharkaTabPanel>
      <CharkaTabPanel>
        <StatisticsTab />
      </CharkaTabPanel>
    </CharkaTabPanels>
  )
}

export default TabPanels
