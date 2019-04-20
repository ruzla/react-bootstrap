import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState(this.props.locationSearch(this.state.searchText));
    }
  };

  render() {
    return (
      <div className="searchForm">
        <input onChange={this.handleInputChange} type="text" value={this.state.searchText} placeholder="Enter Location...." onKeyPress={this.handleKeyDown} />
        <button onClick={() => this.props.locationSearch(this.state.searchText)} type="submit">Search</button>
        <span>{this.props.searchError}</span>
      </div>
    );
  }
}

export default SearchForm;
