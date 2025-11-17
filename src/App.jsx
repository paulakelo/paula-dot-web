import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProjectsPage} from "./pages/ProjectsPage.jsx";
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from "./pages/ContactPage.jsx";
import '../styles/main.css'

export default function App() {
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
    </Routes>
  )
}

