import { LocalWeatherCity, WeatherCity } from "types/city"


export const extractLocalCity = (city : WeatherCity): LocalWeatherCity => ({
  location: {
    name: city.location.name,
    country: city.location.country,
    localtime: city.location.localtime,
  },
  current: {
    lastUpdatedEpoch: city.current.last_updated_epoch,
    lastUpdated: city.current.last_updated,
    temp: city.current.temp_c,
    isDay: city.current.is_day,
    condition: {
      text: city.current.condition.text,
      icon: city.current.condition.icon,
      code: city.current.condition.code,
    },
    wind: city.current.wind_kph,
    windDegree: city.current.wind_degree,
    windDir: city.current.wind_dir,
    humidity: city.current.humidity,
    cloud: city.current.cloud,
    feelslike: city.current.feelslike_c,
    vis: city.current.vis_km,
    uv: city.current.uv,
    gust: city.current.gust_kph
  }
})