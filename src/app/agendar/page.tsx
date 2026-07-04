"use client";

import Header from "@/components/Header";
import AgendarForm from "@/components/AgendarForm";

export default function AgendarPage() {
  return (
    <main className="min-h-screen bg-white text-pet-marinho overflow-hidden pt-20">
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-pet-azul/40 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-pet-coral/40 rounded-full blur-3xl z-0" />
      <Header />
      <AgendarForm />
    </main>
  );
}