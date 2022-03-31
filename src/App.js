/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './user/pages/User';
import Client from './user/pages/Client';
import NewPlace from './places/pages/NewPlace';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' exact element={<User />} />
      </Routes>
      <Routes>
        <Route path='/client' element={<Client />} exact />
      </Routes>
      <Routes>
        <Route path='/places/new' element={<NewPlace />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//Redirect is used for routing, When it has checked all other toutes and still the routes doesnt match . it goes to redirect
