import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Top from "./components/Top";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Top slides={SliderData} />
    </>
  );
}

export default App;
