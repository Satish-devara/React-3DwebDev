import Hero from "./Hero"
import About from "./About"
import Nav from "./Nav"
import Features from "./Features"
import Story from "./Story"
import Contact from "./Contact";
import Footer from "./Footer"
function App() {

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
