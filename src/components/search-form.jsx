import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }


  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} type="text" value={this.state.searchText} />
        <button onClick={() => this.props.locationSearch(this.state.searchText)} type="submit">Search</button>
        <span>{this.props.searchError}</span>
      </div>
    );
  }
}

export default SearchForm;
