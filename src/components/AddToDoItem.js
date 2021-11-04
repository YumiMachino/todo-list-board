import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const AddToDoItem = () => {
  const [item, setItem] = useState('');

  const { addItem } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      item: item,
    };

    addItem(newItem);
    setItem('');
  };

  return (
    <form style={styles.container} onSubmit={onSubmit}>
      <input
        type='text'
        style={styles.inputStyle}
        placeholder='Enter todo item here...'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className='add-btn'>Add</button>
    </form>
  );
};

const styles = {
  container: {
    width: '70vw',
    margin: '3rem auto 0 auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputStyle: {
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: '0.4rem 1.2rem',
    margin: '0 10px',
    fontFamily: 'inherit',
    borderRadius: '4px',
    fontSize: '1.2rem',
    color: '#4C574E',
    fontWeight: 'bold',
  },
};

export default AddToDoItem;
