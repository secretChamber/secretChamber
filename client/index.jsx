import React from 'react';
import ReactDOM from 'react-dom';
import Zak from './a.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Hello world!
				<Zak />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('id of div here'));

//test