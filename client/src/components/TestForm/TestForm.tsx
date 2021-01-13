import axios from 'axios';
import React from 'react';
import { useStore } from '../../hooks/hooks';
import './TestForm.scss';

const TestForm: React.FC = () => {
  const authStore = useStore('authStore')

 

  const sendRequest = () => {
    axios.get('/api/task', {
      headers: {
        authorization: authStore.token
      }
    })
      .then((response) => {
        console.log(response.data);
      })
  }

  return (
    <div className="TestForm">
      <button onClick={sendRequest} >TEST</button>
    </div>
  )
};

export default TestForm;
