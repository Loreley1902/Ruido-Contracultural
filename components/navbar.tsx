"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const essays = [
  { slug: "el-sutil-fracaso-de-las-palabras", title: "El sutil fracaso de las palabras" },
  { slug: "a-la-medida-de-otro", title: "A la Medida de Otro" },
  { slug: "feliz-8-de-marzo", title: "Feliz 8 de Marzo" },
]

const poems = [
  { slug: "jueves-19", title: "Poema 1 — Jueves 19" },
  { slug: "brindis-por-tu-valentia", title: "Poema 2 — Brindis por tu valentía" },
  { slug: "caminemos", title: "Poema 3 — Caminemos" },
]

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav className="bg-cream border-b border-sand px-6 md:px-10 flex items-center justify-between h-[62px] sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/images/logo.jpg" 
          alt="Ruido Contracultural logo" 
          width={36} 
          height={36}
          className="rounded-full"
        />
        <span className="font-serif text-xl text-espresso">
          Ruido <em className="text-brown">Contracultural</em>
        </span>
      </Link>
      
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <Link 
            href="/" 
            className={cn(
              "text-xs font-medium tracking-wider uppercase text-muted-text transition-colors hover:text-espresso",
              pathname === "/" && "text-espresso border-b-[1.5px] border-brown pb-0.5"
            )}
          >
            Inicio
          </Link>
        </li>
        <li className="relative group">
          <Link 
            href="/categorias"
            className={cn(
              "text-xs font-medium tracking-wider uppercase text-muted-text transition-colors hover:text-espresso",
              pathname.startsWith("/categorias") && "text-espresso border-b-[1.5px] border-brown pb-0.5"
            )}
          >
            Categorías
          </Link>
          
          {/* Dropdown */}
          <div className="hidden group-hover:block absolute top-full left-0 pt-3">
            <div className="bg-cream border border-sand rounded-sm min-w-[210px] shadow-lg">
              <div className="px-4 pt-3 pb-2 border-b border-beige">
                <div className="text-[0.65rem] tracking-widest uppercase text-brown font-medium mb-2">Ensayos</div>
                {essays.map((essay) => (
                  <Link 
                    key={essay.slug}
                    href={`/ensayos/${essay.slug}`}
                    className="block text-sm text-text py-1 hover:text-brown transition-colors"
                  >
                    {essay.title}
                  </Link>
                ))}
              </div>
              <div className="px-4 pt-3 pb-3">
                <div className="text-[0.65rem] tracking-widest uppercase text-brown font-medium mb-2">Poemas sin editar</div>
                {poems.map((poem) => (
                  <Link 
                    key={poem.slug}
                    href={`/poemas/${poem.slug}`}
                    className="block text-sm text-text py-1 hover:text-brown transition-colors"
                  >
                    {poem.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link 
            href="/sobre-mi"
            className={cn(
              "text-xs font-medium tracking-wider uppercase text-muted-text transition-colors hover:text-espresso",
              pathname === "/sobre-mi" && "text-espresso border-b-[1.5px] border-brown pb-0.5"
            )}
          >
            Sobre mí
          </Link>
        </li>
      </ul>
    </nav>
  )
}
