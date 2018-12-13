import { css } from 'styled-components';
const sizes = {
  phone: 420,
  tablet: 768,
  desktop: 992,
  giant: 1170,
  beyond: 1171
};

// const media = Object.keys(sizes).reduce((finalMedia, size) => {
//   return{
//     ...finalMedia,
//     [size]: function(...args) {  
//       return css`
//         @media(max-width: ${sizes[size]}px) {
//           ${css(...args)}
//         }
//       `
//     }
//   }
// }, {})

function phone(...args) {
  return css`
    @media(max-width: ${sizes.phone}px) {
      ${css(...args)}
    }
  `
}

function tablet(...args) {
  return css`
    @media(max-width: ${sizes.tablet}px) {
      ${css(...args)}
    }
  `
}

function desktop(...args) {
  return css`
    @media(max-width: ${sizes.desktop}px) {
      ${css(...args)}
    }
  `
}

function giant(...args) {
  return css`
    @media(max-width: ${sizes.giant}px) {
      ${css(...args)}
    }
  `
}

function beyond(...args) {
  return css`
    @media(min-width: ${sizes.beyond}px) {
      ${css(...args)}
    }
  `
}


const media = {
  phone,
  tablet,
  desktop,
  giant,
  beyond
}

export default media;