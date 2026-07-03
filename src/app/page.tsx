import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicosSection from "../components/ServicosSection";
import Footer from "../components/Footer";
import AgendarPage from "./agendar/page";
import Avaliacoes from "@/components/Avaliacoes";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-30">
      <Header />
      <Hero />
      <ServicosSection />
      <Avaliacoes />
      <AgendarPage />
      <Footer />
    </main>
  );
}