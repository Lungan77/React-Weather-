import './forecust.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel, AccordionItemHeading } from 'react-accessible-accordion'
const days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Suturday", "Sunday"]

function Forecust({data}) {
  
  const week_day = new Date().getDay()
  const forecaseDays = days.slice(week_day, days.length).concat(days.slice(0, week_day))
  return (
    <>
    <label className='title'>Week Forecast</label>
    <Accordion allowZeroExpanded>
      {data.list.splice(0, 7).map((item, idx) => (
        <AccordionItem key={idx}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className='cover'>
                <img src={`icons/${item.weather[0].icon}.png`} alt="Icon" />
                <p className='day'>{forecaseDays[idx]}</p>
                <p>{item.weather[0].description}</p>
                <p className='min-max'>{Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_max)} °C</p>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='grid'>
              <div className='grid-item'>
                <label>Pressure: </label>
                <label>{item.main.pressure} hPa</label>
              </div>
              <div className='grid-item'>
                <label>Humidity: </label>
                <label>{item.main.humidity} %</label>
              </div>
              <div className='grid-item'>
                <label>Clouds: </label>
                <label>{item.clouds.all} %</label>
              </div>
              <div className='grid-item'>
                <label>Wind: </label>
                <label>{item.wind.speed} m/s</label>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
    </>
  )
}

export default Forecust