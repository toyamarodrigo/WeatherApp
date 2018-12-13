import styled from 'styled-components';
import media from './media';

export const Wrapper = styled.section`
    height: 100%;
    width: 80%;
    margin: 40px 0;
    box-shadow: 0px 13px 40px -8px;
    border-radius: 0.3em 0.3em;
`

export const TitleSubtitleContainer = styled.div`
        background: url('https://images.all-free-download.com/images/graphiclarge/sunrise_vector_287235.jpg') center center no-repeat;
        height: 25vh;
        background-size: cover;
        color: #000;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        border-radius: 0.3em 0.3em 0 0;

`

export const TitleStyle = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Pacifico');
    font-family: Pacifico;
    font-size: 60px;
    color: black;
    padding: 10px;
    text-align: center;
    letter-spacing: 2px;
    ${media.beyond`
        font-size: 80px;
        letter-spacing: 4px;
    `}
    ${media.giant`
        font-size: 70px;
    `}
    ${media.desktop`
        font-size: 60px;
    `}
    ${media.tablet`
        font-size: 55px;
        padding: 5px;
    `}
    ${media.phone`
        font-size: 40px;
        padding: 5px;
    `}
`

export const SubtitleStyle = styled.h2`
    color: black;
    padding: 5px;
    margin-bottom: 0 10px;
    text-align: center;
    letter-spacing: 8px;
    ${media.beyond`
        font-size: 40px;
        letter-spacing: 15px;
    `}
    ${media.giant`
        font-size: 35px;
        letter-spacing: 10px;
    `}
    ${media.desktop`
        font-size: 30px;
    `}
    ${media.tablet`
        font-size: 25px;
    `}
    ${media.phone`
        font-size: 20px;
        letter-spacing: 4px;
    `}

`

export const FormStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`

export const WeatherStyle = styled.div`
`