import { Component } from 'react'
import { Button, Center, Flex, Text, useToast } from '@chakra-ui/react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(err) {
    // Catch errors in any components below and re-render with error message
    // let message = err.message ?? err.response.data.error.message ??
    let message = null
    if (err.message) {
      message = err.message
    }
    // else if (err.response.data.error.message) {
    //     dispatch({ type: SET_ERROR, payload: err.response.data.error })
    //   } else if (err.response) {
    //     dispatch({ type: SET_ERROR, payload: err.response.data })
    //   }
  }

  render() {
    const { children } = this.props

    if (this.state.hasError) return <ErrorMessage error={this.state.error} />

    return <>{children}</>
  }
}

export default ErrorBoundary
const ErrorMessage = ({ error }) => {
  return (
    <Center height={'100vh'}>
      <Flex alignItems={'center'} flexDirection={'column'}>
        <Text fontSize={'3xl'} fontWeight={'700'}>
          {error?.message ? error.message : 'Sorry, an error occurred'}
        </Text>
        <Button
          mt={'30px'}
          color={'white'}
          bgColor={'brand.darkWine'}
          width={'50%'}
          onClick={() => location.reload()}
        >
          Reload
        </Button>
      </Flex>
    </Center>
  )
}
