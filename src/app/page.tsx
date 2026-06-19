import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Contact />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
