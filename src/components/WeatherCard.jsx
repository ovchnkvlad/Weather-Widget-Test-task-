import React from 'react';
import addFavouriteIcon from '../assets/images/favourite.svg';

const WeatherCard = (props) => {
    console.log(props);
    // const {temp, pressure, humidity, temp_min, temp_max} = props.main;
    return (<div className="weather-card">
        <div className="card-property">
            <span className="add-favourite">
                <img src={addFavouriteIcon} alt=""/>
            </span>
        </div>

        <img src={props.weather[0].icon} className="weather-icon" alt=""/>
        <h2 className="city-name">{props.name}</h2>
        <span className="temperature"> {props.main.props.name} &#8451;</span>
        <div className="weather-condition">
            <span>Wind now: <br/> <b>15</b> km</span>
            <span>Rressure: <br/><b>{props.main.pressure}</b> Pa</span>
            <span>Humidity: <br/> <b>{props.main.humidity}</b> %</span>
        </div>
    </div>)

};


export default WeatherCard