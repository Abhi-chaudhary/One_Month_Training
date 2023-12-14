import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, you can use `unstable_createRoot` if you're not using Concurrent Mode
// const rootElement = createRoot(root, { unstable_createRoot: true });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
