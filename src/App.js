import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfilio from "./components/Portfilio";
import Services from "./components/Services";
import Languages from "./components/Languages";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Hero />
        <Portfilio />
        <Services />
        <Languages />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
