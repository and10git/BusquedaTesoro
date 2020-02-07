import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'

const apiCountryId = "3865483" //Argentina
const apiKey = "bb36439a60efcae71d674a17ff52e1ba"
const apiWeather = `http://api.openweathermap.org/data/2.5/forecast?id=${apiCountryId}&APPID=${apiKey}`

const data1 = {
    temperature: 20,
    weatherState: 'cloud',
    humidity: 60,
    wind: '20'
}

class WeatherLocation extends Component {
    state = {
        data: data1,
        city: 'Buenos Aires'
    }

    getData = weather_data => {
        const { humidity, temperature } = weather_data.main;
        const { wind } = weather_data.wind;

        const data = {
            humidity,
            temperature,
            wind
        }
        return data
    }


    UpdateClick = () => {
        fetch(apiWeather).then(data => {
            return data.json
        }).then((weather_data) => {
      
            const data = this.getData(weather_data)
            this.setState({ data })          
        })
        console.log('Actualizado!')
    }

    render = () => {
        const { city, data } = this.state
        return (
            <div>
                <Location city={city} />
                <WeatherData data={data} />
                <button className='button' onClick={this.UpdateClick}>ACTUALIZAR</button>
            </div>)
    }
}

export default WeatherLocation