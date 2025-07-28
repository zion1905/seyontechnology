import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './pages/HeroSection'
import Footer from './components/Footer'
import Services from './pages/Service'
import AdditionalServices from './pages/AdditionalServicesAdditionalServices'
import WhyChooseSection from './pages/WhyChooseSection '
import HerosSection from './pages/HerosSection'
import FounderSection from './pages/FounderSection'
import Header from './components/Header'
import ClientSection from './pages/ClientSection'
import CountrySlider from './pages/CountrySlider'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BusinessForm from './pages/BusinessForm';
import AdminBusinessLeads from './pages/AdminBusinessLeads';
function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/business-form" element={<BusinessForm />} />
          <Route path="/admin/business-leads" element={<AdminBusinessLeads />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <HerosSection />
                <CountrySlider />
                <Services />
                <AdditionalServices />
                <WhyChooseSection />
                <ClientSection />
                <FounderSection />
                <HeroSection />
                <Footer />
              </>
            }
          />
        </Routes>
     
    </div>
  )
}

export default App;