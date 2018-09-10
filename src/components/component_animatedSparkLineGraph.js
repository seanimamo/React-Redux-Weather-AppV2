import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots} from 'react-sparklines';
import _ from 'lodash';

export default class AnimatedSparkLinesGraph extends Component {

    constructor(props) {
        super(props);
        
        this.animateSparkLinesData = this.animateSparkLinesData.bind(this);
        this.animationHelperFxn = this.animationHelperFxn.bind(this);
        this.state = { data: [], counter: 0};
        this.animateSparkLinesData();
    }
    
    animationHelperFxn(count){
        //console.log("length of data is", this.props.data.length)
        //console.log("counter is", this.state.counter);
        if(count < this.props.data.length){
            let newCounter = count + 1;
            this.setState({
                data: this.state.data.concat(this.props.data[this.state.data.length]),
                counter: newCounter
            })
        }
    }

    animateSparkLinesData(){
        setInterval( () => this.animationHelperFxn(this.state.counter), 60);
    }

    average(dataArray){
        return ( _.sum(dataArray)/dataArray.length); 
    }

    render() {
        return (
            <div>
            <Sparklines data={this.state.data} width={180} height={120}>
                <SparklinesLine color={this.props.sparkLineColor} />
                <SparklinesReferenceLine type='avg' color='blue' />
                <SparklinesSpots color='blue'/>
            </Sparklines>
            <div>average: {this.average(this.props.data)} {this.props.dataUnits}</div>
            </div>
        );
    }
}