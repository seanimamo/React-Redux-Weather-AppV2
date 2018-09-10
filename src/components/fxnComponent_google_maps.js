import React, {Component} from 'react';

class GoogleMap extends Component{
   
    //React built-in lifecycle method that is automatically called AFTER a component has been rendered to the screen
    componentDidMount(){
        //note this function normally takes any form of a reference to a html element using some javascript method like jquery
        // eslint-disable-next-line
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
            }
        })
    }

    render(){
        console.log("map data:", this.props.lat, this.props.lon);
        //this.refs.map
        return(
            <div ref="map"> </div>
        )
    }

}

export default GoogleMap;