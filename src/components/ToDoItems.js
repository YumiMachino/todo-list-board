import React, { useContext } from 'react';
import ToDoItem from './ToDoItem';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const ToDoItems = ({ isAdding }) => {
  const { list } = useContext(GlobalContext);

  const getNewItem = () => {
    const newItem = {
      id: uuidv4(),
      item: '',
    };
    return newItem;
  };

  const newStickyNote = () => {
    let newItems = [];
    for (let i = 0; i < isAdding; i++) {
      newItems.push(<ToDoItem listItem={getNewItem()} isNew={true} />);
    }
    return newItems;
  };

  return (
    <div className='container'>
      {newStickyNote()}

      {list.map((listItem) => (
        <ToDoItem key={listItem.id} listItem={listItem} isNew={false} />
      ))}
    </div>
  );
};

export default ToDoItems;
