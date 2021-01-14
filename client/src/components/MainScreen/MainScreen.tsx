import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TestForm from '../TestForm/TestForm';
import './MainScreen.scss';

const MainScreen: React.FC = () => (
  <div className="MainScreen">
    <NewTaskForm />
    <TestForm />
  </div>
)

export default MainScreen;
