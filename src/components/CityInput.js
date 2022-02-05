import React, { useState } from 'react';
import { Row, Col, FormControl, Button, Container } from 'react-bootstrap';

const CitySelector = ({ handleSearch }) => {
	const [city, setCity] = useState('');

	const handleKeyDown = (event) => {
		if (event.code === 'Enter') {
			handleSearch(city);
		}
	}

	return (
		<Container className="justify-content-center">
			<Row>
				<Col>
					<h1>5 days weather forecast</h1>
				</Col>
			</Row>

			<Row>
				<Col xl={5}>
					<FormControl
						placeholder="Enter city"
						onChange={(event) => setCity(event.target.value)}
						onKeyDown={handleKeyDown}
						value={city}
					/>
				</Col>
			</Row>

			<Row>
				<Col>
					<Button onClick={() => handleSearch(city)}>Check Weather</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default CitySelector;