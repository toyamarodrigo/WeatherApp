import { createGlobalStyle } from 'styled-components';
import media from './media';

/* eslint-disable */
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    * { padding: 0; margin: 0; box-sizing: border-box; }

    html, body, {
        margin: 0;
        padding: 0;
    }

    html {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to bottom, #e77837, #e7c203);
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }

    #root {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;
    }

    ._form_weather_container {
        background: #FFC04C;
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 0 0 0.3em 0.3em;
    }

    ._form_container {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100%;
        width: 90%;
    }

    ._form { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 100%;
        ${media.giant`
    
        `}
        ${media.desktop`
        
        `}
        ${media.tablet`
            padding: 5px;
        `}
        ${media.phone`
            padding: 2px;
        `}
    }

    ._input {
        padding: 10px;
        width: 100%;
        ${media.giant`
            padding: 15px;
        `}
        ${media.desktop`
        
        `}
        ${media.tablet`
            padding: 8px;
        `}
        ${media.phone`
            padding: 5px;
        `}
    }

    input {
        font-size: 1.3em;
        letter-spacing: 2px;
        width: 100%;
        border-radius: 0.5em;
        padding-left: 12px;
        padding-top: 10px;
        padding-bottom: 2px;
        ${media.beyond`
            font-size: 2.8em;
        `}
        ${media.giant`
            font-size: 2.5em;
            padding-left: 20px;
        `}
        ${media.desktop`
            font-size: 2em;
        `}
        ${media.tablet`
            font-size: 1.8em;
        `}
        ${media.phone`
            font-size: 1em;
        `}
    }

    .placeholder{
        position: absolute;
        left: 60px;
    }

    ._button {
        padding: 8px;
        width: 70%;
        ${media.giant`
    
        `}
        ${media.desktop`

        `}
        ${media.tablet`
            padding: 5px;
            width: 100%;
        `}
        ${media.phone`
            width: 100%;
        `}
        }

    button {
        font-size: 1.4em;
        border-radius: 2em;
        width: 100%;
        height: 40px;
        ${media.beyond`
            font-size: 2.6em;
            height: 75px;
        `}
        
        ${media.giant`
            font-size: 2.3em;
            height: 70px;
        `}
        ${media.desktop`
            font-size: 2em;
            height: 60px;
        `}
        ${media.tablet`
            font-size: 1.6em;
            height: 50px;
        `}
        ${media.phone`
            font-size: 0.9em;
            height: 30px;
            font-weight: bold;
        `}
    }

    ._weathers_containers {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 25px;
        ${media.giant`
            padding: 30px;
        `}
        ${media.desktop`
            padding: 25px;
        `}
        ${media.tablet`
            padding: 20px;
        `}
        ${media.phone`
            padding: 15px;
        `}
    }

    ._weather_container1 {
    }

    ._weather_container2 {
    }

    ._weather_key_value{
        padding: 8px;
        ${media.giant`
            padding: 10px;
        `}
        ${media.desktop`
            padding: 8px;
        `}
        ${media.tablet`

        `}
        ${media.phone`
            padding: 5px;
        `}
    }

    ._weather_key {
        font-size: 1.1em;
        font-weight: bold;
        letter-spacing: 1px;
        ${media.beyond`
            font-size: 2.4em;
        `}
        ${media.giant`
            font-size: 2.2em;
        `}
        ${media.desktop`
            font-size: 1.8em;
        `}
        ${media.tablet`
            font-size: 1.5em;
        `}
        ${media.phone`
            font-size: 1em;
        `}
    }

    ._weather_value {
        font-size: 0.8em;
        font-weight: bold;
        color: crimson;
        ${media.giant`
            font-size: 1em;
        `}
        ${media.desktop`
        
        `}
        ${media.tablet`
            font-size: 1em;
        `}
        ${media.phone`
            font-size: 0.8em;
        `}
    }

    ._weather_key_error {
        font-size: 2em;
        padding-bottom: 20px;
    }

`