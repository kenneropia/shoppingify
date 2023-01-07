import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import ErrorBoundary from '../components/ErrorBoundary'

const LaziedDashBaord = React.lazy(() => import('../features/Dashboard'))

const LaziedSideBar = React.lazy(() => import('../features/Sidebar'))

const TranformComponent = ({ Component }) => {
  return (
    <React.Suspense fallback={<Box w={'100%'}>Loading...</Box>}>
      <Component />
    </React.Suspense>
  )
}

const ProtectedRoutes = () => {
  return (
    <ErrorBoundary>
      <Flex
        bg={'brand.lightGray'}
        h="100%"
        w="100%"
        justifyContent={'space-between'}
        color="black"
        position={'relative'}
      >
        <TranformComponent Component={LaziedDashBaord} />
        <TranformComponent Component={LaziedSideBar} />
      </Flex>
    </ErrorBoundary>
  )
}

export default ProtectedRoutes
