import React from 'react';
import { observer} from "mobx-react-lite";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainScreen from './components/MainScreen/MainScreen';

const App = observer(() => {
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
                <Route
                    path='/main'
                    component={MainScreen}
                />
            </BrowserRouter>
        </div>
    );
})

export default App
