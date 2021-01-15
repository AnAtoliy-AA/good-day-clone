import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/hooks';
import './TestForm.scss';
import Task from '../Task/Task';

const TestForm: React.FC = observer(() => {
  const tasksStore = useStore('tasksStore')

  return (
    <div className="TestForm">
      <div>Inbox
      {(tasksStore.tasks.length) && tasksStore.tasks.map(el => {
        return (<div key={el._id}>
          <Task 
          name={el.list[0].name}
          priority={el.list[0].priority}
          taskId={el._id}
          />
        </div>)
      })}
      </div>
      <div>SOME_DATE</div>
      <div>ANOTHER_DATE</div>
      <div>SOME_OTHER_DATE</div>
    </div>
  )
});

export default TestForm;
