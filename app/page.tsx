import Hero from "@/components/Home/Hero";
import Faq from "@/components/Home/Faq";
import Chatbot from "@/components/Home/Chatbot";
import OurApp from "@/components/Home/OurApp";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Chatbot/>
      <Faq/>
      <Contact/>
      <OurApp/>
    </div>
  );
}
