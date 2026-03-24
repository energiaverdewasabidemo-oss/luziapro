import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import LegalNotice from './components/LegalNotice';
import AboutUsPage from './components/AboutUsPage';
import TrustPage from './components/TrustPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import ComparatorSection from './components/ComparatorSection';
import TrustSection from './components/TrustSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';
import ChatBot from './components/ChatBot';
import CookiePopup from './components/CookiePopup';

const PATH_TO_PAGE: Record<string, string> = {
  '/privacidad': 'privacy',
  '/aviso-legal': 'legal',
  '/terminos': 'terms',
  '/cookies': 'cookies',
  '/sobre-nosotros': 'about',
  '/confianza': 'trust',
  '/contacto': 'contact',
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(() => PATH_TO_PAGE[location.pathname] ?? 'home');

  useEffect(() => {
    const page = PATH_TO_PAGE[location.pathname] ?? 'home';
    setCurrentPage(page);
  }, [location.pathname]);

  const handleChatOpen = useCallback((message = '') => {
    setInitialMessage(message);
    setIsChatOpen(true);
  }, []);

  const handleChatClose = () => {
    setIsChatOpen(false);
    setInitialMessage('');
  };

  const handlePageChange = (page: string) => {
    const PAGE_TO_PATH: Record<string, string> = {
      privacy: '/privacidad',
      legal: '/aviso-legal',
      terms: '/terminos',
      cookies: '/cookies',
      about: '/sobre-nosotros',
      trust: '/confianza',
      contact: '/contacto',
      home: '/',
    };
    const path = PAGE_TO_PATH[page] ?? '/';
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToSubirFactura = useCallback(() => {
    navigate('/subir-factura');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBackToHome} />;
  }

  if (currentPage === 'cookies') {
    return <CookiePolicy onBack={handleBackToHome} />;
  }

  if (currentPage === 'legal') {
    return <LegalNotice onBack={handleBackToHome} />;
  }

  if (currentPage === 'about') {
    return <AboutUsPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'trust') {
    return <TrustPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Header onChatOpen={handleChatOpen} onPageChange={handlePageChange} onGoToSubirFactura={handleGoToSubirFactura} />
      <HeroSection onGoToSubirFactura={handleGoToSubirFactura} onChatOpen={handleChatOpen} />
      <BenefitsSection onGoToSubirFactura={handleGoToSubirFactura} />
      <HowItWorksSection onGoToSubirFactura={handleGoToSubirFactura} />
      <TestimonialsSection />
      <ComparatorSection onGoToSubirFactura={handleGoToSubirFactura} />
      <TrustSection />
      <FinalCTASection onGoToSubirFactura={handleGoToSubirFactura} />
      <Footer onPageChange={handlePageChange} />
      <FloatingChatButton onClick={handleChatOpen} />
      <ChatBot isOpen={isChatOpen} onClose={handleChatClose} initialMessage={initialMessage} onNavigateToSubirFactura={handleGoToSubirFactura} />
      <CookiePopup onPageChange={handlePageChange} />
    </div>
  );
}

export default App;