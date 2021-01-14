import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

import './NewTaskForm.scss';
import { NewTask } from '../../shared/interfaces';
import { useStore } from "../../hooks/hooks";
import PriorityList from './PriorityList/PriorityList';

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
      }
    }, {
      headers: {
        authorization: authStore.token
      },

    })
      .then((response) => {
        sendRequest()
        console.log('TASK RESPONSE: ', response.data)
        mainScreenStore.toggleIsNewTaskFormOpen()
      })
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
          PriorityList
        </div>
        <div className="field">
          Deadline
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
