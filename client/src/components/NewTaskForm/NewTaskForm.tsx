import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

import './NewTaskForm.scss';
import { NewTask } from '../../shared/interfaces';
import { useStore } from "../../hooks/hooks";

const NewTaskForm = () => {
  const authStore = useStore('authStore')

  const { register, handleSubmit, errors } = useForm<NewTask>();
  const onSubmit = (data: NewTask) => {
    axios.post('api/task', {
      list: {
        name: data.name,
        // assigned: '',
        // required: '',
        // priority: '',
        // deadline: '',
        // status: '',
        // estimate: '',
        // startEnd: '',
        // progress: 0
      }
    }, {
      headers: {
        authorization: authStore.token
      },

    })
      .then((response) => {
        console.log('TASK RESPONSE: ', response.data)
      })
  };
  return (
    <div className="NewTaskForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <TextField id="name" size='small' name="name" label="Write new task here" variant="outlined" inputRef={register} />
          {errors.name && errors.name.type === 'required' && (
            <div className="error">Your must enter your text.</div>
          )}
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