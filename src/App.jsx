import React from 'react'
import HeroSection from './pages/HeroSection'
import Footer from './components/Footer'
import Services from './pages/Service'
import AdditionalServices from './pages/AdditionalServicesAdditionalServices'
import WhyChooseSection from './pages/WhyChooseSection '
import HerosSection from './pages/HerosSection'
import FounderSection from './pages/FounderSection'
function App() {
  return (
    <div className="App">
      <HerosSection/>
      <Services/>
      <AdditionalServices/>
      <WhyChooseSection/>
      <FounderSection/>
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App