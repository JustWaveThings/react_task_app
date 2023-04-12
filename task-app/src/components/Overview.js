import React, { Component } from 'react';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: '', values: [] };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = event => {
		this.setState({ inputValue: event.target.value });
	};
	handleSubmit = event => {
		event.preventDefault();
		const newValue = this.state.inputValue;
		this.setState(prevState => ({
			values: [...prevState.values, newValue],
			inputValue: '',
		}));
	};

	render() {
		return (
			<div>
				<h2>{this.props.label}</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task-input">Add Task</label>
					<input
						type="text"
						id="task-input"
						value={this.state.inputValue}
						onChange={this.handleChange}
					/>
					<button type="submit">Add Task</button>
				</form>
				<ul>
					{this.state.values.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Overview;
