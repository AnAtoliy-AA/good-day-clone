import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useStore } from '../../hooks/hooks';
import './TestForm.scss';
import Task from '../Task/Task';

const TestForm: React.FC = observer(() => {
  const tasksStore = useStore('tasksStore')
  // const tasksArray =[...tasksStore.tasks] 

  // const [tasks, updateTasks] = useState(tasksArray);
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    console.log('RESULT: ', result.destination.droppableId)
    const items = Array.from(tasksStore.tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    tasksStore.updateTasks(items);
  }

  return (
    <div className="TestForm">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='inbox'>
          {(provided) => (<ul
            {...provided.droppableProps}
            ref={provided.innerRef}>Inbox
            {(tasksStore.tasks.length) && tasksStore.tasks.map((el, index) => {
              return (
                <Draggable key={el._id} draggableId={el._id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}>

                      <Task
                        name={el.list[0].name}
                        priority={el.list[0].priority}
                        taskId={el._id}
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
        <Droppable droppableId='SOME_DATE'>
          {(provided) => (<div
            {...provided.droppableProps}
            ref={provided.innerRef}>SOME DAY</div>
          )}
        </Droppable>
        <Droppable droppableId='ANOTHER_DATE'>
          {(provided) => (<div
            {...provided.droppableProps}
            ref={provided.innerRef}>ANOTHER_DATE</div>
          )}
        </Droppable>
        <Droppable droppableId='SOME_OTHER_DATE'>
          {(provided) => (<div
            {...provided.droppableProps}
            ref={provided.innerRef}>SOME_OTHER_DATE</div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
});

export default TestForm;
