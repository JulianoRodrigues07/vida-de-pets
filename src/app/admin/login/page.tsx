"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/admin");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <Image src="/logo.png" alt="Logo Vida de Pets" width={160} height={50} className="mb-8" />

      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-extrabold text-pet-marinho mb-1">
          Área administrativa
        </h1>
        <p className="text-zinc-500 text-sm mb-8">
          Acesso restrito a administradores.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm text-pet-marinho" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 transition"
            />
          </div>

          {error && (
            <p className="text-pet-coral text-sm font-semibold">
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-pet-laranja text-white font-bold px-8 py-3 rounded-full border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}