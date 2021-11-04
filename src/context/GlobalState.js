// Initial state -> get info grom localstorage
// add items
// delete item
import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const todos = {
  list: [],
};

// Create context (context has Provider)
export const GlobalContext = createContext(todos);

// Provider component
export const GlobalProvider = ({ children }) => {
  // state, and all the action
  // const [state, dispatch] = useReducer(AppReducer, sampleToDos);
  const [state, dispatch] = useReducer(AppReducer, todos);

  function getItem() {
    dispatch({
      type: 'GET_ITEM',
      payload: '',
    });
  }

  // Actions
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
