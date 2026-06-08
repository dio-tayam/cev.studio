import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1 flex flex-col pt-16">
        <ComingSoon label="About" />
      </main>
      <Footer />
    </div>
  );
}
