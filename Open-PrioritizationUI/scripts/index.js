import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

VSS.ready(function() {
	ReactDOM.render(<App />, document.getElementById('root'));
});
