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
				editing: false,
			},
			tasks: [],
		};
	}

	editTask = taskId => {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId ? { ...task, editing: !task.editing } : task
			),
		}));
	};

	submitEdit = (taskId, editedText) => {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId
					? { ...task, text: editedText || task.text, editing: !task.editing }
					: task
			),
		}));
	};

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
					editTask={this.editTask}
					onChange={this.handleChange}
					submitEdit={this.submitEdit}
				/>
			</div>
		);
	}
}

export default App;
