import React, { useContext, useState } from 'react';
import { FaTrash, FaSave } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';

const ToDoItem = ({ listItem, isNew }) => {
  const [itemContent, setItemContent] = useState(listItem.item);

  const { list } = useContext(GlobalContext);
  const { deleteItem, addItem, updateItem } = useContext(GlobalContext);

  const saveClicked = (id) => {
    console.log(id);
    const filtered = list.filter((item) => item.id == id);
    console.log('filtered', filtered);
    // check it already in item,
    if (filtered.length == 0) {
      console.log('the item has not yet been saved');

      let newItem = {
        id: listItem.id,
        item: itemContent,
      };
      //   listItem.item = itemContent;

      addItem(newItem);
      console.log('item added..?', newItem);
      console.log('new list...', list);
    }
    // if it is, update the item here

    // else add new Item
    console.log('edit clicked');
  };

  return (
    <div className='item' style={{ backgroundColor: `${returnRandColor()}` }}>
      <div className='item-tab' style={styles.itemTab}>
        <button
          style={styles.btnStyle}
          onClick={() => saveClicked(listItem.id)}
        >
          <FaSave />
        </button>
        <button style={styles.btnStyle} onClick={() => deleteItem(listItem.id)}>
          <FaTrash />
        </button>
      </div>
      <div className='item-main' style={styles.main}>
        <input
          type='text'
          value={`${itemContent}`}
          style={styles.inputStyle}
          onChange={(e) => setItemContent(e.target.value)}
          placeholder={isNew ? `Enter item here...` : `...`}
        />
      </div>
    </div>
  );
};

const colors = [
  '#A6C2B8',
  '#C1C2A6',
  '#E3E5AA',
  '#E5C6AA',
  '#A6ACC2',
  '#A7A6C2',
  '#C1A6C2',
  '#C2A6B0',
];

const returnRandColor = () => {
  let randInt = Math.floor(Math.random() * colors.length);
  return colors[randInt];
};

const styles = {
  itemTab: {
    width: '100%',
    height: 'auto',
    textAlign: 'right',
    backgroundColor: '#4B839C',
    borderRadius: '5px 5px 0 0',
  },
  btnStyle: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '.4rem',
    fontSize: '1rem',
    cursor: 'pointer',
    color: '#fbfcfb',

    ':hover': {
      color: '#E3E5AA',
    },
  },
  main: {
    padding: '1rem',
    width: '100%',
    height: '100%',
  },
  inputStyle: {
    width: '100%',
    height: '85%',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    fontFamily: 'inherit',
    fontSize: '1.4rem',
  },
};

export default ToDoItem;
