import { useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

// Context API
import { createContext } from 'react';
export const Context = createContext('Default Value');

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'Diamond Ring';

  // Context API
  const value = 'My Context Value';

  return (
    <Context.Provider value={value}>
      <div className="App">
        <button onClick={()=>setHouse(house+1)}>Buy a new House</button>
        <GrandFather house={house} ornaments={ornaments}></GrandFather>
        </div>
    </Context.Provider>
  );
}

export default App;


// https://dmitripavlutin.com/react-context-and-usecontext/

// https://www.freecodecamp.org/news/react-context-for-beginners/

// https://kentcdodds.com/blog/how-to-use-react-context-effectively