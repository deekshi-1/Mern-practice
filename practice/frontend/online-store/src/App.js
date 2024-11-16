import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>StoreFront</h2>
      <hr/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
