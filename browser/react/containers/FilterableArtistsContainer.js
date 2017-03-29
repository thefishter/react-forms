import React, { Component } from 'react';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

export default class FilterableArtistsContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }


  render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter((artist) =>
      artist.name.match(inputValue))

    return (
      <div>
        <FilterInput handleChange={ this.handleChange }/>
        <Artists artists={ filteredArtists }/>
      </div>
    )
  }

}


