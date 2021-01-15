import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useStore } from '../../hooks/hooks';
import './TestForm.scss';
import Task from '../Task/Task';

const TestForm: React.FC = observer(() => {
  const tasksStore = useStore('tasksStore')

  const [tasks, updateTasks] = useState();
  const handleOnDragEnd = (result: any) => {
    // if (!result.destination) return;
    // const items = Array.from(tasks);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);

    // updateTasks(items);
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
      </DragDropContext>

      <div>SOME_DATE</div>
      <div>ANOTHER_DATE</div>
      <div>SOME_OTHER_DATE</div>
    </div>

  )
});

export default TestForm;
