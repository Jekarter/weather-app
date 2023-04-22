export type LocalWeatherCity = {
  location: {
    name: string,
    country: string,
    localtime: string,
  },
  current: {
    lastUpdatedEpoch: number,
    lastUpdated: string,
    temp: number,
    isDay: number,
    condition: {
      text: string,
      icon: string,
      code: number,
    },
    wind: number,
    windDegree: number,
    windDir: string,
    humidity: number,
    cloud: number,
    feelslike: number,
    vis: number,
    uv: number,
    gust: number
  }
}

export type WeatherCity = {
  location: {
    name: string,
    country: string,
    localtime: string,
  },
  current: {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    is_day: number,
    condition: {
      text: string,
      icon: string,
      code: number,
    },
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    vis_km: number,
    uv: number,
    gust_kph: number
  }
}

export type WeatherError = {
  error: {
    code: number,
    message: string
  }
}

/* 
{
    "location": {
        "name": "Краснодар",
        "region": "Krasnodar",
        "country": "Россия",
        "lat": 45.03,
        "lon": 38.98,
        "tz_id": "Europe/Moscow",
        "localtime_epoch": 1682151171,
        "localtime": "2023-04-22 11:12"
    },
    "current": {
        "last_updated_epoch": 1682150400,
        "last_updated": "2023-04-22 11:00",
        "temp_c": 14.0,
        "temp_f": 57.2,
        "is_day": 1,
        "condition": {
            "text": "Moderate or heavy rain with thunder",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/389.png",
            "code": 1276
        },
        "wind_mph": 19.2,
        "wind_kph": 31.0,
        "wind_degree": 220,
        "wind_dir": "SW",
        "pressure_mb": 1010.0,
        "pressure_in": 29.83,
        "precip_mm": 0.7,
        "precip_in": 0.03,
        "humidity": 77,
        "cloud": 50,
        "feelslike_c": 12.0,
        "feelslike_f": 53.5,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 3.0,
        "gust_mph": 21.3,
        "gust_kph": 34.2
    }
*/