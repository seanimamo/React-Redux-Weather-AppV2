import axios from 'axios';

const API_KEY = '754d52791bf93f1447b945283be70d60';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request: ',request);
    return {
        type: FETCH_WEATHER,
        payload:request.catch(err => {
            console.log('error occured in api request');
            console.log(err.message);
            return '404';
        })
    };

}