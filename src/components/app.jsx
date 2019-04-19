import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';
import axios from 'axios';
import SearchForm from './search-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.locationSearch = this.locationSearch.bind(this);
  }

  componentDidMount() {
    this.locationSearch('manchester');
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  locationSearch(city) {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
        });
      })
      .catch(error => {
        if (error.response) {
          console.log('Location not found');
        }
      });
  }

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm locationSearch={this.locationSearch} />
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
        {
            selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
