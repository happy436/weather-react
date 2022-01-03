const CHOOSE_CITY = "CHOOSE_CITY"

const api = {
    base:'api.openweathermap.org/data/2.5/',
    key:'d9ed11da54150ff6decb86f23912dded'
}

let initialState = {
    city:"",
    weather:{}
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
    return function(dispatch){
        debugger
        console.log("11")
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                dispatch({
                    type:CHOOSE_CITY,
                    city:city,
                    weather:result
                });
            })
    }
}

export default weatherReducer