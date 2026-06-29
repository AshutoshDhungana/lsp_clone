import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Section1 from './components/Section1.tsx'
import Section2 from './components/Section2.tsx'
import Section3 from './components/Section3.tsx'
import StudentPartners from './components/StudentPartners.tsx'
import Mentors from './components/Mentors.tsx'
import Testimonials from './components/Testimonials.tsx'
import Finalsection from './components/Finalsection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Section1/>
    <Section2 />
    <Section3 />
    <StudentPartners/>
    <Mentors />
    <Testimonials/>
    <Finalsection/>
    <Footer />
  </StrictMode>,
)
