import axios from 'axios'

const API = {
    base:'api.openweathermap.org/data/2.5/',
    key:'d9ed11da54150ff6decb86f23912dded'
}

export class WeatherService {
    static getCurrentWeather(city){
        return axios.get(`http://${API.base}weather?q=${city}&units=metric&APPID=${API.key}`);
    }
}