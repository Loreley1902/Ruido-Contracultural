import Link from "next/link"
import { essays, poems } from "@/lib/data"

export default function CategoriasPage() {
  return (
    <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto">
      <div className="flex items-baseline justify-between border-b border-slate pb-3 mb-8">
        <h1 className="font-serif text-xl md:text-2xl text-pearl">Categorías</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ensayos */}
        <div className="border border-slate rounded-lg overflow-hidden">
          <div className="bg-charcoal px-6 py-4 border-b border-slate flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-coral" />
            <h2 className="font-serif text-base text-pearl">Ensayos</h2>
          </div>
          <div>
            {essays.map((essay, index) => (
              <Link 
                key={essay.slug}
                href={`/ensayos/${essay.slug}`}
                className={`flex items-baseline justify-between px-6 py-3 hover:bg-charcoal transition-colors group ${
                  index < essays.length - 1 ? "border-b border-slate" : ""
                }`}
              >
                <span className="text-sm text-silver group-hover:text-coral transition-colors">
                  {essay.title}
                </span>
                <span className="text-xs text-smoke ml-4 shrink-0">
                  {essay.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Poemas */}
        <div className="border border-slate rounded-lg overflow-hidden">
          <div className="bg-charcoal px-6 py-4 border-b border-slate flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber" />
            <h2 className="font-serif text-base text-pearl">Poemas sin editar</h2>
          </div>
          <div>
            {poems.map((poem, index) => (
              <Link 
                key={poem.slug}
                href={`/poemas/${poem.slug}`}
                className={`flex items-baseline justify-between px-6 py-3 hover:bg-charcoal transition-colors group ${
                  index < poems.length - 1 ? "border-b border-slate" : ""
                }`}
              >
                <span className="text-sm text-silver group-hover:text-coral transition-colors">
                  Poema {poem.number} — {poem.title}
                </span>
                <span className="text-xs text-smoke ml-4 shrink-0">
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
