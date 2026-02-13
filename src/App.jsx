import React from 'react'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import AboutSection from './components/AboutSection/AboutSection.jsx'
import Projects from './components/Projects/Projects.jsx'
import '../styles/main.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
