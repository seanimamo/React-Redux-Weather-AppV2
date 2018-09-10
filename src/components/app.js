import React, { Component } from 'react';
import SearchBar from '../containers/container_searchBar';
import WeatherList from '../containers/container_weatherList';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}