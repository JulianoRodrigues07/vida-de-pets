"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";

const servicos = [
  "Creche e Hotel",
  "Estética Animal",
  "Atendimento Veterinário",
  "Exames e Vacinas",  
];

const horarios = [
  "08:00", "09:00", "10:00", "11:00",
  "14:00", "15:00", "16:00", "17:00",
];

type Status = "idle" | "loading" | "success" | "error";

export default function AgendarPage() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    data: "",
    horario: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([]);
  const [buscandoHorarios, setBuscandoHorarios] = useState(false);

  // Toda vez que a data mudar, busca os horários ocupados
  useEffect(() => {
    if (!form.data) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHorariosOcupados([]);
      return;
    }

    async function buscarHorariosOcupados() {
      setBuscandoHorarios(true);
      try {
        const res = await fetch(`/api/horarios-ocupados?data=${form.data}`);
        const data = await res.json();
        setHorariosOcupados(data);

        // Se o horário selecionado ficou ocupado, limpa a seleção
        if (data.includes(form.horario)) {
          setForm((prev) => ({ ...prev, horario: "" }));
        }
      } catch {
        console.error("Erro ao buscar horários");
      } finally {
        setBuscandoHorarios(false);
      }
    }

    buscarHorariosOcupados();
  }, [form.data, form.horario]);

  // Data mínima = hoje (não permite agendar no passado)
  const hoje = new Date().toISOString().split("T")[0];

  function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) {
  const { name, value } = e.target;

  if (name === "nome") {
    // permite letras (com acento), espaços e apóstrofo/hífen (para nomes compostos)
    const apenasLetras = value.replace(/[^A-Za-zÀ-ÿ\s'-]/g, "");
    setForm((prev) => ({ ...prev, nome: apenasLetras }));
    return;
  }

  if (name === "telefone") {
    // permite só números, e formata como (54) 99999-9999
    const apenasNumeros = value.replace(/\D/g, "").slice(0, 11);
    let formatado = apenasNumeros;
    if (apenasNumeros.length > 2) {
      formatado = `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    }
    if (apenasNumeros.length > 7) {
      formatado = `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
    }
    setForm((prev) => ({ ...prev, telefone: formatado }));
    return;
  }

  setForm((prev) => ({ ...prev, [name]: value }));
}

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ nome: "", telefone: "", servico: "", data: "", horario: "" });
      setHorariosOcupados([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-20 ">
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-pet-azul/40 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-pet-coral/40 rounded-full blur-3xl z-0" />
      
      <Header />

      <section className="px-6 md:px-12 py-16 max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">
          Agendar <span className="text-pet-laranja">horário</span>
        </h1>
        <p className="text-zinc-500 mb-10">
          Preencha os dados abaixo e entraremos em contato para confirmar.
        </p>

        {status === "success" ? (
          <div className="bg-pet-azul/10 border border-pet-azul rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold text-pet-azul mb-2">
              Agendamento recebido! 🐾
            </p>
            <p className="text-zinc-500">
              Entraremos em contato pelo WhatsApp para confirmar seu horário.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 bg-pet-laranja text-white font-bold px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Fazer novo agendamento
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm" htmlFor="nome">
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Ex: Maria Silva"
                value={form.nome}
                onChange={handleChange}
                required
                className="border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 transition"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm" htmlFor="telefone">
                WhatsApp
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(54) 99999-9999"
                value={form.telefone}
                onChange={handleChange}
                required
                className="border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 transition"
              />
            </div>

            {/* Serviço */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm" htmlFor="servico">
                Serviço
              </label>
              <select
                id="servico"
                name="servico"
                value={form.servico}
                onChange={handleChange}
                required
                className="border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 transition bg-white"
              >
                <option value="">Selecione um serviço</option>
                {servicos.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Data */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm" htmlFor="data">
                Data
              </label>
              <input
                id="data"
                name="data"
                type="date"
                min={hoje}
                value={form.data}
                onChange={handleChange}
                required
                className="border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 transition"
              />
            </div>

            {/* Horário */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm" htmlFor="horario">
                Horário
                {buscandoHorarios && (
                  <span className="ml-2 text-xs text-zinc-400 font-normal">
                    Verificando disponibilidade...
                  </span>
                )}
              </label>
              <select
                id="horario"
                name="horario"
                value={form.horario}
                onChange={handleChange}
                required
                disabled={!form.data || buscandoHorarios}
                className="border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 transition bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">
                  {!form.data
                    ? "Selecione uma data primeiro"
                    : buscandoHorarios
                    ? "Verificando..."
                    : "Selecione um horário"}
                </option>
                {horarios.map((h) => {
                  const ocupado = horariosOcupados.includes(h);
                  return (
                    <option key={h} value={h} disabled={ocupado}>
                      {h} {ocupado ? "— Indisponível" : ""}
                    </option>
                  );
                })}
              </select>
            </div>

            {status === "error" && (
              <p className="text-pet-coral text-sm font-semibold">
                Algo deu errado. Tente novamente ou entre em contato pelo WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-pet-laranja text-white font-bold px-8 py-3 rounded-full border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Confirmar agendamento"}
            </button>
            <a
              href="https://wa.me/5554999508873?text=Olá! Vim pelo site e gostaria de agendar um serviço para meu pet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold py-2 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
              <FaWhatsapp size={20} /> Entrar em contato pelo WhatsApp
            </a>
          </form>
        )}
      </section>
    </main>
  );
}