import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Languages from "./components/Languages";
import "./app.css";
import ContactForm from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Languages />
        <ContactForm />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
