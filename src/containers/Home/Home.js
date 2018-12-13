import React from 'react';
import { GlobalStyle } from '../../theme/globalStyle';
import { FormStyle,  Wrapper, TitleSubtitleContainer } from '../../theme/grid';
import Form from '../../components/Form';
import Weather from '../../components/Weather';
import Titles from '../../components/Titles';


require('dotenv').config();
const apikey = process.env.REACT_APP_WEATHER_API_KEY


export default class Home extends React.Component {  

  state = {
    temperature: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value
    const country = e.target.elements.city.value
    
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`);

    const data = await api_call.json()

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.deg,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        temp_max: undefined,
        temp_min: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: "Please enter a value"
      })
    }
  }
  render() {
    return (
        <Wrapper>
          <GlobalStyle/>
            <TitleSubtitleContainer>
              <Titles/>
            </TitleSubtitleContainer>
            <div className="_form_weather_container">
              <FormStyle>
                <Form getWeather = {this.getWeather}/>
              </FormStyle>
                <Weather
                  city = {this.state.city}
                  country = {this.state.country}
                  temperature = {this.state.temperature}
                  temp_max = {this.state.temp_max}
                  temp_min = {this.state.temp_min}
                  humidity = {this.state.humidity}
                  wind = {this.state.wind}
                  description = {this.state.description}
                  error = {this.state.error}
                  />
            </div>
        </Wrapper>
    )
  }
}
