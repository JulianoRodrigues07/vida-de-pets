"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Shield,
  Clock,
  Heart,
  Users,
  Sun,
  Home as HomeIcon,
  CheckCircle,
} from "lucide-react";

const fotos = [
  { src: "/creche1.jpg", alt: "Área de recreação externa" },
  { src: "/creche2.jpg", alt: "Área coberta com os pets" },
  { src: "/creche3.jpeg", alt: "Pets brincando no gramado" },
  { src: "/creche4.jpg", alt: "Área coberta ampla" },
  { src: "/creche5.jpg", alt: "Pets socializando" },
  { src: "/creche6.jpg", alt: "Cachorro tomando banho" },
  { src: "/creche7.jpeg", alt: "Área coberta ampla" },
  { src: "/creche9.jpeg", alt: "Pets socializando" },
  { src: "/creche10.jpeg", alt: "Cachorro tomando banho" },
];

const diferenciais = [
  { Icon: Shield, titulo: "Livre de gaiolas", descricao: "Ambiente aberto onde seu pet tem liberdade pra se movimentar e explorar à vontade." },
  { Icon: Clock, titulo: "Monitoramento 24h", descricao: "Acompanhamento constante para garantir segurança e bem-estar a qualquer hora." },
  { Icon: Heart, titulo: "Cuidado personalizado", descricao: "Cada pet tem sua personalidade — respeitamos e adaptamos o cuidado individualmente." },
  { Icon: Users, titulo: "Socialização", descricao: "Atividades em grupo que estimulam a interação e o desenvolvimento dos pets." },
  { Icon: Sun, titulo: "Área externa", descricao: "Espaço amplo ao ar livre com grama, brinquedos e muita energia pra gastar." },
  { Icon: HomeIcon, titulo: "Hotel disponível", descricao: "Hospedagem diária ou semanal para quando você precisar viajar com tranquilidade." },
];

const incluso = [
  "Monitoramento veterinario",
  "Creche para todos os portes",
  "Atividades e brincadeiras em grupo",
  "Espaço externo com grama e brinquedos",
  "Área coberta para dias de chuva",
  "Monitoramento constante da equipe",
  "Atualização via WhatsApp pra você",
];

export default function CrechePage() {
  const [fotoAtiva, setFotoAtiva] = useState(0);

  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-20 relative">
      <Header />

      {/* Blobs de fundo — igual à página de serviços */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pet-azul/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-pet-coral/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pet-laranja/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-pet-marinho/10 text-pet-marinho font-bold text-sm px-4 py-1 rounded-full mb-4">
              🏠 Creche & Hotel
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Um lar enquanto <br />
              <span className="text-pet-azul">você está fora</span>
            </h1>
            <p className="text-zinc-500 max-w-xl mx-auto mt-5 text-lg">
              Espaço seguro, livre de gaiolas e cheio de amor para seu pet
              ser feliz enquanto você viaja ou trabalha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center gap-2 bg-pet-laranja text-white font-bold px-8 py-3 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Reservar vaga 🐶
              </Link>
              <a
                href="https://wa.me/5554999508873?text=Olá! Vim pelo site e gostaria de agendar um serviço para meu pet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold px-8 py-3 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <FaWhatsapp size={20} /> Tirar dúvidas
              </a>
            </div>
          </motion.div>

          {/* Galeria */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start ">
            {/* Foto principal */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-4/4 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Image
                src={fotos[fotoAtiva].src}
                alt={fotos[fotoAtiva].alt}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                {fotos[fotoAtiva].alt}
              </div>
            </motion.div>

            {/* Miniaturas + horários */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-3 gap-3">
                {fotos.map((foto, i) => (
                  <button
                    key={i}
                    onClick={() => setFotoAtiva(i)}
                    className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-200 ${
                      fotoAtiva === i
                        ? "ring-2 ring-pet-laranja ring-offset-2 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={foto.src} alt={foto.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Horários */}
              <div className="bg-pet-marinho text-white rounded-2xl p-6">
                <p className="font-extrabold text-lg mb-4">🕐 Horários de funcionamento da Creche</p>
                <div className="flex flex-col gap-3">
                  {[
                    { dia: "Creche", hora: "7:30 às 19:00 de Segunda a Sexta", destaque: false },
                    { dia: "Hotel (hospedagem)", hora: "24 horas", destaque: true },
                  ].map((h) => (
                    <div
                      key={h.dia}
                      className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-white/70 text-sm">{h.dia}</span>
                      <span className={`font-bold text-sm ${h.destaque ? "text-pet-laranja" : "text-white"}`}>
                        {h.hora}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="px-6 md:px-12 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                O que está <span className="text-pet-coral">incluso</span>
              </h2>
              <p className="text-zinc-500 mb-8">
                Tudo pensado para que seu pet tenha a melhor experiência possível enquanto você está fora.
              </p>
              <div className="flex flex-col gap-3">
                {incluso.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-pet-azul shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
            >
              <Image src={fotos[fotoAtiva].src} alt={fotos[fotoAtiva].alt} fill className="object-cover hover:scale-105 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-extrabold text-pet-marinho">🐾 Livre de gaiolas</p>
                <p className="text-sm text-zinc-500">Seu pet fica solto, feliz e livre para explorar</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Por que escolher a <span className="text-pet-laranja">Vida de Pets?</span>
          </h2>
          <p className="text-zinc-500 text-center max-w-xl mx-auto mb-12">
            Nosso espaço foi pensado do zero para oferecer o melhor para o seu pet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-pet-azul/10 rounded-xl flex items-center justify-center mb-4">
                  <d.Icon className="w-6 h-6 text-pet-azul" />
                </div>
                <h3 className="font-extrabold mb-2">{d.titulo}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 md:px-12 py-16 bg-pet-marinho text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pronto para reservar uma vaga?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Entre em contato pelo WhatsApp ou faça seu agendamento online agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center gap-2 bg-pet-laranja text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Reservar vaga agora 🐶
            </Link>
            <a
              href="https://wa.me/5554999508873?text=Olá! Vim pelo site e gostaria de agendar um serviço para meu pet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-white/20 transition-all"
            >
              <FaWhatsapp size={20} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
