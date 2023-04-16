import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../App.css';

class Input extends Component {
	constructor() {
		super();

		this.state = {
			task: {
				text: '',
				id: uniqid(),
				index: 0,
				editing: false,
			},
		};
	}

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
		const task = this.state;

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
			</div>
		);
	}
}

export default Input;
