import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Lifecycle from "@/components/Lifecycle";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <Lifecycle />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
