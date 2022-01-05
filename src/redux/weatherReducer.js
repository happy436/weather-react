const CHOOSE_CITY = "CHOOSE_CITY"

const api = {
    base:'http://api.weatherapi.com/',
    key:'251b1a2f64484c4c978160831220501'
}

let initialState = {
    location:{
        name:"",
    },
    current:{
        temp_c:0,
        condition:{
            text:""
        },
        wind_mph:0,
        wind_dir:"",
        pressure_mb:0,
        humidity:0,
        feelslike_c:0,
    }
}

const weatherReducer = (state = initialState, action) => {
    
    switch(action.type){
        case CHOOSE_CITY:
            state = action.weather
            return state
        default:
            return state
    }
    
}

export const cityWeatherActionCreator = (city, weather) => {
    return{
        type: CHOOSE_CITY,
        city:city,
        weather:weather,
    }
}

export function fetching(city){
    return (dispatch) => {
            fetch(`${api.base}v1/current.json?key=${api.key}&q=${city}&aqi=no`)
            .then(res => res.json())
            .then((result) => {
                dispatch({
                    type:CHOOSE_CITY,
                    city:city,
                    weather:result
                });
            })
    }
}

export default weatherReducer