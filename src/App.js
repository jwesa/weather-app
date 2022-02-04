import React from 'react';
import CityInput from './components/CityInput';
import { Container } from 'react-bootstrap';

import './App.css';

const App = () => {
	return (
		<Container className="App">
			<CityInput />
		</Container>
	);
}

export default App;
