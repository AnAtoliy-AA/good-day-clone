import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../hooks/hooks';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TestForm from '../TestForm/TestForm';
import './MainScreen.scss';

const MainScreen: React.FC = observer(() => {
  const tasksStore = useStore('authStore')
  const mainScreenStore = useStore('mainScreenStore')

  return (
    <div className="MainScreen">
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddCircleIcon />}
        onClick={() => { mainScreenStore.toggleIsNewTaskFormOpen() }}
      > New task </Button>
      {mainScreenStore.isNewTaskFormOpen ? <NewTaskForm /> : <TestForm />}
    </div>
  )
})

export default MainScreen;
