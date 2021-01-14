import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './NewTaskForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTaskForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});