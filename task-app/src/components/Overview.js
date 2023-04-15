import React from 'react';

const Overview = props => {
	const { tasks, deleteTask } = props;

	const listItems = tasks.map((task, i) => {
		return (
			<li key={task.id}>
				{`#${i}`} - {task.text} -{' '}
				<button onClick={() => deleteTask(task.id)}>delete</button>
				<button onClick={() => editTask(task.id)}>edit</button>
			</li>
		);
	});

	return <>{listItems}</>;
};

export default Overview;
