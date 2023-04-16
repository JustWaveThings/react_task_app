import React, { Component } from 'react';
import './App.css';
import InputBar from './components/Input';
import TaskTable from './components/TaskTable';

class App extends Component {
	render() {
		return (
			<div>
				App Component
				<InputBar />
				<TaskTable />
			</div>
		);
	}
}

export default App;
