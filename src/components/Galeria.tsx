"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fotos = [
  { src: "/foto1Sobre.jpg", alt: "Fachada do Vida de Pets" },
  { src: "/foto2Sobre.jpg", alt: "Recepção do Vida de Pets" },
  { src: "/foto3Sobre.jpg", alt: "Espaço externo para os pets" },
  { src: "/foto4Sobre.jpg", alt: "Área clínica" },
];

export default function Galeria() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="py-16 max-w-4xl mx-auto">
      <div className="px-6 md:px-12 mb-8">
        <h2 className="text-3xl font-extrabold mb-2">
          Nosso <span className="text-pet-coral">espaço</span>
        </h2>
        <p className="text-zinc-500">
          Um ambiente pensado para o conforto e a alegria do seu pet.
        </p>
      </div>

      <div className="relative">
        {/* Viewport do carrossel — sem overflow-hidden aqui pra mostrar preview */}
        <div className="overflow-hidden px-6" ref={emblaRef}>
          <div className="flex">
            {fotos.map((foto) => (
            <div
              key={foto.src}
              className="relative flex-none w-[90%] md:w-[80%] aspect-video rounded-2xl overflow-hidden ml-4"
            >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botão anterior */}
        <button
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pet-marinho rounded-full p-2 shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-azul z-10"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Botão próximo */}
        <button
          onClick={scrollNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pet-marinho rounded-full p-2 shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pet-azul z-10"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}