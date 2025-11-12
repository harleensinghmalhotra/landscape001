import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'services': return <ServicesPage onNavigate={setCurrentPage} />;
      case 'gallery': return <GalleryPage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact': return <ContactPage onNavigate={setCurrentPage} />;
      case 'careers': return <CareersPage onNavigate={setCurrentPage} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      {/* Temporarily comment Footer if blank screen persists */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}