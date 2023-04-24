import { LocalWeatherCity } from 'types/city'
import styles from './WeatherCard.module.scss'

interface WeatherCardProps extends LocalWeatherCity {}

const WeatherCard = (props: WeatherCardProps) => {
  return (
    <div className={styles.cityCard}>
      <div className={styles.cityName}>
        <h2>{props.location.name}, {props.location.country}</h2>
        <p>{props.location.localtime}</p> 
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
        <li>Сила ветра (км/ч): {props.current.wind}</li>
        <li>Порыв ветра: (км/ч): {props.current.gust}</li>
        <li>Направление ветра: {props.current.windDir}</li>
      </ul>
      
    </div>
  )
}

export default WeatherCard