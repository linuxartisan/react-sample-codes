import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			msg: "Hello, Welcome to ReactJS"
		}
	}


	render() {
		return <h1>{this.state.msg}</h1>
	}
}

export default Hello
