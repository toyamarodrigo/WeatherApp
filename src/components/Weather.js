import React from 'react'

export default (props) => (
  <div className="_weathers_containers">
    <div className="_weather_container1">
      <div className="_weather_key_value">
        {
          props.city && props.country &&<p className="_weather_key">Location: 
            <span className="_weather_value"> {props.city}. {props.country}</span>
          </p>
        }
      </div>
      <div className="_weather_key_value">
        {
          props.temperature && <p className="_weather_key">Temperature: 
            <span className="_weather_value"> {props.temperature} C</span>
          </p>
        }  
      </div>
      <div className="_weather_key_value">
        {
          props.temp_max && <p className="_weather_key">Temp. Max: 
          <span className="_weather_value"> {props.temp_max} </span>
          </p>
        }
      </div>
      <div className="_weather_key_value">
        {
          props.temp_min && <p className="_weather_key">Temp. Min: 
            <span className="_weather_value"> {props.temp_min} </span>
          </p>
        }
      </div>
    </div>
    <div className="_weather_container2">
      <div className="_weather_key_value">
        {
          props.humidity && <p className="_weather_key">Humidity: 
            <span className="_weather_value"> {props.humidity} </span>
          </p>
        }
      </div>
      <div className="_weather_key_value">
        { 
          props.wind && <p className="_weather_key">Wind: 
            <span className="_weather_value"> {props.wind} m/s</span>
          </p>
        }
      </div>
      <div className="_weather_key_value">
        {
          props.description && <p className="_weather_key">Conditions: 
            <span className="_weather_value"> {props.description} </span>
          </p>
        }
      </div>
      <div className="_weather_key_value">
        {
          props.error && <p className="_weather_key_error"> 
            <span className="_weather_value"> {props.error} </span>
          </p>
        }
      </div>
    </div>
  </div>
)