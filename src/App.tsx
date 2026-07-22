import About from './components/About'
import ErrorBoundary from './components/ErrorBoundary'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Languages from './components/Languages'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import './App.css'

export default function App() {
  return (
    <ErrorBoundary
      fallback={
        <div className="app-error">
          <h1>Yevgen Slyudikov</h1>
          <p>Senior Web Developer portfolio failed to load. Please refresh the page.</p>
        </div>
      }
    >
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
    </ErrorBoundary>
  )
}
