import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/landing/Hero";
import EngineeringSection from "@/component/landing/EngineeringSection";
import Stats from "@/component/landing/Stats";
import Services from "@/component/landing/Services";
import Process from "@/component/landing/Process";
import About from "@/component/landing/About";
import Testimonials from "@/component/landing/Testimonials";
import Contact from "@/component/landing/Contact";
import Footer from "@/component/layout/Footer";
import FeaturedProjects from "@/component/landing/FeaturedProjects";
import Team from "@/component/landing/Team";
import SmoothScroll from "@/component/layout/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <EngineeringSection />
          <FeaturedProjects />
          <Process />
          <Stats />
          <Team />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}