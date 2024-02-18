import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  const wrapperClass = menu ? "overflow-hidden" : "min-h-screen";

  return (
    <div id="wrapper" className={`${wrapperClass} bg-gradient-to-b from-bgOffWhite to-slate-100`}>
      <Header menu={menu} setMenu={setMenu} />

      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
