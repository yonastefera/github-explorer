import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './queries';
import { TopicsPage } from './containers/TopicsPage';

ReactDOM.render(
  <React.StrictMode>
    <TopicsPage />
  </React.StrictMode>,
  document.getElementById('root'),
);
