import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/shared/navbar";
import Footer from "./assets/shared/footer";
import HomePage from "./pages/home_page";
import AboutPage from "./pages/about_page";
import ServicePage from "./pages/services_page";
import NetworkingPage from "./pages/networking_page";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/networking" element={<NetworkingPage />} />
            <Route path="/news-and-events" element={<NewsPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
