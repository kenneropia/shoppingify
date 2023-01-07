import { Box, Wrap } from '@chakra-ui/react'
import Item from './Item'

function ItemsWrapper({ Items }) {
  return (
    <Wrap spacing="20px">
      {Items.map(({ item, amount }) => (
        <Item key={item.id} item={{ ...item, amount }} />
      ))}
    </Wrap>
  )
}

export default ItemsWrapper
