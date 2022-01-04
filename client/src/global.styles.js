import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans Condensed";
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
			padding: 10px;
		}
}

h1 {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: #000;
}

`;
