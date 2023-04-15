import React, { Component } from 'react';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editedText: '',
		};
	}

	handleEditChange = e => {
		this.setState({
			editedText: e.target.value,
		});
	};

	render() {
		const { tasks, deleteTask, editTask, submitEdit } = this.props;
		const { editedText } = this.state;

		const listItems = tasks.map((task, i) => {
			return (
				<li key={task.id}>
					{task.editing ? (
						<>
							<input
								type="text"
								defaultValue={task.text}
								onChange={this.handleEditChange}
							/>
							<button
								type="submit"
								onClick={() => submitEdit(task.id, editedText)}
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
