import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Languages from './components/Languages'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Languages />
      </main>
      <Footer />
    </div>
  )
}
