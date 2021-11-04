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
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id
            ? (item.item = action.payload.item)
            : item.item
        ),
      };
  }
};
