import React from 'react';
import './LoginForm.scss';
import { Button } from '@material-ui/core'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { User } from '../../../shared/interfaces';
import { observer } from 'mobx-react-lite';
import { useStore } from "../../../hooks/hooks";


const LoginForm = observer(() => {
const authStore = useStore('authStore')

  const { register, handleSubmit, errors } = useForm<User>();
  const onSubmit = (data: User) => {
    axios.post('api/auth/login', {
      email: data.email,
      password: data.password
    })
      .then((response) => {
        authStore.setToken(response.data.token);
        console.log(authStore);
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
     YOUR TOKEN IS {authStore.token}
    </div>
  );
});

export default LoginForm;
