"use client";

import { motion } from "framer-motion";

const avaliacoes = [
  {
    nome: "Silmara Hoffmann",
    inicial: "S",
    cor: "bg-pet-azul",
    texto:
      "Esse lugar é muito bom para as pets. Bastante espaço para gastarem as energias. A Pâmela é muito querida. Super recomendo!",
  },
  {
    nome: "Nathana Rosa Garcia",
    inicial: "N",
    cor: "bg-pet-marinho",
    texto:
      "É muito bom encontrar um lugar onde a gente sente que nosso pet está realmente seguro e feliz. Obrigada por todo o carinho, cuidado e dedicação com o Bento. Você é incrível tia Pâ!",
  },
  {
    nome: "Daniela M. Lago",
    inicial: "D",
    cor: "bg-pet-coral",
    texto:
      "Fomos muito bem atendidos! A Dra. Pamela é super querida e atenciosa, nos deixou à vontade e tirou todas as nossas dúvidas. O espaço é lindo, acolhedor e transmite muito cuidado. Recomendo de coração!",
  },
  {
    nome: "Caroline Hermes",
    inicial: "C",
    cor: "bg-pet-laranja",
    texto:
      "Lugar incrível para deixar seu pet. Ótimo atendimento, com todo carinho e atenção que seu pet merece. Olivia, Margot e Tom recomendam!",
  },
  {
    nome: "Andressa Mendes",
    inicial: "A",
    cor: "bg-pet-azul",
    texto: "Dra. Pamela cuida com muito amor todos os seus pacientes.",
  },
  {
    nome: "Júlia Hoffmann Batista",
    inicial: "J",
    cor: "bg-pet-marinho",
    texto: "Ótima creche e pet! Luna e Lola ficam muito felizes, lindas e cheirosas ❤️",
  },
];

function Estrelas() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-pet-laranja" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Avaliacoes() {
  return (
    <section className="px-6 md:px-12 py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-pet-marinho">
              O que dizem nossos{" "}
              <span className="text-pet-coral">clientes</span>
            </h2>
            <p className="text-zinc-500 mt-2">
              Avaliações reais de quem confia no nosso cuidado.
            </p>
          </div>

          {/* Badge nota geral */}
          <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-zinc-100 w-fit">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-pet-marinho leading-none">4.9</p>
              <Estrelas />
              <p className="text-xs text-zinc-400 mt-1">no Google</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#4285F4]" />
                <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
                <div className="w-3 h-3 rounded-full bg-[#FBBC05]" />
                <div className="w-3 h-3 rounded-full bg-[#34A853]" />
              </div>
              <p className="text-xs font-bold text-zinc-500">Google</p>
              <p className="text-xs text-zinc-400">Avaliações verificadas</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {avaliacoes.map((av, i) => (
            <motion.div
              key={av.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Barra gradiente Google no topo */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: "linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)"
                }}
              />
              {/* Topo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`${av.cor} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {av.inicial}
                  </div>
                  <div>
                    <p className="font-bold text-pet-marinho text-sm leading-tight">
                      {av.nome}
                    </p>
                    <p className="text-xs text-zinc-400"></p>
                  </div>
                </div>
                {/* Logo Google */}
                <div className="flex gap-0.5 shrink-0">
                  {["#4285F4","#EA4335","#FBBC05","#34A853"].map((cor, j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ background: cor }} />
                  ))}
                </div>
              </div>

              <Estrelas />

              <p className="text-zinc-600 text-sm leading-relaxed">
                &quot;{av.texto}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}