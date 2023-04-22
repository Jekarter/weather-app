import { LocalWeatherCity } from 'types/city'
import styles from './WeatherCard.module.scss'

interface WeatherCardProps extends LocalWeatherCity {}

const WeatherCard = (props: WeatherCardProps) => {
  return (
    <div className={styles.div}>
      {props.location.country}
      {props.location.name}
    </div>
  )
}

export default WeatherCard