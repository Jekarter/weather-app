import { WeatherCity } from "types/city";

export const isCity = (city: any): city is WeatherCity => 'location' in city;