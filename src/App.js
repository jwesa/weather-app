import React from 'react';
import CityInput from './components/CityInput';
import WeatherList from './components/WeatherList';
import UseFetch from './hooks/UseFetch.js';
import { API_KEY, API_BASE_URL } from './apis/config';

import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
	const { data, error, isLoading, setUrl } = UseFetch();

	const getContent = () => {
		if (error) {
			return <h2>Error: {error}</h2>
		};
		if (!data && isLoading) {
			return <h2>LOADING...</h2>
		};
		if (!data) {
			return null
		};
		return <WeatherList weathers={data.list} />
	};
	console.log(data);

	return (
		<Container className="App mt-4">
			<CityInput handleSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)} />
			{getContent()}
		</Container>
	);
}

export default App;
