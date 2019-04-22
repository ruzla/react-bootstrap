import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import axios from 'axios';
import SearchForm from './search-form';
import '../styles/app.scss';
import '../styles/forecast-summary.scss';
import '../styles/forecast-summaries.scss';
import '../styles/search-form.scss';
import '../styles/forecast-details.scss';

const URL = 'https://mcr-codes-weather.herokuapp.com/forecast?city=';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchError: '',
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.setState(this.locationSearch(this.state.searchText));
    }
  };

  componentDidMount() {
    this.locationSearch('manchester');
  }

  handleForecastSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  locationSearch = (city) => {
    axios.get(`${URL}${city}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          searchError: '',
        });
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            searchError: 'Location Not Found!',
          });
        }
      });
  };

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
          isHidden={this.state.isHidden}
        />
        <SearchForm
          locationSearch={this.locationSearch}
          searchError={this.state.searchError}
          handleInputChange={this.handleInputChange}
          handleKeyDown={this.handleKeyDown}
          searchText={this.state.searchText}
        />
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
        {
            selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
