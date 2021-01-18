import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './Task.scss';
import axios from 'axios';
import { useStore } from '../../hooks/hooks';
import { TaskFields } from '../../shared/interfaces';
import { observer } from 'mobx-react-lite';

const Task = observer((props:TaskFields) => {
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

  const deleteItem = async (itemId: string) => {
    axios.delete(`/api/task/${itemId}`, {
      headers: {
        authorization: authStore.token
      },
    })
      .then(() => {
        sendRequest()
      })
  }
  return (
    <div className="Task">
      <div>
        <h3>{props.name}</h3>
        <h5>{props.priority}</h5>
        <div>Deadline:{props.deadline}</div>
      </div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => { deleteItem(props.taskId) }}
      >
      </Button>
    </div>
  )
});

export default Task;
