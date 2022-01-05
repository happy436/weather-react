const CHOOSE_CITY = "CHOOSE_CITY"

const api = {
    base:'http://api.openweathermap.org/data/2.5/',
    key:'cbd439e4a46a63c78a1555506deab89b'
}

let initialState = {
    city:"",
    weather:{
        main:{
            temp:0,
        },
        wind:{
            speed:0,
            deg:0,
        },
        weather:[
            {main:""},
        ]
    }
}

const weatherReducer = (state = initialState, action) => {
    
    switch(action.type){
        case CHOOSE_CITY:
            state.city = action.city
            state.weather = action.weather
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
            fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
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