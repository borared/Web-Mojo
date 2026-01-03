import React, { useEffect } from "react"; 
import Navbar from "./section/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import Purpose from "./section/Purpose.jsx";
import Work from "./section/Work.jsx";
import Differ from "./section/Differ.jsx";
import Footer from "./section/Footer.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import HeadService from "./section/HeadService.jsx";

const ScrollReset = () => {
 const { pathname } = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]); 
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
    {/* Place the component here */}
    <ScrollReset />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full">
              <Hero />
              <div className="sticky top-0 z-0">
                <Purpose />
              </div>
              <Work />
              <Differ />
              <Footer />
            </div>
          }
        />

        <Route
          path="/fullservice"
          element={
            <>
              <HeadService />
              <section className="min-h-screen" />
              <section className="min-h-screen" />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;