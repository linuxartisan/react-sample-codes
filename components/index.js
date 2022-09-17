// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
// functional components
import Hello from "./components/functionalComponent";

// class components
// import Hello from "./components/classComponent";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Hello />
)
