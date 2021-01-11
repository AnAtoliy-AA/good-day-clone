import React from 'react';
import {observer, inject} from "mobx-react";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TestForm from './components/TestForm/TestForm'

// function App() {
//   return (
   
//   );

// }


// @inject("mainStore")
// @observer
export default class App extends React.Component {
    // constructor(props) {
    //     super(props);       
    // };

    render() { 
        // const mainStore = this.props.mainStore;
    
        return (
            <div className="container">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
     <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/register'
        component={Register}
      />
<TestForm />
    </BrowserRouter>           
            </div>            
        );
    }
}


