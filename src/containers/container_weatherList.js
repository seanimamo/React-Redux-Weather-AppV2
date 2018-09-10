import React, { Component } from 'react';
import {connect} from 'react-redux';
import SparkLinesGraph from '../components/fxncomponent_sparkLineGraph';
import AnimatedSparkLinesGraph from '../components/component_animatedSparkLineGraph';
import GoogleMap from '../components/fxnComponent_google_maps';

class WeatherList extends Component {

    renderWeatherGraph(cityData){
        const name = cityData.city.name;
        //converiting kevlin to Fahrenheit 
        const temps = cityData.list.map( x => (x.main.temp * (9/5) - 459.67) );
        const humidities = cityData.list.map( x => x.main.humidity);
        const pressures = cityData.list.map( x => x.main.pressure);
        const {lat,lon} = cityData.city.coord;

        return(
            <tr key={name}>
                <td> <GoogleMap lat={lat} lon={lon}/></td>
                <td><AnimatedSparkLinesGraph data={temps} sparkLineColor='red' dataUnits='°F' /></td>
                <td><AnimatedSparkLinesGraph data={humidities} sparkLineColor='yellow' dataUnits='%'/> </td>
                <td><AnimatedSparkLinesGraph data={pressures} sparkLineColor='green' dataUnits='hPa'/></td>
            </tr>
        )
    }

    render(){
        return (    
            <table className="table">
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Temperature (°F)</th>
                        <th>Humidity (%)</th>
                        <th>Pressure (hPa)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map( data => this.renderWeatherGraph(data))}
                </tbody>
            </table>
        )
    };
}

function mapStateToProps(state){
    return{
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);