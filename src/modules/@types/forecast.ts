export type Forecast = {
  id: string,
  date: string,
  minTemp: number,
  maxTemp: number
}

export type Action = {
  type: string,
  params: any
}

export type ForecastState = {
  pending: boolean,
  forecasts: Forecast[],
  error: any
}

export type Weather = {
  applicableDate: number,
  minTemp: number,
  maxTemp: number,
  icon: string
}

export type CityWeather = {
  city: number,
  list: Weather[]
}

