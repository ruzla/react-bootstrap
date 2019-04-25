import React from 'react';
import Moment from 'moment';
import WeatherIcon from 'react-icons-weather';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecast-details__date">
      <span>{Moment(props.forecast.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-details__icon">
      <span><WeatherIcon name="owm" flip="horizontal" rotate="90" iconId={props.forecast.icon} /></span>
    </div>
    <div className="forecast-details__max">
      <span>Max: {props.forecast.temperature.max}°c</span>
    </div>
    <div className="forecast-details__min">
      <span>Min: {props.forecast.temperature.min}°c</span>
    </div>
    <div className="forcast-details__humidity">
      <span>Humidity: {props.forecast.humidity}%</span>
    </div>
    <div className="forcast-details__speed">
      <span>Wind Speed: {props.forecast.wind.speed} mph</span>
    </div>
    <div className="forcast-details__direction">
      <span>Wind Direction: {props.forecast.wind.direction.toUpperCase()}</span>
    </div>
  </div>
);

export default ForecastDetails;
