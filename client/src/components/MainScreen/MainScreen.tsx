import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../hooks/hooks';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TestForm from '../TestForm/TestForm';
import './MainScreen.scss';

import isWeekend from 'date-fns/isWeekend';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

const MainScreen: React.FC = observer(() => {
  const mainScreenStore = useStore('mainScreenStore')
  const [value, setValue] = React.useState(new Date());
  return (
    <div className="MainScreen">
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddCircleIcon />}
        onClick={() => { mainScreenStore.toggleIsNewTaskFormOpen() }}
      > New task </Button>
      {mainScreenStore.isNewTaskFormOpen && <NewTaskForm />}
      {!mainScreenStore.isNewTaskFormOpen && <TestForm />}
      <LocalizaitonProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="landscape"
            openTo="date"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} variant="standard" />}
          />
      </LocalizaitonProvider>
    </div>
  )
})

export default MainScreen;
