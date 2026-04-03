import Link from "next/link"
import { essays, poems } from "@/lib/data"

export default function CategoriasPage() {
  return (
    <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto">
      <div className="flex items-baseline justify-between border-b border-sand pb-3 mb-8">
        <h1 className="font-serif text-xl md:text-2xl text-espresso">Categorías</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ensayos */}
        <div className="border border-sand rounded-sm overflow-hidden">
          <div className="bg-cream px-6 py-4 border-b border-sand flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brown" />
            <h2 className="font-serif text-base text-espresso">Ensayos</h2>
          </div>
          <div>
            {essays.map((essay, index) => (
              <Link 
                key={essay.slug}
                href={`/ensayos/${essay.slug}`}
                className={`flex items-baseline justify-between px-6 py-3 hover:bg-warm-white transition-colors group ${
                  index < essays.length - 1 ? "border-b border-beige" : ""
                }`}
              >
                <span className="text-sm text-text group-hover:text-brown transition-colors">
                  {essay.title}
                </span>
                <span className="text-xs text-muted-text ml-4 shrink-0">
                  {essay.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Poemas */}
        <div className="border border-sand rounded-sm overflow-hidden">
          <div className="bg-cream px-6 py-4 border-b border-sand flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-dusty" />
            <h2 className="font-serif text-base text-espresso">Poemas sin editar</h2>
          </div>
          <div>
            {poems.map((poem, index) => (
              <Link 
                key={poem.slug}
                href={`/poemas/${poem.slug}`}
                className={`flex items-baseline justify-between px-6 py-3 hover:bg-warm-white transition-colors group ${
                  index < poems.length - 1 ? "border-b border-beige" : ""
                }`}
              >
                <span className="text-sm text-text group-hover:text-brown transition-colors">
                  Poema {poem.number} — {poem.title}
                </span>
                <span className="text-xs text-muted-text ml-4 shrink-0">
                  {poem.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
