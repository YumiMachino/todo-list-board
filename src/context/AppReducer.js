export default (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id != action.payload),
      };
    case 'UPDATE_ITEM':
      const updatedItem = action.payload;
      const updatedList = state.list.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      });
      return {
        ...state,
        list: updatedList,
      };
  }
};
