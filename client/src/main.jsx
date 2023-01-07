import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'

const theme = extendTheme({
  components: {
    Progress: {
      defaultProps: {
        colorScheme: 'f9a109',
      },
    },
  },
  colors: {
    brand: {
      lightGray: '#fafafe',
      darkGray: '#c1c1c4',
      lightWine: '#fff0de',
      darkWine: '#80485b',
      lightOrange: '#f9a109',
      lightRed: '#eb5858',
    },
    ProgressItems: {
      500: '#f9a109',
    },
    ProgressCategories: {
      500: '#56ccf2',
    },
  },
})

import UserProvider from './context/userContext'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
