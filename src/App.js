import Search from './components/Search/Search';
import Currentweather from './components/current-weather/current-weather';
import './App.css';
import { weatherapi, apiKey } from './components/api';
import { useState } from 'react';
import Forecust from './components/forecust/forecust';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecase, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${weatherapi}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    const forecastFatch = fetch(`${weatherapi}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFatch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse})
        setForecast({ city: searchData.label, ...forecastResponse})
      })
      .catch((err) => console.log(err))
  }

  console.log(currentWeather)
  console.log(forecase)

  return (

    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      { currentWeather && < Currentweather data={currentWeather}/>}
      {forecase && < Forecust data={forecase} /> }
    </div>
  );
}

export default App;
