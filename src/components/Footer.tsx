import Link from "next/link";
import { MapPin,} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-pet-marinho text-white mt-20">
      <div className="px-6 md:px-12 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Coluna 1 - Marca */}
        <div>
          <p className="font-extrabold text-xl mb-2">
            vida de <span className="text-pet-laranja">Pets</span>
          </p>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Cuidado completo para o seu melhor amigo, com carinho e profissionalismo em Passo Fundo - RS.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div>
          <p className="font-bold mb-4 text-pet-azul">Navegação</p>
          <nav className="flex flex-col gap-2 text-sm text-zinc-300">
            <Link href="/servicos" className="hover:text-white transition">Serviços</Link>
            <Link href="/sobre" className="hover:text-white transition">Sobre</Link>
            <Link href="/agendar" className="hover:text-white transition">Agendar horário</Link>
            <Link href="/creche" className="hover:text-white transition">Creche & Hotel</Link>
            <Link href="/contato" className="hover:text-white transition">Contato</Link>
          </nav>
        </div>

        {/* Coluna 3 - Contato e Mapa */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-bold mb-4 text-pet-azul">Contato</p>
            <div className="flex flex-col gap-3 text-sm text-zinc-300">
              <a
                href="https://wa.me/5554999508873?text=Olá! Vim pelo site e gostaria de agendar um serviço para meu pet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaWhatsapp size={24} />
                (54) 99950-8873
              </a>
              <a
                href="https://www.instagram.com/vidadepets.pf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaInstagram size={24} />
                @vidadepets.pf
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={24} className="shrink-0 mt-0.5" />
                <span>Rua Vacaria, 75 - Vera Cruz, Passo Fundo - RS</span>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3819223427444!2d-52.40477!3d-28.25778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a0e5b6c5b6c5b%3A0x6c5b6c5b6c5b6c5b!2sRua%20Vac%C3%A1ria%2C%2075%20-%20Vera%20Cruz%2C%20Passo%20Fundo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "0.75rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/10 px-6 md:px-12 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <p className="text-zinc-400 text-xs">
          © {new Date().getFullYear()} Vida de Pets. Todos os direitos reservados.
        </p>
        <Link
          href="/admin"
          className="text-zinc-600 hover:text-zinc-400 text-xs transition"
        >
          Acesso admin
        </Link>
      </div>
    </footer>
  );
}