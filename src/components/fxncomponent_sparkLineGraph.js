import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';
export default function SparkLinesGraph(props){

    function average(dataArray){
        return ( _.sum(dataArray)/dataArray.length); 
    }

    return(
        <div>
            <Sparklines data={props.data}  width={180} height={120}>
                <SparklinesLine  color={props.sparkLineColor}/>
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>avg: {average(props.data)}</div>
        </div>
    );
}
