import React from "react";
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends React.Component {
// var ComponentLifeCycle = React.createClass({
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
		this.updateName = this.updateName.bind(this);
		this.testClick = this.testClick.bind(this);
	}

	updateName(event) {
		this.setState({name: event.target.value})
	}

	testClick(event) {
		alert("The name entered is: " + this.state.name)
	}

	componentWillMount() {
		console.log("Mounting stage: componentWillMount()")
	}

	componentDidMount() {
		console.log("Mounting stage: componentDidMount()")
	}

	shouldComponentUpdate() {
		console.log("Mounting stage: shouldComponentUpdate()")
		return true;
	}

	componentDidUpdate() {
		console.log("Updating stage: componentDidUpdate()")
	}

	componentWillUnmount() {
		console.log("Unmounting stage: componentWillUnmount()")
	}

	render() {
		return (
			<div>
				Enter your name: <input type="text" value={this.state.name} onChange={this.updateName} /> <br/>
				<h2>{this.state.name}</h2>
				<input type="button" value="Click here" onClick={this.testClick} />
			</div>
		)
	}
}

export default ComponentLifeCycle
