import React from 'react'
import HeroSection from './pages/HeroSection'
import Footer from './components/Footer'
import Services from './pages/Service'
import AdditionalServices from './pages/AdditionalServicesAdditionalServices'
import WhyChooseSection from './pages/WhyChooseSection '
import HerosSection from './pages/HerosSection'
import FounderSection from './pages/FounderSection'
import Header from './components/Header'
import ClientSection from './pages/ClientSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HerosSection/>
      <Services/>
      <AdditionalServices/>
      <WhyChooseSection/>
      <ClientSection/>
      <FounderSection/>
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App