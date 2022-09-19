import React from 'react';
import { Route, Router, Routes, BrowserRouter, HashRouter } from 'react-router-dom';

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import ContactPage from './pages/ContactPage'

// export default function App() {
// 	return(
// 		<BrowserRouter>
// 		  <Routes>
// 			<Route exact path="/" element={ <HomePage /> } />
// 			<Route path="/contact" element={ <ContactPage /> } />
// 			<Route path="/:id" element={ <UserPage /> } />
// 		  </Routes>
// 		</BrowserRouter>
// 	)
// }

// export default function App() {
// 	return (
// 		<HashRouter>
// 			<div>
// 				<Route exact path="/" component={HomePage} />
// 	 			<Route path="/contact" component={ContactPage} />
// 			</div>
// 		</HashRouter>
// 	)
// }


export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={ <HomePage /> } />
	 			<Route path="/contact" element={ <ContactPage /> } />
			</Routes>
		</HashRouter>
	)
}
