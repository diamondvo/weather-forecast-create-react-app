import React from 'react';
import './App.scss';
import { Provider } from 'react-redux'
import store from './modules/redux/store';
import { WeatherForecast } from './modules/components';

function App() {
  return (
    <Provider store={store}>
      <WeatherForecast />
    </Provider>
  );
}

export default App;
