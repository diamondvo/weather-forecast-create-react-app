import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import WeatherForecast from '../../modules/components/weather-forecast/weather-forecast.component';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Test weather forecast component', () => {
  test('It should be in loading status', () => {
    const pendingStore = mockStore({
      isLoading: true,
      forecast: {
        pending: true,
        forecasts: []
      }
    });
    render(<Provider store={pendingStore}><WeatherForecast /></Provider>);
    const stateStore: any = pendingStore.getState();
    expect(stateStore.isLoading).toEqual(true);
    expect(stateStore.forecast.forecasts).toHaveLength(0);
  });

  test('It should be in return data render', () => {
    const fullDataStore = mockStore({
      isLoading: false,
      forecast: {
        pending: false,
        forecasts: [
          {
            id: 'london',
            applicableDate: '2020-12-27',
            minTemp: 0,
            maxTemp: 4
          }
        ]
      }
    });
    render(<Provider store={fullDataStore}><WeatherForecast /></Provider>);
    const stateStore: any = fullDataStore.getState();
    expect(stateStore.isLoading).toEqual(false);
    expect(stateStore.forecast.forecasts).toHaveLength(1);
  });
})