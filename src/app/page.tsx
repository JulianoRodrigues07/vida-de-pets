import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicosSection from "../components/ServicosSection";
import Avaliacoes from "@/components/Avaliacoes";
import AgendarForm from "@/components/AgendarForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-30">
      <Header />
      <Hero />
      <ServicosSection />
      <Avaliacoes />
      <AgendarForm />
      <Footer />
    </main>
  );
}