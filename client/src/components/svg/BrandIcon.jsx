import { Icon, Box } from '@chakra-ui/react'

function BrandIcon(props) {
  return (
    <Box display={'flex'} justifyContent="center" w={'100%'}>
      <Icon
        maxW="50px"
        w="100%"
        fontSize={70}
        fill="none"
        viewBox="0 0 42 43"
        {...props}
      >
        <path
          fill="#3F3D56"
          d="M32 2a1 1 0 1 0 0-1 1 1 0 0 0 0 1ZM32 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM41 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
        <path
          fill="#3F3D56"
          d="m39 15-1-1c-2 2-5 0-5 0-2 1-3-2-3-2-3-1-3-4-3-4l-1-3 1-1-1-2A20 20 0 0 0 0 22a20 20 0 1 0 40-7h-1Z"
        />
        <path
          fill="#3F3D56"
          d="m38 15-2-1c-1 2-4 0-4 0-2 1-3-2-3-2-3-1-2-3-2-3-2-1-1-3-1-3V3A19 19 0 0 0 1 21a19 19 0 1 0 37-6Z"
        />
        <path
          fill="#F9A109"
          d="M18 13s-3-2-7 0l-2 3c0 2 0 4 2 6l7 9a2 2 0 0 0 3 0l5-9 2-5-4-5s-3-1-6 1Z"
        />
        <path
          fill="#000"
          d="M18 13s-3-2-7 0l-2 3c0 2 0 4 2 6l7 9a2 2 0 0 0 3 0l5-9 2-5-4-5s-3-1-6 1Z"
          opacity=".1"
        />
        <path
          fill="#F9A109"
          d="M18 14s-3-2-6 0l-2 3 1 5 7 8a2 2 0 0 0 2 1 2 2 0 0 0 1-1l5-8 1-5c0-2-1-4-3-4 0 0-3-1-6 1Z"
        />
        <path
          fill="#000"
          d="M18 17h-3l-1 2a3 3 0 0 0 1 2l4 5 3-5v-2l-1-2h-3ZM9 25l1 2v3l1 1-1 1 1 1M29 18v3l-1 1 1 2v1h1l1 1v1M37 20h-1l-1 1v1M32 16v2M33 28l-1 2-1 1v3M25 4h-2l-1 1-2 1-1 1-2 1v1M9 7 8 9v1l-1 1-1 2H5l1 2M4 16l-1 2 1 1v2l-1 4 1 1 1 1M6 17l1 1v2l1-1 1 1M21 36h3l1-1h1M8 33v1h2l1 1v1M24 28l1-1 1-1h1v-1"
          opacity=".1"
        />
      </Icon>{' '}
    </Box>
  )
}

export default BrandIcon
