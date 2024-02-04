import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
function App() {


  return (
    <>
      <Header/>
      <main className="  ">
        <Hero/>
        <About/>
        <Projects/>
    
      </main>
      <Footer/>
      
    
   
    </>
  )
}

export default App
