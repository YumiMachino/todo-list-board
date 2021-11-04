import React, { useContext, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import { GlobalContext } from '../context/GlobalState';

function ToDoItems() {
  const { list, getItem } = useContext(GlobalContext);

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className='container'>
      {list.map((listItem) => (
        <ToDoItem key={listItem.id} listItem={listItem} />
      ))}
    </div>
  );
}

export default ToDoItems;
