import React from 'react';
import { connect } from 'react-redux';
import { Weather } from '../../@types';
import SearchCity from '../search-city/search-city.component';
import { dayOfWeek } from '../../shared/constants';
import { Ext } from '../../shared/ext';

type Props = {
  forecasts: any[],
  isLoading: boolean,
  error: any
}

function WeatherForecast(props: Props) {
  return <div className="container forecast-container">
    <h1 className="text-center pt-5 pb-5">Welcome to weather forecast</h1>
    <SearchCity />
    {props.isLoading ? <div className="text-center">
      <div className="spinner-border text-success" role="status">
      </div>
    </div> : <div className="pb-4">
        <div className="pt-2 forecast-card" >
          {props.forecasts.map((weather: Weather, idx: number) => <div key={idx} className="card m-1">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>{dayOfWeek[new Date(weather.applicableDate * 1000).getDay()]}</span>
              <div className="text-end text-muted date">{Ext.Date.format(weather.applicableDate * 1000)}</div>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="temp w-75">
                  <div>
                    Min: {Math.floor(weather.minTemp)}<span className="degree" />C
                  </div>
                  <div className="degree">
                    Max: {Math.floor(weather.maxTemp)}<span className="degree" />C
                  </div>
                </div>
                <div className="temp-icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    }
    {!props.isLoading && props.error && <div className="text-center">Can not find any weather. Please change other city</div>}
  </div>
}


const mapState = (state: any) => ({
  isLoading: state.forecast.pending,
  forecasts: state.forecast.forecasts,
  error: state.forecast.error
})

const connector = connect(mapState)
export default connector(WeatherForecast)