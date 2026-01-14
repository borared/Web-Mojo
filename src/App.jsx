import React, { useEffect } from "react"; 
import Hero from "./section/Home/Hero.jsx";
import Purpose from "./section/Home/Purpose.jsx";
import Work from "./section/Home/Work.jsx";
import Differ from "./section/Home/Differ.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import HeadService from "./section/Service/HeadService.jsx";
import Typeservice from "./section/Service/Typeservice.jsx";

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
              <Typeservice />
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