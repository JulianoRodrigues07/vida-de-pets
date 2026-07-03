"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home as HomeIcon,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Footer from "@/components/Footer";



export default function ServicosPage() {
  const [] = useState<string | null>("Atendimento Veterinário");
  const [] = useState(0);

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

            {/* Card grande — Veterinário */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-2 bg-pet-azul rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold mb-2">Atendimento Veterinário</h2>
                <p className="text-white/70 mb-5 max-w-sm">
                  Consultas clínicas com profissionais capacitados para cuidar da saúde do seu pet.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Consultas gerais", "Diagnóstico", "Medicamentos", "Nutrição"].map((tag) => (
                    <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card pequeno — Exames e Vacinas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-pet-coral rounded-3xl p-7 text-white relative overflow-hidden"
            >
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <Syringe className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-extrabold mb-2">Exames e Vacinas</h2>
                <p className="text-white/70 text-sm">
                  Calendário completo de vacinas e exames preventivos para seu pet sempre protegido.
                </p>
              </div>
            </motion.div>

            {/* Card pequeno — Estética */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-pet-laranja rounded-3xl p-7 text-white relative overflow-hidden"
            >
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-extrabold mb-2">Estética Animal</h2>
                <p className="text-white/70 text-sm mb-4">
                  Banho, tosa e cuidados especiais para deixar seu pet cheiroso e bonito.
                </p>
                <div className="flex flex-col gap-1.5">
                  {["Banho Geral e Terapêutico", "Hidratação da Pelagem", "Tosa Geral e Higiênica", "Desembolo", "Remoção de sub pelos", "Escovação dentária", "LImpeza de ouvido"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card grande — Creche e Hotel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="md:col-span-2 bg-pet-marinho rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <HomeIcon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-extrabold mb-2">Creche & Hotel</h2>
                  <p className="text-white/70 mb-5 max-w-sm">
                    Espaço seguro e cheio de amor para seu pet enquanto você viaja ou trabalha.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Livre de gaiolas", "Monitoramento 24h", "Socialização", "Alimentação inclusa"].map((tag) => (
                      <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">

                    <Link
                      href="/creche"
                      className="inline-flex items-center gap-2 bg-pet-laranja text-white font-bold px-5 py-2 rounded-full text-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      Saiba mais →
                    </Link>
                  </div>
                </div>

                {/* Mini fotos */}
                <div className="hidden md:grid grid-cols-2 gap-2 shrink-0">
                  {["/creche1.jpg", "/creche3.jpg", "/creche5.jpg", "/creche2.jpg"].map((src, i) => (
                    <div key={i} className="relative w-24 h-24 rounded-xl overflow-hidden">
                      <Image src={src} alt="Creche" fill className="object-cover opacity-80" />
                    </div>
                  ))}
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
      <Footer />
    </main>
  );
}