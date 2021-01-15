import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task />, div);
  ReactDOM.unmountComponentAtNode(div);
});