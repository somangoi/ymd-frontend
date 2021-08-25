import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	body *{
		font-family: 'Roboto', 'Noto Sans KR', sans-serif;
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	button {
		border: none;
    background-color: transparent;
	}

	button:focus {
		outline: none;
		cursor: pointer;
	}

`;
export default GlobalStyle;
