"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

type Agendamento = {
  id: number;
  nome: string;
  telefone: string;
  nomePet: string;
  servico: string;
  data: string;
  horario: string;
  status: string;
  criadoEm: string;
};

const statusConfig = {
  pendente: { label: "Pendente", classe: "bg-yellow-100 text-yellow-700" },
  confirmado: { label: "Confirmado", classe: "bg-green-100 text-green-700" },
  cancelado: { label: "Cancelado", classe: "bg-red-100 text-red-700" },
};

function gerarMensagemConfirmacao(ag: Agendamento) {
  return encodeURIComponent(
    `Olá ${ag.nome}! 🐾 O agendamento do ${ag.nomePet} na *Vida de Pets* foi *confirmado*!\n\n` +
    `📋 Serviço: ${ag.servico}\n` +
    `📅 Data: ${ag.data}\n` +
    `🕐 Horário: ${ag.horario}\n\n` +
    `Te esperamos! Qualquer dúvida é só chamar. 😊`
  );
}

function gerarMensagemReagendamento(ag: Agendamento) {
  return encodeURIComponent(
    `Olá ${ag.nome}! 🐾 Precisamos reagendar o atendimento do ${ag.nomePet} na *Vida de Pets*.\n\n` +
    `📋 Serviço: ${ag.servico}\n` +
    `📅 Data solicitada: ${ag.data}\n` +
    `🕐 Horário solicitado: ${ag.horario}\n\n` +
    `Por favor, entre em contato para escolhermos um novo horário. 😊`
  );
}

function limparTelefone(telefone: string) {
  return telefone.replace(/\D/g, "");
}

export default function AdminPage() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelandoId, setCancelandoId] = useState<number | null>(null);

  async function fetchAgendamentos() {
    const res = await fetch("/api/agendamentos");
    const data = await res.json();
    setAgendamentos(data);
    setLoading(false);
  }

  async function atualizarStatus(id: number, status: string) {
    await fetch(`/api/agendamentos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setCancelandoId(null);
    fetchAgendamentos();
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAgendamentos();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 text-pet-marinho">
      {/* Header admin */}
      <header className="bg-white border-b border-zinc-100 px-6 md:px-12 py-4 flex items-center justify-between">
        <Image src="/logo-principal.png" alt="Logo Vida de Pets" width={120} height={40} />
        <button
          onClick={async () => {
            await fetch("/api/auth/nextauth", { method: "DELETE" });
            window.location.href = "/admin/login";
          }}
          className="text-sm font-semibold text-zinc-500 hover:text-pet-coral transition"
        >
          Sair
        </button>
      </header>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-2">Agendamentos</h1>
        <p className="text-zinc-500 mb-8">Gerencie os agendamentos recebidos.</p>

        {loading ? (
          <p className="text-zinc-400">Carregando...</p>
        ) : agendamentos.length === 0 ? (
          <p className="text-zinc-400">Nenhum agendamento ainda.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {agendamentos.map((ag) => {
              const config = statusConfig[ag.status as keyof typeof statusConfig];
              const telefone = limparTelefone(ag.telefone);
              const linkConfirmar = `https://wa.me/55${telefone}?text=${gerarMensagemConfirmacao(ag)}`;
              const linkReagendar = `https://wa.me/55${telefone}?text=${gerarMensagemReagendamento(ag)}`;

              return (
                <div
                  key={ag.id}
                  className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
                >
                  {/* Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <p className="font-bold text-lg">{ag.nome}</p>
                      <p className="text-zinc-500 text-sm">{ag.telefone}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full w-fit ${config.classe}`}>
                      {config.label}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-zinc-600 border-t border-zinc-100 pt-3">
                    <p>📋 <strong>Serviço:</strong> {ag.servico}</p>
                    <p>🐾 <strong>Pet:</strong> {ag.nomePet}</p>
                    <p>📅 <strong>Data:</strong> {ag.data}</p>
                    <p>🕐 <strong>Horário:</strong> {ag.horario}</p>
                  </div>
                  {/* Ações */}
                  <div className="flex flex-wrap gap-2 border-t border-zinc-100 pt-3">
                    {/* Confirmar no sistema */}
                    {ag.status !== "confirmado" && (
                      <button
                        onClick={() => atualizarStatus(ag.id, "confirmado")}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-full transition"
                      >
                        ✔ Confirmar
                      </button>
                    )}

                    {/* Avisar via WhatsApp - confirmação */}
                    <a
                      href={linkConfirmar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Confirmar via WhatsApp
                    </a>

                    {/* Reagendar via WhatsApp */}
                    <a
                      href={linkReagendar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-pet-azul hover:opacity-90 text-white text-sm font-bold px-4 py-2 rounded-full transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Reagendar via WhatsApp
                    </a>

                    {/* Cancelar com confirmação */}
                    {ag.status !== "cancelado" && (
                      cancelandoId === ag.id ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-zinc-500">Tem certeza?</span>
                          <button
                            onClick={() => atualizarStatus(ag.id, "cancelado")}
                            className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full transition"
                          >
                            Sim, cancelar
                          </button>
                          <button
                            onClick={() => setCancelandoId(null)}
                            className="bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-sm font-bold px-4 py-2 rounded-full transition"
                          >
                            Não
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setCancelandoId(ag.id)}
                          className="bg-red-400 hover:bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full transition"
                        >
                          ✕ Cancelar
                        </button>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}