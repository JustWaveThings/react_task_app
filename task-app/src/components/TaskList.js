import React, { Component } from 'react';

class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editedTexts: {},
		};
	}

	deleteTask = taskId => {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== taskId),
		});
	};

	handleEditChange = (taskId, e) => {
		this.setState({
			editedTexts: {
				...this.state.editedTexts,
				[taskId]: e.target.value,
			},
		});
	};

	// should be moved to TaskList.js

	editTask = taskId => {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId ? { ...task, editing: !task.editing } : task
			),
		}));
	};

	// should be moved to TaskList.js

	submitEdit = (taskId, editedText) => {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId
					? { ...task, text: editedText || task.text, editing: !task.editing }
					: task
			),
		}));
	};

	render() {
		const listItems = this.props.tasks.map((task, i) => {
			return (
				<li key={task.id}>
					{task.editing ? (
						<>
							<input
								type="text"
								defaultValue={this.props.task.text}
								onChange={e => this.handleEditChange(task.id, e)}
							/>
							<button
								type="submit"
								onClick={() =>
									this.submitEdit(task.id, this.state.editedTexts[task.id])
								}
							>
								Submit Task
							</button>
						</>
					) : (
						<>
							{`#${i + 1}`} - {task.text}
							<button onClick={() => this.deleteTask(task.id)}>Delete</button>
							<button onClick={() => this.editTask(task.id)}>Edit</button>
						</>
					)}
				</li>
			);
		});

		return <>{listItems}</>;
	}
}

export default TaskList;
