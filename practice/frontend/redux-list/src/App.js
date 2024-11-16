import './App.css';
import DataEntry from "./components/dataEntry"
import SortingButtons from './components/sortingButtons';
import Listitem from './components/listItem';
import TotalItems from './components/total';
import { useSelector } from 'react-redux';

function App() {
  const {items} =useSelector((state)=>state.inventory)
  
  return (
    <div className="App">
      <div className="mainBlock">
        <div className="left"><DataEntry /></div>
        <div className="right">
          <SortingButtons/>
          <div className="items">
            {items.length > 0 ? items.map((item)=><Listitem key={item.id} {...item}/>):'No Items...'}
          </div>
          <TotalItems total={20}/>
        </div>
      </div>
    </div>
  );
}

export default App;
