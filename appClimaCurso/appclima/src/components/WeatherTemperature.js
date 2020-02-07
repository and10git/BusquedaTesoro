import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import './index.css'

const stateIconName = weatherState => {
    switch (weatherState) {
        case "cloud":
            return "cloud"
        case "cloudy":
            return "cloudy"
        case "day-cloudy":
            return "day-cloudy"
        case "rain":
            return "rain"
        default:
            return "day-cloudy"
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateIconName(weatherState)} size="2x" />)
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span className='temperatureValor' >{`${temperature} °C`}</span>
    </div>
)

//Validacion de tipos de datos
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}
export default WeatherTemperature