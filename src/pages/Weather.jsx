import React, {useEffect, useState} from 'react';
import Preloader from "../components/Preloader";
import WeatherCard from "../components/WeatherCard";
import {weatherAPI} from "../api/api";
import Header from "../components/Header";

const Weather = (props) => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    const [locationData, setLocationData] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    console.log(locationData);


    useEffect(() => {
        setIsLoading(true);

        const getLocationData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            const res = await weatherAPI.getWeather(lat, long);
            console.log("res.data", res);
            setLocationData(res);
        }
        getLocationData();
        setIsLoading(false);

    }, [lat, long]);

    return (<div className="wrapper">
        <div className="container">
            <Header/>
            <div className="weather-content">
                {!locationData ? <Preloader/> : <WeatherCard {...locationData} />}
            </div>
        </div>
    </div>)
};

export default Weather;