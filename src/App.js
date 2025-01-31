import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import IndustryComponent from './Components/IndustryComponent';
import ProfilePage from './Components/ProfilePage';
import LegacyPage from './Components/LegacyPage';

function App() {
  return (
    <div>
      {/* <Body/> */}
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/industry' element={<IndustryComponent/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/legacy' element={<LegacyPage/>} />
      </Routes>
    </div>
  );
}

export default App;
