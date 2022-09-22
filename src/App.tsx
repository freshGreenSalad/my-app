import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import About from "./components/AboutPage/about";
import ContactPage from "./components/contactpage/contactpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>

    // <Layout />
  );
}

export default App;
