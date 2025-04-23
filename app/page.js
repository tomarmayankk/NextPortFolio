import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Test from "@/components/Test";
import Techstack from "@/components/Techstack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] [background-size:14px_14px]">
      <Navbar />
      <section id="main" className="pt-20"><Main /></section>
      <Techstack />
      <section id="projects" className="pt-20"> <Projects /> </section>
<section id="contact" className="pt-20"> <Footer /> </section>
    </div>
  );
}
