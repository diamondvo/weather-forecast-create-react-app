type TempDto = {
  max: number
  min: number
}

type TypeDto = {
  icon: string
}

export type WeatherDto = {
  dt: number,
  temp: TempDto,
  weather: TypeDto[]
}

export type CityWeatherDto = {
  city: number,
  list: WeatherDto[]
}