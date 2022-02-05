import React from 'react';
import { Card } from 'react-bootstrap';


const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
	const date = new Date(dt);

	return (
		<Card style={{ width: '14rem', marginBottom: '15px' }}>
			<Card.Img
				style={{borderBottom: "1px solid rgb(212, 212, 212)", height: '200px', weight: '200px'}}
				variant="top"
				src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
			/>
			<Card.Body>
				<Card.Title>{main}</Card.Title>
				<p style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}>
					<span style={{ fontSize: '1rem', fontWeight: '500' }}>
						{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
					</span>
					<br />
					{date.toLocaleDateString()}
				</p>
				<div>Min: {temp_min}</div>
				<div>Max: {temp_max}</div>
			</Card.Body>
		</Card>
	);
};
export default WeatherCard;