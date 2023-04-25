import { Container } from 'components/Container/Container';
import Search from 'components/Search/Search';
import { useState } from 'react'
import { isCity } from 'typeguards/typeguards';
import { WeatherCity, WeatherError, LocalWeatherCity } from 'types/city';
import WeatherCard from 'components/WeatherCard/WeatherCard';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import { extractLocalCity } from 'utils/extract-local-city';
import { defaultCity } from 'mock/defaultCity';

const API_KEY = '4f254a5b5c994fceb2174829232204'
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;


function App() {
  const [city, setCity] = useState<LocalWeatherCity | null>(localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city') || '') : defaultCity);


  const handleCheckboxChange = (isChecked: boolean) => {

    if (isChecked) {
      localStorage.setItem('city', JSON.stringify(city))
    }
  }

  const fetchCity = async (cityname: string) => {
    const url = BASE_URL + cityname + '&aqi=no&lang=ru';

    const response = await fetch(url)
    const city = await response.json() as WeatherCity | WeatherError;
    
    if (isCity(city)) {
      setCity(extractLocalCity(city))
    } else {
      setCity(null)
    }
  }


  return (
    <Container>
      <Search onSubmit={fetchCity} onChangeCheckbox={handleCheckboxChange} />
      {city 
        ? <WeatherCard {...city} />
        : <ErrorCard />
      }
    </Container>
  );
}

export default App;
