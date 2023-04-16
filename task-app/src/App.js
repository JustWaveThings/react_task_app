import React, { Component } from 'react';
import TaskList from './components/TaskList';
import './App.css';
import Input from './components/Input';
import uniqid from 'uniqid';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: {
				text: '',
				id: uniqid(),
				index: 0,
				editing: false,
			},
			tasks: [],
		};
	}

	render() {
		return (
			<>
				<Input />
				<TaskList />
			</>
		);
	}
}

export default App;
