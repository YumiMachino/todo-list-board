import React, { useContext, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

function ToDoItems() {
  const { list, getItem } = useContext(GlobalContext);
  console.log('todo items...');

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
