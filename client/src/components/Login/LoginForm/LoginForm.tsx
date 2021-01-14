import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite';
import { Button } from '@material-ui/core'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

import './LoginForm.scss';
import { User } from '../../../shared/interfaces';
import { useStore } from "../../../hooks/hooks";

const LoginForm = observer(() => {
  const authStore = useStore('authStore')
  const tasksStore = useStore('tasksStore')
  
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

  const { register, handleSubmit, errors } = useForm<User>();
  const onSubmit = (data: User) => {
    axios.post('api/auth/login', {
      email: data.email,
      password: data.password
    })
      .then((response) => {
        authStore.setToken(response.data.token);
        authStore.setIsAuth(true);
        sendRequest()
      })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              name="email"
              ref={register({ required: true })}
            />
          </label>
          {errors.email && errors.email.type === 'required' && (
            <div className="error">Your must enter your text.</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              ref={register({ required: true })}
            />
          </label>
          {errors.password && errors.password.type === 'required' && (
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
          Login
        </Button>
      </form>
    </div>
  );
});

export default LoginForm;
