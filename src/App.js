import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfilio from "./components/Portfilio";
import Services from "./components/Services";
import Languages from "./components/Languages";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Hero />
        <Portfilio />
        <Services />
        <Languages />
      </ChakraProvider>
    </div>
  );
}

export default App;
