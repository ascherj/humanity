const { createGlobalStyle } = require('styled-components');

const GlobalStyles = createGlobalStyle`
  :root {
    --raisin-black: #171A21;
    --cadet: #617073;
    --shadow-blue: #7A93AC;
    --baby-blue-eyes: #92BCEA;
    --maximum-blue-purple: #AFB3F7;
  }

  html {
    font-family: Roboto !important;
  }
`;

export default GlobalStyles;
