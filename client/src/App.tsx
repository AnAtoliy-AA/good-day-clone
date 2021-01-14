import React from 'react';
import { observer } from "mobx-react-lite";
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainScreen from './components/MainScreen/MainScreen';
import { useStore } from './hooks/hooks';

const App = observer(() => {
    const authStore = useStore('authStore')
    return (
        <div className="container">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header />
                 <Route exact path="/login">
                    {authStore.isAuth ? <Redirect to="/main" /> : <Login />}
                </Route>
                <Route
                    path='/register'
                    component={Register}
                />
                <Route exact path="/main">
                    {!authStore.isAuth ? <Redirect to="/login" /> : <MainScreen />}
                </Route>
            </BrowserRouter>
        </div>
    );
})

export default App
