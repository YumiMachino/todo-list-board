import './App.css';
import { useState } from 'react';
import AddButton from './components/AddButton';
import Header from './components/Header';
import ToDoItems from './components/ToDoItems';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  const [isAdding, setIsAdding] = useState(0);

  const addBtnClicked = (e) => {
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
        <AddButton addBtnClicked={addBtnClicked} />
        <ToDoItems isAdding={isAdding} />
      </div>
    </GlobalProvider>
  );
};

export default App;
