import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'
import { format } from 'date-fns'
import { Flex, Text } from '@chakra-ui/react'
const dateToName = (month) => {
  const date = new Date()

  date.setMonth(month)

  return format(date, 'MMMM')
}

const LaziedChart = ({ itemsByMonths }) => {
  const data = itemsByMonths.map((li) => ({
    name: dateToName(li._id),
    uv: li.numberofItem,
  }))
  return (
    <Flex width={'100%'} justifyContent={'start'} flexDir={'column'}>
      <Text fontWeight={'600'} fontSize={'22px'}>
        Monthly Summary
      </Text>
      <Flex width={'100%'} mt={'15px'}>
        <ResponsiveContainer width="95%" height={400}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#f9a109" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  )
}

export default LaziedChart
