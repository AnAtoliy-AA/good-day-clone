import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import './MainScreen.scss';

const MainScreen: React.FC = () => (
  <div className="MainScreen">
    MainScreen Component
    <NewTaskForm />
  </div>
);

export default MainScreen;
