import './App.css';
import ProfileIntro from "./Component/ProfilePage/profileMain"
import Toggle from './Component/state/toggle';

function App() { 
  return (
    <div className="App">
       <ProfileIntro/> 
      <hr></hr>
      <Toggle/>
    </div>
    
  );
}

export default App;
