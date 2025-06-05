import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Offer from "./pages/Offer";
import OwnDesert from "./pages/OwnDesert";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="offer" element={<Offer />} />
              <Route path="ownDesert" element={<OwnDesert />} />
              <Route path="aboutUs" element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;