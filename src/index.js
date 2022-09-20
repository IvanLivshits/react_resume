import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

ReactDOM.render(
  <div>
    <GlobalStyles />
    <Typography />
    <App />
  </div>,
  document.getElementById('root')
);
