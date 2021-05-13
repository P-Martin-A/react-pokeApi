import React from 'react';
import ReactDOM from 'react-dom';

// Me da error si sólo dejo './template/App'
// al componente App lo toma como si tuviera 
// una extension '.js'
// por eso declaro que tiene una extención '.jsx'
import App from './template/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

