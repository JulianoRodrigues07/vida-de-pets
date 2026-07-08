import Header from "@/components/Header";
import { Clock3, MapPin, PawPrint } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white text-pet-marinho pt-16 relative">
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-pet-azul/30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-pet-coral/30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-pet-laranja/30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pet-azul/30 rounded-full blur-3xl z-0 pointer-events-none" />

      <Header />

      <section className="relative z-10 px-6 md:px-12 py-12 max-w-5xl w-full mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-1 text-center">
          Fale com a <span className="text-pet-azul">gente</span>
        </h1>
        <p className="text-zinc-500 text-sm mb-8 text-center">
          Estamos em Passo Fundo, RS. Venha conhecer! 
        </p>

        <div className="flex flex-col gap-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5554999508873?text=Olá! Vim pelo site e gostaria de agendar um serviço para meu pet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-pet-azul/10 hover:bg-pet-azul/20 transition rounded-2xl px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-azul"
          >
            <div className="w-10 h-10 rounded-xl bg-pet-azul/20 flex items-center justify-center shrink-0">
              <FaWhatsapp size={20} />
            </div>
            <div className="flex-1">
              <p className="font-bold">WhatsApp</p>
              <p className="text-zinc-500 text-sm">(54) 99950-8873 — toque para chamar</p>
            </div>
            <span className="text-zinc-400 text-lg">→</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/vidadepets.pf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-pet-coral/10 hover:bg-pet-coral/20 transition rounded-2xl px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-coral"
          >
            <div className="w-10 h-10 rounded-xl bg-pet-coral/20 flex items-center justify-center shrink-0">
              <FaInstagram size={20} />
            </div>
            <div className="flex-1">
              <p className="font-bold">Instagram</p>
              <p className="text-zinc-500 text-sm">@vidadepets.pf — nos siga!</p>
            </div>
            <span className="text-zinc-400 text-lg">→</span>
          </a>

          {/* Endereço */}
          <div className="flex items-center gap-4 bg-pet-laranja/10 rounded-2xl px-6 py-5">
            <div className="w-10 h-10 rounded-xl bg-pet-laranja/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-pet-laranja" />
            </div>
            <div className="flex-1">
              <p className="font-bold">Endereço</p>
              <p className="text-zinc-500 text-sm">Rua Vacaria, 75 - Vera Cruz, Passo Fundo - Rio Grande do Sul</p>
            </div>
          </div>

          {/* Horários + Mapa lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Horários */}
            <div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pet-azul/10 flex items-center justify-center shrink-0">
                  <Clock3 className="w-5 h-5 text-pet-azul" />
                </div>
                <div>
                  <p className="font-bold">Horários</p>
                  <p className="text-zinc-500 text-sm">Petshop e serviços</p>
                </div>
              </div>

              <div className="flex flex-col text-sm mb-3">
                <div className="flex justify-between py-1.5 border-b border-zinc-100">
                  <span className="text-zinc-500">Seg a Sex</span>
                  <span className="font-semibold text-pet-marinho">8:00–12:00 / 13:30–18:00</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500">Sábado</span>
                  <span className="font-semibold text-pet-marinho">8:00–12:00</span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-pet-coral/10 flex items-center justify-center shrink-0">
                    <PawPrint className="w-5 h-5 text-pet-coral" />
                  </div>
                  <div>
                    <p className="font-bold">Creche & Hotel</p>
                    <p className="text-zinc-500 text-sm">Hospedagem</p>
                  </div>
                </div>
                <div className="flex flex-col text-sm">
                  <div className="flex justify-between py-1.5 border-b border-zinc-100">
                    <span className="text-zinc-500">Creche — Check-in</span>
                    <span className="font-semibold text-pet-marinho">07:30</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-100">
                    <span className="text-zinc-500">Creche — Check-out</span>
                    <span className="font-semibold text-pet-marinho">19:00</span>
                  </div>
                  
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-500">Hotel (Hospedagem)</span>
                    <span className="font-semibold text-pet-azul">24 Horas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden border border-zinc-100 shadow-sm min-h-75">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3819223427444!2d-52.40477!3d-28.25778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a0e5b6c5b6c5b%3A0x6c5b6c5b6c5b6c5b!2sRua%20Vac%C3%A1ria%2C%2075%20-%20Vera%20Cruz%2C%20Passo%20Fundo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}