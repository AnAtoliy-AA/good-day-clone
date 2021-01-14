import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../hooks/hooks';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TestForm from '../TestForm/TestForm';
import './MainScreen.scss';

const MainScreen: React.FC = observer(() => {
  const mainScreenStore = useStore('mainScreenStore')
  return (
    <div className="MainScreen">
      <button onClick={() =>{mainScreenStore.toggleIsNewTaskFormOpen()}}>+</button>
      {mainScreenStore.isNewTaskFormOpen&& <NewTaskForm />}
      {!mainScreenStore.isNewTaskFormOpen&&  <TestForm />} 
    </div>
  )
})

export default MainScreen;
