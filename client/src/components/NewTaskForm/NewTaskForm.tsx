import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import 'date-fns';

import { NewTask } from '../../shared/interfaces';
import { useStore } from "../../hooks/hooks";
import './NewTaskForm.scss';



const NewTaskForm = () => {
  const authStore = useStore('authStore')
  const tasksStore = useStore('tasksStore')
  const mainScreenStore = useStore('mainScreenStore')

  const { register, handleSubmit, errors } = useForm<NewTask>();

  const sendRequest = async () => {
    axios.get('/api/task', {
      headers: {
        authorization: authStore.token
      }
    })
      .then((response) => {
        tasksStore.setTasks(response.data)
      })
  }

  const onSubmit = (data: NewTask) => {
    axios.post('api/task', {
      list: {
        name: data.name,
        priority: priority,
        deadline: moment(selectedDate).format('DD MMM yyyy')
      }
    }, {
      headers: {
        authorization: authStore.token
      },

    })
      .then((response) => {
        sendRequest()
        mainScreenStore.toggleIsNewTaskFormOpen()
      })
  };

  const [priority, setPriority] = React.useState('');

  const handleChange = (event: any) => {
    setPriority(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className="NewTaskForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <TextField id="name"
            size='small'
            name="name"
            error={errors.name && true}
            autoComplete='false'
            label="Write new task name here"
            variant="outlined"
            inputRef={register({ required: true })} />
          {errors.name && errors.name.type === 'required' && (
            <div className="error">Your must enter task name.</div>
          )}
        </div>
        <div className="field">
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='priority'
              value={priority}
              onChange={handleChange}
            >
              <MenuItem value={'Emergency'}>Emergency</MenuItem>
              <MenuItem value={'Blocker'}>Blocker</MenuItem>
              <MenuItem value={'Highest'}>Highest</MenuItem>
              <MenuItem value={'High'}>High</MenuItem>
              <MenuItem value={'Normal'}>Normal</MenuItem>
              <MenuItem value={'Low'}>Low</MenuItem>
              <MenuItem value={'Lowest'}>Lowest</MenuItem>
            </Select>
            <FormHelperText>Select task priority</FormHelperText>
          </FormControl>
        </div>
        <div className="field">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Choose deadline of you project"
                format="dd MMM yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <div className="field">
          Progress
        </div>

        <Button
          variant="contained"
          color="primary"
          size="small"
          type='submit'
          startIcon={<ExitToAppTwoToneIcon />}
        >
          SaveTask
        </Button>
      </form>
    </div>
  );
};

export default NewTaskForm;
