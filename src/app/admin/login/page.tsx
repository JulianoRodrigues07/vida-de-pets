"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

    if (res && !res.error) {
      router.push("/admin");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <Image src="/logo-principal.png" alt="Logo Vida de Pets" width={160} height={50} className="mb-8" />

      <div className="w-full max-w-sm justify-center bg-white border border-zinc-200 rounded-2xl px-6 py-8 shadow-md">
        <h1 className="text-2xl font-extrabold text-pet-marinho mb-1 text-center">
          Área administrativa
        </h1>
        <p className="text-zinc-500 text-sm mb-8 text-center">
          Acesso restrito a administradores.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm text-pet-marinho" htmlFor="password">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-2 border-zinc-200 focus:border-pet-azul outline-none rounded-xl px-4 py-3 pr-12 transition text-pet-marinho"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-pet-marinho transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
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
