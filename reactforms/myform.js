import React from "react";
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
		this.updateName = this.updateName.bind(this)
		this.formSubmit = this.formSubmit.bind(this)
	}

	updateName(event) {
		this.setState({name: event.target.value})
	}

	formSubmit(event) {
		event.preventDefault()
		alert("The name entered is: " + this.state.name)
	}

	render() {
		return (
			<form>
				Enter your name: <input type="text" value={this.state.name} onChange={this.updateName} /> <br/>
				<h2>{this.state.name}</h2>
				<input type="submit" value="Submit" onClick={this.formSubmit} />
			</form>
		)
	}
}

export default MyForm
