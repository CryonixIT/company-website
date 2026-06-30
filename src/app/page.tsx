import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/landing/Hero";
import Stats from "@/component/landing/Stats";
import Services from "@/component/landing/Services";
import Process from "@/component/landing/Process";
import About from "@/component/landing/About";
import Testimonials from "@/component/landing/Testimonials";
import Contact from "@/component/landing/Contact";
import Footer from "@/component/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#E1DCC9] selection:bg-[#412D15] selection:text-[#E1DCC9]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}