import React from 'react'
import { Box, useBreakpoint } from '@chakra-ui/react'

import { Routes, Route, Outlet, MemoryRouter } from 'react-router-dom'
import useStore from '../../state/useStore'

const LaziedCreateNewList = React.lazy(() =>
  import('../../components/Aside/CreateNewList.jsx')
)

const LaziedCreateNewItem = React.lazy(() =>
  import('../../components/Aside/CreateNewItem/index.jsx')
)

const LaziedPreviewItem = React.lazy(() =>
  import('../../components/Aside/PreviewItem.jsx')
)

const TranformComponent = ({ Component }) => {
  return (
    <React.Suspense fallback={<Box w={'100%'}>Loading...</Box>}>
      <Component />
    </React.Suspense>
  )
}

const SiderBarContainer = () => {
  const bp = useBreakpoint()
  const isSideBar = useStore((state) => state.isSideBar)
  console.log(bp == 'base')
  console.log(isSideBar)
  console.log((bp == 'sm' && !isSideBar) || (bp == 'base' && !isSideBar))
  let display = 'none'
  if (
    (bp != 'sm' && isSideBar === true) ||
    (bp != 'base' && isSideBar === true)
  ) {
    display = 'flex'
  } else if ((bp == 'sm' && !isSideBar) || (bp == 'base' && !isSideBar)) {
    display = 'none'
  } else {
    display = 'flex'
  }
  return (
    <Box
      display={display}
      position={'fixed'}
      right={0}
      w={{
        base: '80%',
        xs: '100%',
        sm: '100%',
        md: '35%',
        lg: '30%',
        xl: '30%',
      }}
      h="100%"
      color="black"
      flexDirection={'column'}
    >
      <Outlet />
    </Box>
  )
}

function Sidebar() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SiderBarContainer />}>
          <Route
            path="/"
            element={<TranformComponent Component={LaziedCreateNewList} />}
          />
          <Route
            path="/createItem"
            element={<TranformComponent Component={LaziedCreateNewItem} />}
          />
          <Route
            path="/previewItem"
            element={<TranformComponent Component={LaziedPreviewItem} />}
          />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

export default Sidebar
