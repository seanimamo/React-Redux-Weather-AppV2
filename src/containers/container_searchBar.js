import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather} from '../actions/action_fetchWeather';

//weather api key: 754d52791bf93f1447b945283be70d60

class SearchBar extends Component {
  
    constructor(props){
      super(props);

      this.state={searchTerm: '', renderCount: 1}

      //this makes the this keyword go to the most parent context within the function
      //alternatively you can just make the function an arrow function
      this.submitSearch = this.submitSearch.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
  }
    
  onInputChange(event){
    this.setState({searchTerm: event.target.value, renderCount: this.state.renderCount + 1});
  }

  submitSearch (event) {
    //this line stops the page from refreshing when the user submits on a form by default
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({searchTerm: this.state.searchTerm});
  }
 
  render() {
    //console.log(`Rendering searchBar component (Render Count: ${this.state.renderCount})...`);
    return (
      <div>
        <h1><center>React-Redux Weather App</center></h1>
        <form onSubmit={this.submitSearch} className="input-group u_SearchBar">
            <input className="form-control"  placeholder="Find the weather at a city" 
            value={this.state.searchTerm}
            onChange={this.onInputChange}/>
            <span className="input-group-btn">
                <button className="btn btn-info">Search</button>
            </span>
        </form>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, matchDispatchToProps)(SearchBar);