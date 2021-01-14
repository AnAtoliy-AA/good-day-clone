import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStore } from '../../hooks/hooks';
import './TestForm.scss';

const TestForm: React.FC = observer(() => {
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
    <div className="TestForm">
      {(tasksStore.tasks.length) && tasksStore.tasks.map(el => {
        return (<div key={el._id}><div>
          Name: {el.list[0].name}
        </div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => { deleteItem(el._id) }}
          >
            Delete
      </Button>
        </div>)
      })}
    </div>
  )
});

export default TestForm;
