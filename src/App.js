import React from "react";
import Home from "./components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import PNF from "./components/Pages/PNF";
import SingleServicePage from "./components/Pages/SingleServicePage";
import ScrollToTop from "./components/Layout/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/services/:ServiceName"
            element={<SingleServicePage />}
          />
          <Route exact path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
