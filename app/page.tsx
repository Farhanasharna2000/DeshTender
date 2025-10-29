import Hero from "@/components/Home/Hero";
import Faq from "@/components/Home/Faq";
import Chatbot from "@/components/Home/Chatbot";
import OurApp from "@/components/Home/OurApp";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Chatbot/>
      <Faq/>
      <OurApp/>
    </div>
  );
}
