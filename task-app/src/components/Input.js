import React, { Component } from 'react';
import './TaskItem.css';

class InputBar extends Component {
	render() {
		return (
			<div className="Task">
				<br />
				InputBar Component
				<input
					type="text"
					placeholder="this is the new task input"
				/>
				<button>Add</button>
				<br />
			</div>
		);
	}
}

export default InputBar;
