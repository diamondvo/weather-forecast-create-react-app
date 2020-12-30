import {
  LOAD_WEATHER_START,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAIL
} from '../../modules/redux/actions/types';
import { findForecast } from '../../modules/redux/actions';
import { BASE_URL, FORECAST_DAYS, APPID } from '../../modules/shared/constants';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('Fetch data success', () => {
    const city = 'London';
    fetchMock.mock(`${BASE_URL}/forecast/daily?q=${city}&cnt=${FORECAST_DAYS}&appid=${APPID}&units=metric`, {
      status: 200,
      body: {
        city: {},
        weather: []
      }
    })
    const expectedActions = [
      { type: LOAD_WEATHER_START },
      {
        type: LOAD_WEATHER_SUCCESS, cityWeather: {
          city: {},
          weather: []
        }
      }
    ]

    const store = mockStore({ forecast: {} })
    // @ts-ignore
    return store.dispatch(findForecast(city)).then((response: any) => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

  test('Fetch data failed', () => {
    const city = 'Ho chi minh';
    fetchMock.get(`${BASE_URL}/forecast/daily?q=${city}&cnt=${FORECAST_DAYS}&appid=${APPID}&units=metric`, {
      status: 400,
    })
    const expectedActions = [
      { type: LOAD_WEATHER_START },
      { type: LOAD_WEATHER_FAIL, error: true }
    ]

    const store = mockStore({ forecast: {} })
    // @ts-ignore
    return store.dispatch(findForecast(city)).then((response: any) => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})