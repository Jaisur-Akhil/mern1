/** @format */

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import User from './user/pages/User';
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact>
        <User />
      </Route>
      Hello World
    </BrowserRouter>
  );
}

export default App;
