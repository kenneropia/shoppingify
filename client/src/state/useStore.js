import create from 'zustand'

const useStore = create((set) => ({
  isSideBar: false,
  toggleSideBar: (ogg) => set((state) => ({ isSideBar: !state.isSideBar })),
  list: [],
  insertItem: (item) =>
    set((state) => {
      if (!state.list.find((oneItem) => oneItem['item'].id == item.id)) {
        return { list: [...state.list, { item, amount: 1 }] }
      } else {
        return {
          list: state.list.map((oneItem) =>
            oneItem['item'].id == item.id
              ? {
                  item: oneItem['item'],
                  amount: oneItem.amount + 1,
                }
              : {
                  item: oneItem['item'],
                  amount: oneItem.amount,
                }
          ),
        }
      }
    }),
  reduceItemAmount: (_item) =>
    set((state) => {
      return {
        list: state.list.map((oneItem) =>
          oneItem['item'].id == _item.id
            ? {
                item: oneItem['item'],
                amount:
                  Math.sign(oneItem.amount - 1) >= 1
                    ? oneItem.amount - 1
                    : oneItem.amount,
              }
            : oneItem
        ),
      }
    }),
  removeItem: (_item) =>
    set((state) => {
      return {
        list: state.list.filter((item) => {
          return _item.id !== item['item'].id
        }),
      }
    }),
  emptyList: () =>
    set(() => {
      list: []
    }),
}))
export default useStore
