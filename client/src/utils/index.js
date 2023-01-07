import API from './API'

export const createNewList = async ({ name, list }) => {
  const _list = list.map((item) => {
    return { amount: item.amount, item: item['item'].id }
  })

  const newList = API.post('/lists', {
    name,
    list: _list,
  })

  return newList
}

export const createNewItem = async (item) => {
  const _item = { ...item }
  _item.category = _item.category.id
  const newItem = API.post('/items', _item)

  return newItem
}
