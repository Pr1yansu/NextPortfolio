import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <About />
      <Projects />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
}
