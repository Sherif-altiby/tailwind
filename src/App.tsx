import Choose from "./components/Choose/Choose";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
      <Section />
      <Choose />
      <About />
      <Section />
      <Contact />
    </>
  );
};

export default App;
