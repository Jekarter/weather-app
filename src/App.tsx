import './App.css';
import { Container } from 'components/Container/Container';

import Search from 'components/Search/Search';
import { useState } from 'react'
import { defaultUser } from 'components/mock/defaultUser';
import { isCity } from 'components/typeguards/typeguards';
import { WeatherCity, WeatherError, LocalWeatherCity } from 'types/city';
import { extractLocalCity } from 'utils/extract-local-city';
import Header from 'components/Header/Header';
import WeatherCard from 'components/WeatherCard/WeatherCard';

const API_KEY = '4f254a5b5c994fceb2174829232204'
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

function App() {
  const [city, setCity] = useState<LocalWeatherCity | null>(defaultUser);
  
  const fetchCity = async (cityname: string) => {
    const url = BASE_URL + cityname + '&aqi=no';

    const response = await fetch(url);
    const city = await response.json() as WeatherCity | WeatherError;

    if (isCity(city)) {
      setCity(extractLocalCity(city))
    } else {
      setCity(null)
    }
    console.log(city)
  }

  return (
    <Container>
      <Header></Header>
      <Search hasError onSubmit={fetchCity} />
      {city && (
        <WeatherCard 
          {...city}
        />
      )}
    
      
    </Container>
  );
}

export default App;
