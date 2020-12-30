import { LOAD_WEATHER_START, LOAD_WEATHER_SUCCESS, LOAD_WEATHER_FAIL } from '../actions/types';
import { CityWeatherDto, Action, ForecastState, WeatherDto, Weather } from '../../@types';

const initialState: ForecastState = {
  pending: false,
  forecasts: [],
  error: null
}

interface ActionImpl extends Action {
  cityWeather: CityWeatherDto,
  error: any
}

const forecast = (state: ForecastState = initialState, action: ActionImpl) => {
  switch (action.type) {
    case LOAD_WEATHER_START:
      return {
        ...state,
        pending: true
      }
    case LOAD_WEATHER_SUCCESS:
      // convert dto to entity
      const forecasts: Weather[] = action.cityWeather.list.map((weather: WeatherDto) => {
        return {
          applicableDate: weather.dt,
          minTemp: weather.temp.min,
          maxTemp: weather.temp.max,
          icon: weather.weather[0].icon
        }
      })
      return {
        ...state,
        pending: false,
        forecasts
      }
    case LOAD_WEATHER_FAIL:
      return {
        ...state,
        pending: false,
        forecasts: [],
        error: action.error
      }
    default:
      return state
  }
}

export default forecast