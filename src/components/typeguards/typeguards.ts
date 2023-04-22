import { WeatherCity } from "types/city";

export const isCity = (city: any) : city is WeatherCity => 'name' in city;