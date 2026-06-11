import RevealInit from "@/components/RevealInit";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Stats from "@/components/Stats";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        <Hero />
        <Steps />
        <Stats />
        <Offers />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </>
  );
}
