import Hero from "@/components/Home/Hero";
import Faq from "@/components/Home/Faq";
import OurApp from "@/components/Home/OurApp";
import Contact from "@/components/Home/Contact";
import Process from "@/components/Home/Process";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Process/>
      <Faq/>
      <Contact/>
      <OurApp/>
    </div>
  );
}
