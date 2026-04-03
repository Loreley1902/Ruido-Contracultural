import Link from "next/link"
import Image from "next/image"
import { essays, poems } from "@/lib/data"

export default function HomePage() {
  const featuredEssay = essays[0]
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream border-b border-sand px-6 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          <div>
            <div className="text-[0.68rem] font-medium tracking-widest uppercase text-muted-text mb-2">
              Último artículo
            </div>
            <span className="inline-block text-[0.68rem] font-medium tracking-widest uppercase text-brown bg-blush px-3 py-1 rounded-sm mb-3">
              {featuredEssay.category}
            </span>
            <h1 className="font-serif text-3xl md:text-[2.6rem] leading-tight text-espresso mb-4 tracking-tight">
              El sutil <em className="text-brown">fracaso</em><br />de las palabras
            </h1>
            <p className="text-sm text-muted-text leading-relaxed mb-6">
              {featuredEssay.excerpt.replace("otorga la capacidad de crear y conectar, pero también revela cuánto nos falta por aprender a comprendernos.", "convierte en creadores, pero seguimos siendo quienes limitamos nuestro propio uso de él. Ya no es la ausencia de lenguaje lo que nos separa, sino la incapacidad de usarlo con conciencia.")}
            </p>
            <Link 
              href={`/ensayos/${featuredEssay.slug}`}
              className="inline-flex items-center gap-2 bg-espresso text-cream px-6 py-3 rounded-sm text-xs font-medium tracking-wider uppercase hover:bg-dark-brown transition-colors"
            >
              Leer artículo →
            </Link>
          </div>
          <div className="bg-beige rounded p-8 md:p-10 border-l-[3px] border-brown">
            <blockquote className="font-serif text-base md:text-lg text-espresso leading-relaxed italic mb-4">
              &ldquo;Dicen que no hablan las plantas, ni las fuentes, ni los pájaros… pero hablan, y dicen cosas de mujer.&rdquo;
            </blockquote>
            <cite className="text-xs text-muted-text tracking-wider uppercase not-italic">— Rosalía de Castro</cite>
          </div>
        </div>
      </section>

      {/* Ensayos Section */}
      <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between border-b border-sand pb-3 mb-8">
          <h2 className="font-serif text-xl md:text-2xl text-espresso">Ensayos</h2>
          <span className="text-xs text-muted-text italic">Reflexión y análisis cultural</span>
        </div>
        
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-6 md:gap-7">
          {/* Featured Essay */}
          <Link href={`/ensayos/${essays[0].slug}`} className="group">
            <div className="h-[180px] rounded-sm mb-4 overflow-hidden bg-blush">
              <Image 
                src={essays[0].image || ""} 
                alt={essays[0].title}
                width={600}
                height={180}
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="text-[0.67rem] font-medium tracking-widest uppercase text-brown mb-1.5">
              {essays[0].category}
            </div>
            <h3 className="font-serif text-xl text-espresso mb-2 group-hover:text-brown transition-colors">
              {essays[0].title}
            </h3>
            <p className="text-sm text-muted-text leading-relaxed mb-2">
              {essays[0].excerpt}
            </p>
            <div className="text-xs text-muted-text">{essays[0].date} · Ensayo</div>
          </Link>

          {/* Second Essay */}
          <Link href={`/ensayos/${essays[1].slug}`} className="group">
            <div className="h-[110px] rounded-sm mb-3 overflow-hidden bg-dusty">
              <Image 
                src={essays[1].image || ""} 
                alt={essays[1].title}
                width={400}
                height={110}
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="text-[0.67rem] font-medium tracking-widest uppercase text-brown mb-1">
              {essays[1].category}
            </div>
            <h3 className="font-serif text-base text-espresso mb-1.5 group-hover:text-brown transition-colors">
              {essays[1].title}
            </h3>
            <p className="text-sm text-muted-text leading-relaxed mb-1.5">
              {essays[1].excerpt}
            </p>
            <div className="text-xs text-muted-text">{essays[1].date} · Ensayo</div>
          </Link>

          {/* Third Essay */}
          <Link href={`/ensayos/${essays[2].slug}`} className="group">
            <div className="h-[110px] rounded-sm mb-3 overflow-hidden bg-sage">
              <Image 
                src={essays[2].image || ""} 
                alt={essays[2].title}
                width={400}
                height={110}
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="text-[0.67rem] font-medium tracking-widest uppercase text-brown mb-1">
              {essays[2].category}
            </div>
            <h3 className="font-serif text-base text-espresso mb-1.5 group-hover:text-brown transition-colors">
              {essays[2].title}
            </h3>
            <p className="text-sm text-muted-text leading-relaxed mb-1.5">
              {essays[2].excerpt}
            </p>
            <div className="text-xs text-muted-text">{essays[2].date} · Reflexión</div>
          </Link>
        </div>
      </section>

      {/* Poems Section */}
      <section className="bg-espresso px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-3 mb-8">
            <h2 className="font-serif text-xl md:text-2xl text-cream">Muro de poemas sin editar</h2>
            <span className="text-xs text-sand italic">Escritura en estado puro</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {poems.map((poem) => (
              <Link 
                key={poem.slug}
                href={`/poemas/${poem.slug}`}
                className="group bg-white/5 border border-white/10 rounded-sm p-6 md:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-[0.65rem] font-medium tracking-widest uppercase text-sand mb-5 flex items-center gap-3">
                  Poema {poem.number} — {poem.title}
                  <span className="flex-1 h-px bg-white/10" />
                </div>
                <p 
                  className="font-serif italic text-sm text-cream leading-loose"
                  dangerouslySetInnerHTML={{ __html: poem.preview }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-beige border-y border-sand px-6 md:px-10 py-12 text-center">
        <blockquote className="font-serif italic text-lg md:text-xl text-espresso leading-relaxed max-w-2xl mx-auto mb-4">
          &ldquo;Nuestra facilidad para olvidar se ha convertido en una carga colectiva. Deslizamos el scroll frente a situaciones que merecen detener nuestra mirada.&rdquo;
        </blockquote>
        <cite className="text-xs text-muted-text tracking-wider uppercase not-italic">— Ruido Contracultural</cite>
      </section>
    </>
  )
}
