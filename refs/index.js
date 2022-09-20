// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
import './index.css';


// React refs
import CustomTextInput from "./refs/custom_text_input";
import AutoFocusTextInput from "./refs/autofocus_text_input";

const root = ReactDOM.createRoot(document.getElementById('root'));


// React refs
root.render(
	<CustomTextInput />
	// <AutoFocusTextInput />
)

