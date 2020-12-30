import {
  LOAD_WEATHER_START,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAIL
} from './types'
import { Dispatch } from 'redux';
import { WeatherDto } from '../../../modules/@types';
import { BASE_URL, FORECAST_DAYS, APPID } from '../../shared/constants';

const loadWeatherStart = () => ({ type: LOAD_WEATHER_START });
const loadWeatherSuccess = (data: any) => ({ type: LOAD_WEATHER_SUCCESS, cityWeather: data });
const loadWeatherFail = (error: any) => ({ type: LOAD_WEATHER_FAIL, error: error });

export const findForecast = (text: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadWeatherStart());
    return fetch(`${BASE_URL}/forecast/daily?q=${text}&cnt=${FORECAST_DAYS}&appid=${APPID}&units=metric`)
      .then(response => response.json())
      .then((response: WeatherDto) => {
        return dispatch(loadWeatherSuccess(response));
      })
      .catch(error => {
        return dispatch(loadWeatherFail(true));
      });
  }
};