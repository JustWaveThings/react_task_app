import React, { Component } from 'react';
import TaskList from './TaskList';

class TaskTable extends Component {
	render() {
		return (
			<>
				<div>
					TaskTable / TaskList <TaskList />
				</div>
			</>
		);
	}
}

export default TaskTable;
