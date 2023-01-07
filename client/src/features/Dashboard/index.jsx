import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react'

const LaziedDashBaord = React.lazy(() => import('./LaziedDashBoard.jsx'))

function Dashboard() {
  return (
    <Suspense fallback={<Box w={'100%'}>Loading...</Box>}>
      <LaziedDashBaord />
    </Suspense>
  )
}

export default Dashboard
