import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import OurProducts from './pages/OurProducts';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import OurPrdFruits from './pages/OurPrdFruits';
import OurPrdGrains from './pages/OurPrdGrains';
import OurPrdSpices from './pages/OurPrdSpices';
import Contact from './pages/Contact';
import BackHome from './pages/BackHome';
import { useEffect } from 'react';
import Aos from 'aos';
import Blog from './pages/Blog';
import ProductionBlogs from './pages/ProductionBlogs';
import Gallery from './pages/Gallery';
import PrdInfo from "./pages/PrdInfo";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1200,
      easing: 'ease',
    });
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <BackHome />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/our-prd-fruits" element={<OurPrdFruits />} />
        <Route path="/our-prd-grains" element={<OurPrdGrains />} />
        <Route path="/our-prd-spices" element={<OurPrdSpices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<ProductionBlogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/productinfo/:id" element={<PrdInfo />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
