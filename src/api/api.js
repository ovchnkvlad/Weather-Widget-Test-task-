import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://fcc-weather-api.glitch.me/api/'
});

export const weatherAPI = {
    getWeather(lat = 53, long = 31) {
        return instance.get(`current?lat=${lat}&lon=${long}`).then(response => {
            return response.data;
        })
    }
}
