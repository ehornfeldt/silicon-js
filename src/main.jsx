import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import AppFeatures from './components/AppFeatures.jsx'
import HowItWork from './components/HowItWork.jsx'
import Desktop from './components/Desktop.jsx'
import Reviews from './components/Reviews.jsx'
import FAQ from './components/FAQ.jsx'
import Subscribe from './components/Subscribe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Brands />
    <AppFeatures />
    <HowItWork />
    <Desktop />
    <Reviews />
    <FAQ />
    <Subscribe />
  </StrictMode>,
)
