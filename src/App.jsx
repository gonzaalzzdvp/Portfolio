import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import ScrollToHash from "./components/Navigation/ScrollToHash";
import Footer from "./components/Footer/Footer";

import HomePage from "./Page/HomePage";
import ServicesPage from "./Page/ServicesPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
