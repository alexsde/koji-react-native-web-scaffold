import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import App from './src/App';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

ReactDOM.render(
    <App />, 
    document.getElementById('root'));
