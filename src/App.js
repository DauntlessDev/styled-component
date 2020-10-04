import React from 'react';
import './App.css';
import styled from 'styled-components'
import Article from './components/Article/Article/Article';
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";

function App() {

  const Heading = styled.h1`
    color: red;
    text-align: center;
  `;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Heading>Root</Heading>
        <Article />
      </ThemeProvider>
    </>
  );
}

export default App;
