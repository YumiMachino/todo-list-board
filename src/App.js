import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ToDoItems from './components/ToDoItems';
import AddToDoItem from './components/AddToDoItem';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  const [isAdding, setIsAdding] = useState(0);

  const addBtnClicked = (e) => {
    // create new obj, take the value of item from AddToDoItem

    console.log('add btn clicked', e);
    setIsAdding(isAdding + 1);
    console.log('toggling', isAdding);
    // create new item on board

    // addItem through contextAPI
  };

  return (
    <GlobalProvider>
      <div className='main-bg'>
        <Header />
        <AddToDoItem />
        <ToDoItems />
      </div>
    </GlobalProvider>
  );
};

export default App;
