import axios from 'axios';
import React from 'react';
import './TestForm.scss';

const sendRequest = () => {
  axios.get('/api/category', {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWFrc2FuZHJhdTg5QGdtYWlsLmNvbSIsInVzZXJJZCI6IjVmZmI3ZGM1MTVlYTNhNDNhNDBjNzZhMCIsImlhdCI6MTYxMDM3NjIzOSwiZXhwIjoxNjEwMzc5ODM5fQ.3l__IqUBTps_ZtgH3ZHcmr9S6lsXnxOVr8MpqRzClTc'
  })
    .then((response) => {
      console.log(response.data.token);
    })
}

const TestForm: React.FC = () => (
  <div className="TestForm">
    <button onClick={sendRequest} >TEST</button>
  </div>
);

export default TestForm;
