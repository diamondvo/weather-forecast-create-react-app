import reducer from '../../modules/redux/reducers/forecast';
import {
  LOAD_WEATHER_START,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_FAIL
} from '../../modules/redux/actions/types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        pending: false,
        forecasts: [],
        error: null
      }
    )
  })

  it('should load weather start process', () => {
    expect(
      reducer([], {
        type: LOAD_WEATHER_START
      })
    ).toEqual({
      pending: true,
    })
  })

  it('should load weather success', () => {
    const forecastPayloadMock = {
      city: {},
      list: [
        {
          dt: 1609329600,
          temp: {
            max: 4.5,
            min: 1.52
          },
          weather: [
            {
              icon: "04d"
            }
          ]
        },
      ]
    }
    const forecastResultMock = [
      {
        applicableDate: 1609329600,
        minTemp: 1.52,
        maxTemp: 4.5,
        icon: "04d"
      }
    ]

    expect(
      reducer([], {
        type: LOAD_WEATHER_SUCCESS,
        cityWeather: forecastPayloadMock
      })
    ).toEqual({
      pending: false,
      forecasts: forecastResultMock
    })
  })


  it('should load weather failed', () => {
    expect(
      reducer([], {
        type: LOAD_WEATHER_FAIL,
        forecasts: [],
        error: 'City not found'
      })
    ).toEqual({
      pending: false,
      forecasts: [],
      error: 'City not found'
    })
  })
})