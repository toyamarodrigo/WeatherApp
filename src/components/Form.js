import React from 'react'

export default (props) => (
  <div className="_form_container">
    <form onSubmit={props.getWeather} type="text" className="_form">
      <div className="_input">
        <input type="text" name="city" placeholder="City..."/>
      </div>
      <div className="_input">
        <input type="text" name="country" placeholder="Country..."/>
      </div>
      <div className="_button">
        <button>Get Weather</button>
      </div>
    </form>
  </div>
)