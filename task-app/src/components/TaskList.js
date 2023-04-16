import React, { Component } from 'react';
import TaskItem from './TaskItem';

const listOfTasks = [
	'Cherry Picking',
	'Apple Picking',
	'Strawberry Picking',
	'Grape Picking',
];

class TaskList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listOfTasks: listOfTasks,
		};
	}

	addTask = newTask => {
		this.setState({
			listOfTasks: [...this.state.listOfTasks, newTask],
		});
	};

	renderTasks = () => {
		return this.state.listOfTasks.map(task => (
			<TaskItem
				value={task}
				key={task}
				id={task}
			/>
		));
	};

	deleteTask = id => {
		this.setState({
			/// yet another map of the list to find the task to delete
		});
	};

	render() {
		return <div>{this.renderTasks()}</div>;
	}
}

export default TaskList;
