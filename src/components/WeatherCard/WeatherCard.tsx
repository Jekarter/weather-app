import { LocalWeatherCity } from 'types/city'
import styles from './WeatherCard.module.scss'

interface WeatherCardProps extends LocalWeatherCity {}

const localDate = new Intl.DateTimeFormat('ru-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
})

const WeatherCard = (props: WeatherCardProps) => {
  const joinedDate = localDate.format(new Date (props.location.localtime)) 

  const getWeekDay = (date: Date): string => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return days[date.getDay()]
  }

  const getWindDirection = (windDir: string): string => {
    const directions: {[key: string]: string} = {
      N: 'Северный',
      NNE: 'Северо-северо-восточный',
      NE: 'Северо-восточный',
      ENE: 'Востоко-северо-восточный',
      E: 'Восточный',
      ESE: 'Востоко-юго-восточный',
      SE: 'Юго-восточный',
      SSE: 'Юго-юго-восточный',
      S: 'Южный',
      SSW: 'Юго-юго-западный',
      SW: 'Юго-западный',
      WSW: 'Западо-юго-западный',
      W: 'Западный',
      WNW: 'Западо-северо-западный',
      NW: 'Северо-западный',
      NNW: 'Северо-северо-западный',
    }
  
    return directions[windDir];
  }
  

  return (
    <div className={styles.cityCard}>
      <div className={styles.cityName}>
        <h2>{props.location.name}, {props.location.country}</h2>
        <p>{getWeekDay(new Date (props.location.localtime)) + ' ' + joinedDate}</p> 
      </div>
      <div className={styles.cityIconBlock}>
        <div className={styles.iconTemp}>
          <img src={props.current.condition.icon} alt={props.location.name} />
          <h2>{props.current.temp}°</h2>
        </div>
        <p><b>{props.current.condition.text}</b></p>
      </div>
      <ul className={styles.cityList}>
        <li>Ощущается как: {props.current.feelslike}°</li>
        <li>Влажность: {props.current.humidity}%</li>
        <li>Сила ветра: {(props.current.wind / 3.6).toFixed(1)} м/с</li>
        <li>Порыв ветра: {(props.current.gust / 3.6).toFixed(1)} м/с</li>
        <li>Направление ветра: {getWindDirection(props.current.windDir)}</li>
      </ul>
      
    </div>
  )
}

export default WeatherCard