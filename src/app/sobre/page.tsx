"use client";

import Header from "@/components/Header";
import Galeria from "@/components/Galeria";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Heart, Award, Calendar, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";

const diferenciais = [
  {
    titulo: "Livre de gaiolas",
    Icon: Heart,
    cor: "bg-pet-coral/10 text-pet-coral",
    descricao: "Nossos hóspedes ficam livres e confortáveis, sem confinamento.",
  },
  {
    titulo: "Equipe especializada",
    Icon: Star,
    cor: "bg-pet-laranja/10 text-pet-laranja",
    descricao: "Profissionais capacitados e apaixonados pelo que fazem.",
  },
  {
    titulo: "Ambiente seguro",
    Icon: ShieldCheck,
    cor: "bg-pet-azul/10 text-pet-azul",
    descricao: "Espaço pensado para o bem-estar e a segurança do seu pet.",
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-20 relative">
      <Header />

      {/* Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pet-azul/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-pet-coral/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pet-laranja/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero — título + texto em 2 colunas */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-pet-laranja/10 text-pet-laranja font-bold text-sm px-4 py-1 rounded-full mb-4">
              🐾 Nossa história
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Sobre a{" "}
              <span className="text-pet-laranja">Vida de Pets</span>
            </h1>
            <div className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
              <p>
                Fundada em <strong className="text-pet-marinho">01 de junho de 2024</strong>, a Vida de Pets nasceu do amor pelos animais e da vontade de oferecer um cuidado completo, acessível e cheio de carinho para os pets de Passo Fundo e região.
              </p>
              <p>
                Aqui acreditamos que os animais fazem parte da família. Por isso, buscamos criar uma experiência acolhedora tanto para os pets quanto para seus tutores, sempre com atendimento humanizado, responsabilidade e dedicação.
              </p>
            </div>

            {/* Badges de info */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 rounded-full px-4 py-2 text-sm font-semibold text-zinc-600">
                <Calendar className="w-4 h-4 text-pet-laranja" />
                Desde junho de 2024
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 rounded-full px-4 py-2 text-sm font-semibold text-zinc-600">
                <MapPin className="w-4 h-4 text-pet-coral" />
                Passo Fundo - RS
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 rounded-full px-4 py-2 text-sm font-semibold text-zinc-600">
                <Award className="w-4 h-4 text-pet-azul" />
                5.0 no Google
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/inauguracao2.jpeg"
              alt="Inauguração da Vida de Pets"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-extrabold text-pet-marinho">🎉 Inauguração</p>
              <p className="text-sm text-zinc-500">01 de junho de 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção da Pâmela */}
      <section className="px-6 md:px-12 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Foto placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Círculo decorativo atrás */}
                <div className="w-52 h-52 md:w-74 md:h-74 rounded-2xl bg-linear-to-br from-pet-azul/20 to-pet-laranja/20" />                {/* Placeholder com iniciais */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src="/pamela.jpeg"
                      alt="Pâmela Ferroni Rodrigues — Médica Veterinária"
                      width={400}
                      height={400}
                      quality={100}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                </div>
                {/* Badge flutuante */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-lg px-4 py-2 border border-zinc-100"
                >
                  <p className="text-xs font-bold text-pet-marinho">🩺 Médica Veterinária</p>
                  <p className="text-xs text-zinc-400">CRMV-RS / 17977</p>
                </motion.div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <span className="inline-block bg-pet-azul/10 text-pet-azul font-bold text-sm px-4 py-1 rounded-full mb-4">
                👩‍⚕️ Quem está por trás
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Pâmela <span className="text-pet-coral">Rodrigues</span> Ferroni
              </h2>
              <p className="text-pet-azul font-semibold mb-4">Médica Veterinária & Fundadora</p>
              <div className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
                <p>
                  Apaixonada por animais desde sempre, Pâmela fundou a Vida de Pets com um sonho: criar um espaço onde cada pet fosse tratado como parte da família.
                </p>
                <p>
                  Médica veterinária dedicada, ela combina conhecimento técnico com um atendimento cheio de carinho e empatia — tanto com os pets quanto com seus tutores.
                </p>
                <p>
                  Sua missão é simples: fazer com que cada animal que passa pela Vida de Pets saia mais saudável, feliz e amado do que chegou.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Por que nos <span className="text-pet-azul">escolher?</span>
          </h2>
          <p className="text-zinc-500 mt-3 max-w-xl mx-auto">
            Mais do que um petshop — um lugar onde seu pet é tratado com amor de verdade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-zinc-100 shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <div className={`w-12 h-12 rounded-xl ${item.cor} flex items-center justify-center mx-auto mb-4`}>
                <item.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-1">{item.titulo}</h3>
              <p className="text-zinc-500 text-sm">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Galeria />
      <Footer />
    </main>
  );
}