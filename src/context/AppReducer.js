export default (state, action) => {
  switch (action.type) {
    case 'GET_ITEM':
      const todos = localStorage.getItem('todos');
      if (!todos) {
        return {
          ...state,
          list: state.list,
        };
      } else {
        const parsedTodos = [];
        parsedTodos.list = JSON.parse(todos);
        // convert string to obj
        console.log('preparse:  ', todos);
        console.log('post parse: ', parsedTodos);
        return {
          list: parsedTodos.list,
        };
      }

    case 'ADD_ITEM':
      localStorage.setItem(
        'todos',
        JSON.stringify([...state.list, action.payload])
      );
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    case 'DELETE_ITEM':
      console.log('item to be deleted', action.payload);
      const deletedList = state.list.filter(
        (item) => item.id != action.payload
      );
      console.log(deletedList);

      localStorage.setItem('todos', JSON.stringify(deletedList));

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

      localStorage.setItem('todos', JSON.stringify(updatedList));

      return {
        ...state,
        list: updatedList,
      };
  }
};
