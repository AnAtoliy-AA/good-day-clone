import React from 'react';
import ReactDOM from 'react-dom';
import PriorityList from './PriorityList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriorityList />, div);
  ReactDOM.unmountComponentAtNode(div);
});