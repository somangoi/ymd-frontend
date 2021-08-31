import React from "react";
import ReactDOM from "react-dom";
import theme from "./styles/theme";

// #ROUTES
import Routes from "./Routes";

// #STYLES
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import variables from "./styles/variables";

import { RecoilRoot } from "recoil";

// #REACT STRAP
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, ...variables }}>
        <Routes />
      </ThemeProvider>
    </RecoilRoot>
  </>,
  document.getElementById("root")
);
