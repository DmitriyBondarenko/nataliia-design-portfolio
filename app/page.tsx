import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Terms } from "@/components/Terms";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Terms />
      <Footer />
    </>
  );
}
