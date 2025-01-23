import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import IndustryComponent from './Components/IndustryComponent';

function App() {
  return (
    <div>
      {/* <Body/> */}
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/industry' element={<IndustryComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
