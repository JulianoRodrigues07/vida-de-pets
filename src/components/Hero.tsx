"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const fotosEsquerda = [
  { src: "/pet3.png", alt: "Border Collie" },
  { src: "/pet4.png", alt: "Poodle branco" },
  { src: "/pet5.png", alt: "Spitz Alemão natalino" },
  { src: "/pet3.png", alt: "Border Collie" },
  { src: "/pet4.png", alt: "Poodle branco" },
  { src: "/pet5.png", alt: "Spitz Alemão natalino" },
];

const fotosDireita = [
  { src: "/pet1.png", alt: "Gatinho siamês" },
  { src: "/pet2.png", alt: "Golden Retriever" },
  { src: "/pet6.png", alt: "Spitz Alemão no brinquedo" },
  { src: "/pet1.png", alt: "Gatinho siamês" },
  { src: "/pet2.png", alt: "Golden Retriever" },
  { src: "/pet6.png", alt: "Spitz Alemão no brinquedo" },
];

function ColunaFotos({
  fotos,
  direcao,
}: {
  fotos: { src: string; alt: string }[];
  direcao: "up" | "down";
}) {
  return (
    <div className="relative h-130 overflow-hidden w-36">
      {/* Gradiente topo */}
      <div
        className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, white, transparent)" }}
      />
      {/* Gradiente base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, white, transparent)" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          animation: `${direcao === "up" ? "scrollUp" : "scrollDown"} 14s linear infinite`,
        }}
      >
        {fotos.map((foto, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "144px",
              height: "176px",
              borderRadius: "16px",
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Keyframes injetados via style tag */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <section className="relative pt-5 pb-24 md:pt-10 md:pb-28">
        {/* Blobs */}
        <div className="absolute -top-20 -left-10 w-72 h-72 bg-pet-azul/20 rounded-full blur-3xl z-0" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-pet-coral/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pet-laranja/30 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-6xl mx-auto flex items-center gap-8">

          {/* Coluna esquerda */}
          <div className="hidden lg:block shrink-0 ">
            <ColunaFotos fotos={fotosEsquerda} direcao="down" />
          </div>

          {/* Conteúdo central */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center px-6 lg:px-0"
          >
            <span className="inline-block bg-pet-azul/10 text-pet-azul font-bold px-4 py-1 rounded-full mb-6 ">
              🐾 Passo Fundo - Rio Grande do Sul
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-pet-marinho">
              Cuidado de verdade{" "}
              <span className="text-pet-coral inline-block">
                pra quem você ama
              </span>
            </h1>

            <p className="mt-5 text-lg text-zinc-500 max-w-lg mx-auto">
              Atendimento veterinário, estética, creche e hotel — tudo em um só
              lugar, com carinho de quem entende de pets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a
                href="/agendar"
                className="inline-block bg-pet-laranja text-white font-bold px-8 py-3 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
              >
                Agendar horário 🐶
              </a>
              <a
                href="https://wa.me/5554999508873?text=Olá! Vim pelo site e gostaria de agendar um serviço para meu pet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold px-8 py-3 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                WhatsApp <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>

          {/* Coluna direita */}
          <div className="hidden lg:block shrink-0">
            <ColunaFotos fotos={fotosDireita} direcao="up" />
          </div>
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative z-10 mt-5 w-full max-w-3xl mx-auto px-6 lg:px-0"
>
  <a
    href="https://www.instagram.com/vidadepets.pf"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[28px] border border-pet-azul/20 bg-white/80 p-5 shadow-[0_20px_60px_-20px_rgba(19,78,110,0.35)] backdrop-blur-sm hover:-translate-y-1 transition-transform"
  >
    <div className="flex items-center gap-4 text-left w-full sm:w-auto">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 text-white shadow-lg shrink-0"
        style={{
          background: "linear-gradient(60deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)",
        }}
      >
        <FaInstagram size={22} />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pet-azul">
          Siga a gente
        </p>
        <p className="text-base md:text-lg font-bold text-pet-marinho">
          Veja bastidores, pets felizes e novidades do dia a dia
        </p>
      </div>
    </div>
    <div className="inline-flex items-center gap-2 rounded-full bg-pet-marinho px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-pet-coral shrink-0">
      @vidadepets.pf
      <span aria-hidden="true">→</span>
    </div>
  </a>
</motion.div>
        {/* Seta scroll */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative z-10 flex justify-center mt-8"
        >
          <div className="text-center">
            <p className="text-pet-marinho text-sm font-semibold mb-2">Conheça mais</p>
            <svg className="w-6 h-6 mx-auto text-pet-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>
    </>
  );
}