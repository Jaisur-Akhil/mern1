/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './user/pages/User';
import Client from './user/pages/Client';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlaces from './places/pages/UpdatePlaces';
function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<User />} exact />
      </Routes>
      <Routes>
        <Route path='/client' element={<Client />} />
      </Routes>
      <Routes>
        <Route path='/:userId/places' element={<UserPlaces />} exact />
      </Routes>
      <Routes>
        <Route path='/places/new' element={<NewPlace />} exact />
      </Routes>
      <Routes>
        <Route path='/places/:placeId' element={<UpdatePlaces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//Redirect is used for routing, When it has checked all other toutes and still the routes doesnt match . it goes to redirect
