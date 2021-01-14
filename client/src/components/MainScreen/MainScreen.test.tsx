import React from 'react';
import ReactDOM from 'react-dom';
import MainScreen from './MainScreen';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});