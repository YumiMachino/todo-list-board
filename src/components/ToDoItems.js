import React, { useContext } from 'react';
import ToDoItem from './ToDoItem';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const ToDoItems = () => {
  const { list } = useContext(GlobalContext);

  return (
    <div className='container'>
      {list.map((listItem) => (
        <ToDoItem key={listItem.id} listItem={listItem} />
      ))}
    </div>
  );
};

export default ToDoItems;
