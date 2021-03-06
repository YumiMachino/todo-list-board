import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const todos = {
  list: [],
};

export const GlobalContext = createContext(todos);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, todos);

  // Actions
  function getItem() {
    dispatch({
      type: 'GET_ITEM',
      payload: '',
    });
  }

  function deleteItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  }

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  }

  function updateItem(item) {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        list: state.list,
        getItem,
        deleteItem,
        addItem,
        updateItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
