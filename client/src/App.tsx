import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/register'
        component={Register}
      />

    </BrowserRouter>
  );

}

export default App;
