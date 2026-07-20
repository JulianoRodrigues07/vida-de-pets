"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HouseHeart,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Footer from "@/components/Footer";



const perguntasFrequentes = [
  {
    pergunta: "Preciso agendar com antecedência?",
    resposta:
      "Recomendamos agendar com pelo menos 1 dia de antecedência para garantir o melhor horário, mas em caso de urgência entre em contato pelo WhatsApp que fazemos o possível para encaixar.",
  },
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta:
      "Aceitamos Pix, cartão de débito, cartão de crédito e dinheiro. O pagamento é feito no check in do seu pet.",
  },
  {
    pergunta: "Posso cancelar ou remarcar meu agendamento?",
    resposta:
      "Sim! Basta entrar em contato pelo WhatsApp com pelo menos 24 horas de antecedência para remarcar sem nenhum custo. ",
  },
  {
    pergunta: "Meu pet precisa estar com as vacinas em dia?",
    resposta:
      "Sim, para serviços de creche e hotel exigimos carteira de vacinação atualizada e controle de ectoparitas. Para banho e tosa, recomendamos, mas não é obrigatório.",
  },
  {
    pergunta: "Vocês atendem pets de todos os portes?",
    resposta:
      "Para serviços de creche e hospedagem atendemos somente cães de pequeno, médio e grande porte. Alguns serviços podem ter valores diferentes de acordo com o porte do animal, confira a disponibilidade das vagas.",
  },
];

function FaqItem({
  pergunta,
  resposta,
  aberta,
  onToggle,
}: {
  pergunta: string;
  resposta: string;
  aberta: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-bold text-pet-marinho">{pergunta}</span>
        <motion.span
          animate={{ rotate: aberta ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-pet-marinho/60"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {aberta && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-zinc-500 pb-5 pr-8">{resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicosPage() {
  const [] = useState<string | null>("Atendimento Veterinário");

  const fotosCreche = [
    "/creche1.jpg", "/creche3.jpeg", "/creche6.jpg", "/creche11.jpeg"
  ];

  const [fotoAtual, setFotoAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFotoAtual((prev) => (prev + 1) % fotosCreche.length);
    }, 2500); // troca a cada 2.5s
    return () => clearInterval(interval);
  }, [fotosCreche.length]);

  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-20 relative">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pet-azul/40 rounded-full blur-3xl" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-pet-coral/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pet-laranja/20 rounded-full blur-3xl z-0" />

      <Header />

      {/* Serviços */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pet-marinho/60">
              Cuidado completo
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
              Nossos <span className="text-pet-coral">Serviços</span>
            </h1>
            <p className="text-zinc-500 max-w-xl mx-auto mt-4">
              Tudo que seu pet precisa em um só lugar.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card grande — Estética */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            whileTap={{ scale: 0.99 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 bg-pet-azul rounded-3xl p-8 text-white relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full pointer-events-none"
              whileHover={{ scale: 1.25, opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full pointer-events-none"
              whileHover={{ scale: 1.35, opacity: 0.25 }}
              transition={{ duration: 0.35 }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <motion.div
                  className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
                </motion.div>

                <h2 className="text-2xl font-extrabold mb-2">
                  Estética Animal
                </h2>

                <p className="text-white mb-5 max-w-sm">
                  Banho, tosa e cuidados especiais para deixar seu pet cheiroso e bonito.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Banho Geral e Terapêutico",
                    "Hidratação da Pelagem",
                    "Tosa Geral e Higiênica",
                    "Desembolo",
                    "Remoção de sub pelos",
                    "Escovação dentária",
                    "Limpeza de ouvido",
                  ].map((tag, index) => (
                    <motion.span
                      key={tag}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      transition={{
                        duration: 0.15,
                        delay: index * 0.03,
                      }}
                      className="bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

            {/* Card pequeno — Exames e Vacinas */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
              y: -8,
              scale: 1.03,
              transition: {
                duration: 0.2,
                ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="bg-pet-coral rounded-3xl p-7 text-white relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            >
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none"
              whileHover={{
                scale: 1.3,
                opacity: 0.2,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Syringe className="w-6 h-6 text-white" strokeWidth={1.5} />
              </motion.div>

              <h2 className="text-xl font-extrabold mb-2">
                Exames e Vacinas
              </h2>

              <p className="text-white/70 text-sm">
                Protocolo completo de vacinas, exames laboratoriais, ultrassonografia e raio-x para seu pet ficar sempre protegido.
              </p>
            </div>
          </motion.div>

           {/* Card pequeno — Veterinário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
            className="bg-pet-laranja rounded-3xl p-7 text-white relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none"
              whileHover={{
                scale: 1.3,
                opacity: 0.2,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Stethoscope className="w-6 h-6 text-white" strokeWidth={1.5} />
              </motion.div>

              <h2 className="text-xl font-extrabold mb-2">
                Atendimento Veterinário
              </h2>

              <p className="text-white/70 text-sm mb-4">
                Cuidado completo para a saúde do seu pet, em todas as fases da vida.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Consulta clínica",
                  "Consulta oncológica",
                  "Acessórios",
                  "Medicamentos",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    transition={{
                      duration: 0.15,
                      delay: index * 0.03,
                    }}
                    className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

            {/* Card grande — Creche e Hotel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-2 bg-pet-marinho rounded-3xl p-8 text-white relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full pointer-events-none"
                whileHover={{ scale: 1.25, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full pointer-events-none"
                whileHover={{ scale: 1.35, opacity: 0.25 }}
                transition={{ duration: 0.35 }}
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <motion.div
                    className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                  <HouseHeart className="w-7 h-7 text-white" strokeWidth={1.5}/>
                  </motion.div>

                  <h2 className="text-2xl font-extrabold mb-2">
                    Creche & Hotel
                  </h2>

                  <p className="text-white/70 mb-5 max-w-sm">
                    Espaço seguro e cheio de amor para seu pet enquanto você viaja ou trabalha.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Livre de gaiolas",
                      "Monitoramento veterinário 24h",
                      "Socialização",
                      "Frutas e Água fresca",
                    ].map((tag, index) => (
                      <motion.span
                        key={tag}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                        }}
                        transition={{
                          duration: 0.15,
                          delay: index * 0.03,
                        }}
                        className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href="/creche"
                        className="inline-flex items-center gap-2 bg-pet-laranja text-white font-bold px-5 py-2 rounded-full text-lg hover:shadow-none transition-all"
                      >
                        Saiba mais →
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Carrossel de fotos vertical, trocando automaticamente */}
              <div className="hidden md:block relative w-full md:w-[38%] max-w-55 aspect-3/4 shrink-0 mr-4 rounded-2xl overflow-hidden shadow-lg bg-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={fotoAtual}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={fotosCreche[fotoAtual]}
                      alt="Pet após banho na Vida de Pets"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Indicador de posição */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                  {fotosCreche.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === fotoAtual ? "w-4 bg-white" : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
              </div>
            </motion.div>

          </div>

          {/* Botão único centralizado */}
          <div className="flex justify-center mt-8">
            <Link
              href="/agendar"
              className="inline-flex items-center gap-2 bg-pet-laranja text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Agendar um serviço 🐾 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="bg-zinc-50 px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pet-marinho/60">
              Dúvidas
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Perguntas <span className="text-pet-coral">Frequentes</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg px-6 md:px-8">
            {perguntasFrequentes.map((item, index) => (
              <FaqItem
                key={item.pergunta}
                pergunta={item.pergunta}
                resposta={item.resposta}
                aberta={perguntaAberta === index}
                onToggle={() =>
                  setPerguntaAberta(perguntaAberta === index ? null : index)
                }
              />
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
