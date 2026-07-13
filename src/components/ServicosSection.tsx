"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home as HomeIcon, LucideIcon, Sparkles, Stethoscope, Syringe } from "lucide-react";

type Servico = {
  titulo: string;
  descricao: string;
  destaque: string;
  Icon: LucideIcon;
  cor: string;
};

const servicos: Servico[] = [
  {
    titulo: "Creche e Hotel",
    descricao: "Um espaço acolhedor para o seu pet brincar, descansar e se sentir em casa.",
    destaque: "Conforto e Diversão",
    Icon: HomeIcon,
    cor: "bg-gradient-to-br from-pet-azul to-sky-500",
  },
  {
    titulo: "Estética Animal",
    descricao: "Banho, tosa e cuidados especiais para deixar seu pet ainda mais bonito e confortável.",
    destaque: "Beleza e Saudável",
    Icon: Sparkles,
    cor: "bg-gradient-to-br from-pet-coral to-rose-400",
  },
  {
    titulo: "Exames e Vacinas",
    descricao: "Prevenção e acompanhamento com atenção aos cuidados essenciais da saúde do seu pet.",
    destaque: "Saúde preventiva",
    Icon: Syringe,
    cor: "bg-gradient-to-br from-pet-laranja to-amber-400",
  },
  {
    titulo: "Atendimento Veterinário",
    descricao: "Avaliação, orientações e cuidado clínico com uma equipe dedicada e experiente.",
    destaque: "Cuidado profissional",
    Icon: Stethoscope,
    cor: "bg-gradient-to-br from-pet-marinho to-slate-700",
  },
];

function ServiceCard({ titulo, descricao, destaque, Icon, cor, rotacao, index }: Servico & { rotacao: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      tabIndex={0}
      className={`${cor} ${rotacao} relative overflow-hidden rounded-[28px] p-6 text-left text-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45)] hover:rotate-0 hover:scale-[1.02] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-marinho focus-visible:ring-offset-2`}
    >
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-5 font-bold text-xl">{titulo}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/90">{descricao}</p>
        <div className="mt-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
          {destaque}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicosSection() {
  return (
    <section id="servicos" className="px-6 py-24 md:px-12 md:py-30 relative">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-4xl border border-zinc-100 bg-linear-to-r from-pet-azul/10 via-white to-pet-coral/10 p-8 text-center shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pet-marinho/70">Cuidado completo para pets</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-pet-marinho">
            Nossos <span className="text-pet-azul">serviços</span> são pensados para o bem-estar do seu melhor amigo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 md:text-lg">
            Da saúde ao conforto, cada detalhe é pensado para oferecer praticidade, carinho e segurança no dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, i) => (
            <ServiceCard
              key={servico.titulo}
              {...servico}
              rotacao={i % 2 === 0 ? "md:rotate-1" : "md:-rotate-1"}
              index={i}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/servicos"
            className="inline-block bg-pet-laranja text-white font-bold px-6 py-3 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
          >
            Saiba mais <ArrowRight className="inline-block ml-2 -translate-y-px" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}