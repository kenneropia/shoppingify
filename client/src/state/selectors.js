export const categorySelector = (state) => {
  const categories = {}

  state.list.forEach(({ item, amount }) =>
    categories[item.category.name]
      ? categories[item.category.name].push({ item, amount })
      : (categories[item.category.name] = [{ item, amount }])
  )
  return categories
}

export const itemMethodSelector = ({
  insertItem,
  reduceItemAmount,
  removeItem,
}) => {
  return {
    insertItem,
    reduceItemAmount,
    removeItem,
  }
}
export const insertItemSelector = ({ insertItem }) => insertItem
