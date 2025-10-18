import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import WorkingStep from "./components/WorkingStep.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/TestimonialsComponent.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-primary text-white overflow-x-hidden bg-heroBg min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <About />
        <WorkingStep />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
