import './current-weather.css'

function Currentweather({ data }) {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='temperature'>{Math.round(data.main.temp)} °C</p>
          <p>Wind: {data.wind.speed} m/s</p>
          <p>humidity: {data.main.humidity} %</p>
        </div>
        <div>
          <img src={`icons/${data.weather[0].icon}.png`} className='w-icon' alt='weather' />
          <p className='description'>{data.weather[0].description}</p>
        </div>
      </div>
      <div className='bottom'>

      </div>
    </div>
  )
}

export default Currentweather