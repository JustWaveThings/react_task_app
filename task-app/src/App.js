import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			task: {
				text: '',
				id: uniqid(),
				index: 0,
			},
			tasks: [],
		};
	}

	deleteTask = taskId => {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== taskId),
		});
	};

	handleChange = e => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
			},
		});
	};

	onSubmitTask = e => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {
				text: '',
				id: uniqid(),
			},
		});
	};

	render() {
		const { task, tasks } = this.state;

		return (
			<div className="App">
				<form onSubmit={this.onSubmitTask}>
					<label htmlFor="taskInput">Enter task</label>
					<input
						onChange={this.handleChange}
						value={task.text}
						type="text"
						id="taskInput"
					/>
					<button type="submit">Add Task</button>
				</form>
				<Overview
					tasks={tasks}
					deleteTask={this.deleteTask}
				/>
			</div>
		);
	}
}

export default App;
