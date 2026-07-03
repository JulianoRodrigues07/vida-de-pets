import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-pet-marinho flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pet-azul/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-pet-coral/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pet-laranja/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <Image
          src="/logo-circular.png"
          alt="Vida de Pets"
          width={120}
          height={120}
          className="mx-auto mb-8"
        />

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-pet-marinho leading-none mb-2">
          4<span className="text-pet-coral">0</span>4
        </h1>

        <h2 className="text-2xl font-extrabold mb-4">
          Página não encontrada 🐾
        </h2>

        <p className="text-zinc-500 mb-8 leading-relaxed">
          Parece que essa página fugiu da creche! Não encontramos o que você estava procurando.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-pet-laranja text-white font-bold px-8 py-3 rounded-full border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Voltar ao início 🏠
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center bg-white text-pet-marinho font-bold px-8 py-3 rounded-full border-2 border-pet-marinho hover:bg-zinc-50 transition-all"
          >
            Falar conosco
          </Link>
        </div>
      </div>
    </main>
  );
}