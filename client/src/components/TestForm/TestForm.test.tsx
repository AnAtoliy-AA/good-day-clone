import React from 'react';
import ReactDOM from 'react-dom';
import TestForm from './TestForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});