import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useStore } from '../../hooks/hooks';
import './TestForm.scss';
import Task from '../Task/Task';
import axios from 'axios';

const TestForm: React.FC = () => {
  const tasksStore = useStore('tasksStore')
  const authStore = useStore('authStore')

  //TODO
  let [tasks, updateTasks] = useState([...tasksStore.tasks]);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    tasks = Array.from(tasksStore.tasks);
    //TODO
    // const [reorderedItem] = tasks.splice(result.source.index, 1);
    // tasks.splice(result.destination.index, 0, reorderedItem);

    //TODO
    const movedArr = tasks.map(el => {
      if (el._id === result.draggableId) {
        el.list[0].deadline = result.destination.droppableId
      }
      return el
    });

    updateTask(result.draggableId, result.destination.droppableId)
    tasksStore.updateTasks(movedArr);
    updateTasks(movedArr)
  }

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

  const updateTask = async (itemId: string, date: string) => {
    axios.get(`/api/task/${itemId}`, {
      headers: {
        authorization: authStore.token
      },
    })
      .then((response) => {
        tasksStore.setActiveTask(response.data.list[0])
        axios.patch(`api/task/${itemId}`, {
          list: {
            name: tasksStore.activeTask?.name,
            priority: tasksStore.activeTask?.priority,
            deadline: date
          }
        }, {
          headers: {
            authorization: authStore.token
          },
        })
          .then((response) => {
            sendRequest()
          })
      })
  }

  const addDays = () => {
    const date = new Date();
    let datesCollection = []

    for (let i = 0; i < 7; i++) {
      const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
      datesCollection.push(`${newDate.getDate()}/${newDate.getMonth() + 1}`);
    }

    return datesCollection
  }

  return (
    <div className="TestForm">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='inbox'>
          {(provided) => (<ul
            {...provided.droppableProps}
            ref={provided.innerRef}>Inbox
            { tasksStore.tasks.filter(el => !el.list[0].deadline).map((el, index) => {
              return (
                <Draggable key={el._id} draggableId={el._id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}>
                      <Task
                        taskId={el._id}
                        name={el.list[0].name}
                        priority={el.list[0].priority}
                        deadline={el.list[0].deadline}
                      />
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
          )}
        </Droppable>
        {addDays().map((day, index) => {
          return (<Droppable droppableId={day} key={index}>
            {(provided) => (<ul
              {...provided.droppableProps}
              ref={provided.innerRef}>{day}
              {(tasksStore.tasks.length) && tasksStore.tasks.filter(el => el.list[0].deadline === day).map((el, index) => {
                return (
                  <Draggable key={el._id} draggableId={el._id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>

                        <Task
                          taskId={el._id}
                          name={el.list[0].name}
                          priority={el.list[0].priority}
                          deadline={el.list[0].deadline}
                        />
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
            )}
          </Droppable>
          )
        })}
      </DragDropContext>
    </div>
  )
};

export default observer(TestForm);
