import React from 'react';
import axios from 'axios';

const getForecast = city => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      })
  };
  

export default getForecast;
