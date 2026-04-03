"use client"

import Link from "next/link"
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

// Logo component with stylized quotes
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-coral rounded flex items-center justify-center">
        <span className="font-serif text-2xl text-ink font-semibold leading-none">&laquo;&raquo;</span>
      </div>
      <span className="font-serif text-xl text-pearl">
        Ruido <em className="text-coral">Contracultural</em>
      </span>
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav className="bg-charcoal border-b border-slate px-6 md:px-10 flex items-center justify-between h-[62px] sticky top-0 z-50">
      <Link href="/">
        <Logo />
      </Link>
      
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <Link 
            href="/" 
            className={cn(
              "text-xs font-medium tracking-wider uppercase text-smoke transition-colors hover:text-pearl",
              pathname === "/" && "text-pearl border-b-[1.5px] border-coral pb-0.5"
            )}
          >
            Inicio
          </Link>
        </li>
        <li className="relative group">
          <Link 
            href="/categorias"
            className={cn(
              "text-xs font-medium tracking-wider uppercase text-smoke transition-colors hover:text-pearl",
              pathname.startsWith("/categorias") && "text-pearl border-b-[1.5px] border-coral pb-0.5"
            )}
          >
            Categorías
          </Link>
          
          {/* Dropdown */}
          <div className="hidden group-hover:block absolute top-full left-0 pt-3">
            <div className="bg-graphite border border-slate rounded min-w-[210px] shadow-lg shadow-black/30">
              <div className="px-4 pt-3 pb-2 border-b border-slate">
                <div className="text-[0.65rem] tracking-widest uppercase text-coral font-medium mb-2">Ensayos</div>
                {essays.map((essay) => (
                  <Link 
                    key={essay.slug}
                    href={`/ensayos/${essay.slug}`}
                    className="block text-sm text-silver py-1 hover:text-coral transition-colors"
                  >
                    {essay.title}
                  </Link>
                ))}
              </div>
              <div className="px-4 pt-3 pb-3">
                <div className="text-[0.65rem] tracking-widest uppercase text-coral font-medium mb-2">Poemas sin editar</div>
                {poems.map((poem) => (
                  <Link 
                    key={poem.slug}
                    href={`/poemas/${poem.slug}`}
                    className="block text-sm text-silver py-1 hover:text-coral transition-colors"
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
              "text-xs font-medium tracking-wider uppercase text-smoke transition-colors hover:text-pearl",
              pathname === "/sobre-mi" && "text-pearl border-b-[1.5px] border-coral pb-0.5"
            )}
          >
            Sobre mí
          </Link>
        </li>
      </ul>
    </nav>
  )
}
