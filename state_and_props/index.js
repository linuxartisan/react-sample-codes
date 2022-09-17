// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// State and Props
import Hello from "./components/state_and_props/componentState";
// import Hello from "./components/state_and_props/componentProps";


const root = ReactDOM.createRoot(document.getElementById('root'));

// Components, State
root.render(
	<Hello />
)

// Props
// root.render(
// 	<Hello msg="Hello world, how are you?" />
// )

