import { createGlobalStyle } from 'styled-components';

import { theme as defualtTheme } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root{
    --clr-black: ${defualtTheme.colors.black};
    --clr-brown: ${defualtTheme.colors.brown};
    --clr-white: ${defualtTheme.colors.white};

    --bg-clr-black: ${defualtTheme.backgroundColors.black};
    --bg-clr-brown: ${defualtTheme.backgroundColors.brown};
    --bg-clr-white: ${defualtTheme.backgroundColors.white};

  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  ul,
    li{
        list-style: none;
      }

  a{
    text-decoration: none;
  }

  html,
    body,
      #root,
      .__window{
            height:100%
          }

  body{
    background: ${defualtTheme.default.bodyColors};
    color: ${defualtTheme.default.bodyTextColor};
    font-family: ${defualtTheme.default.fontFamily};
  }

  button{
    font-family: ${defualtTheme.default.fontFamily};
    cursor: pointer;
  }

  input{
    outline: none;
  }


  fieldset{
    border: none;
  }
  
`;
