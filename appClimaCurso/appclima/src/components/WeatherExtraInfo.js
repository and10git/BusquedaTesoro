import React from 'react'

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span className='humidity'>{`Humedad ${humidity}% -`}</span>
        <span className='wind'>{`Viento ${wind} km/h`}</span>
    </div>)

export default WeatherExtraInfo
