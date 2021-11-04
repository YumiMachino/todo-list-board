import './App.css';
import Header from './components/Header';
import ToDoItems from './components/ToDoItems';
import AddToDoItem from './components/AddToDoItem';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
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
