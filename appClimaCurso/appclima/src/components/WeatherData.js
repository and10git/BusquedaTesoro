import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature';
import './index.css'

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data
    return (
        <div>
            <h1>
                <p className='climaDesc'>Nublado</p>
                <WeatherTemperature temperature={temperature} weatherState={weatherState} />
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </h1>
        </div>)
}

export default WeatherData