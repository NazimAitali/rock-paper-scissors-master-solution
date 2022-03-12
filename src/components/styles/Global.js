import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
* {
    box-sizing: border-box;
        margin:0;  
  }
  body{
 background: radial-gradient(at top, ${({ theme }) =>
   theme.colors.body.color.bgNeutral},${({ theme }) =>
  theme.colors.body.color.bgPrimary});
    margin:0;
    padding:0; 
    height:100vh;
    overflow: hidden;
      font-family:'Barlow', sans-serif;
    font-weight:600;
  } 
`;

export default GlobalStyles;
