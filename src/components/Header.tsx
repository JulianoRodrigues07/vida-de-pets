"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/creche", label: "Creche e Hotel" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao redimensionar pra desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuAberto(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trava o scroll da página quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuAberto]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 py-0.5 transition-all duration-300 ${
          scrolled || menuAberto ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuAberto(false)}>
            <Image
              src="/logo-circular.png"
              alt="Logo Vida de Pets - Petshop"
              width={100}
              height={32}
              priority
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-10 font-bold flex-1 justify-center ml-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-pet-coral transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-azul focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botão agendar desktop */}
          <Link
            href="/agendar"
            className="hidden md:inline-flex bg-pet-laranja text-white font-bold px-5 py-2 rounded-full border-2 border-pet-marinho shadow-[3px_3px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-marinho focus-visible:ring-offset-2 shrink-0"
          >
            Agendar
          </Link>

          {/* Botão hamburguer mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden p-2 rounded-xl text-pet-marinho hover:bg-zinc-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-azul"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-white pt-20 px-6 flex flex-col"
          >
            {/* Links */}
            <nav className="flex flex-col gap-2 mt-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuAberto(false)}
                    className="flex items-center justify-between py-4 border-b border-zinc-100 font-bold text-xl text-pet-marinho hover:text-pet-coral transition"
                  >
                    {link.label}
                    <span className="text-zinc-300">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Botão agendar mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/agendar"
                onClick={() => setMenuAberto(false)}
                className="flex items-center justify-center bg-pet-laranja text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-pet-marinho shadow-[4px_4px_0px_0px_#134E6E] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Agendar horário 🐶
              </Link>
            </motion.div>

            {/* Rodapé do menu mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="mt-auto pb-10 text-center"
            >
              <p className="text-zinc-400 text-sm">
                Rua Vacaria, 75 - Vera Cruz, Passo Fundo - RS
              </p>
              <p className="text-zinc-400 text-sm mt-1">
                📱 (54) 9040-0030
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}