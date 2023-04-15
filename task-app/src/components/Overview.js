import React, { Component } from 'react';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editedTexts: {},
		};
	}

	handleEditChange = (taskId, e) => {
		this.setState({
			editedTexts: {
				...this.state.editedTexts,
				[taskId]: e.target.value,
			},
		});
	};

	render() {
		const { tasks, deleteTask, editTask, submitEdit } = this.props;

		const listItems = tasks.map((task, i) => {
			return (
				<li key={task.id}>
					{task.editing ? (
						<>
							<input
								type="text"
								defaultValue={task.text}
								onChange={e => this.handleEditChange(task.id, e)}
							/>
							<button
								type="submit"
								onClick={() =>
									submitEdit(task.id, this.state.editedTexts[task.id])
								}
							>
								Submit Task
							</button>
						</>
					) : (
						<>
							{`#${i}`} - {task.text}
							<button onClick={() => deleteTask(task.id)}>Delete</button>
							<button onClick={() => editTask(task.id)}>Edit</button>
						</>
					)}
				</li>
			);
		});

		return <>{listItems}</>;
	}
}

export default Overview;
