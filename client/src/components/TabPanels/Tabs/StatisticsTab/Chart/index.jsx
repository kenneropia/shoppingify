import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react'

const LaziedChart = React.lazy(() => import('./LaziedChart.jsx'))

function Chart(props) {
  return (
    <Suspense fallback={<Box w={'100%'}>Loading...</Box>}>
      <LaziedChart {...props} />
    </Suspense>
  )
}

export default Chart
