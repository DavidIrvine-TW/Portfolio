import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Contact from './components/Contact'



function App() {


  return (
    <>
      <Header/>
      <main className="  ">
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
    
      </main>
      <Footer/>
      
    
   
    </>
  )
}

export default App
