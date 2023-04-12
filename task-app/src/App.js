import './App.css';
import Overview from './components/Overview';
import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ inputValue: event.target.value });
	}
	render() {
		return (
			<div className="App">
				<Overview label="Enter Task" />
			</div>
		);
	}
}

export default App;
