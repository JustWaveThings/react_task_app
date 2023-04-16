import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
	render() {
		return (
			<div className="Task">
				taskItem Component
				<div className="TaskValue">Task: {this.props.value}</div>
				<button>Edit</button>
				<button>Delete</button>
			</div>
		);
	}
}

export default TaskItem;
