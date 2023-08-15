import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MainScreen from './page/MainScreen';
import LoginScreen from './page/LoginScreen';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
        <Route path='/*' element={<MainScreen></MainScreen>}></Route>
      </Routes>
    </div>
  );
};
export default App;