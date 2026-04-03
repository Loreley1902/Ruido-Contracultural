import { notFound } from "next/navigation"
import Link from "next/link"
import { getPoemBySlug, poems } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return poems.map((poem) => ({
    slug: poem.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  if (!poem) return { title: "Poema no encontrado" }
  return {
    title: `${poem.title} — Ruido Contracultural`,
    description: `Poema ${poem.number} de la colección Poemas sin editar`,
  }
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  
  if (!poem) {
    notFound()
  }

  return (
    <article className="max-w-[600px] mx-auto px-6 md:px-10 py-12 md:py-14">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-text hover:text-brown transition-colors mb-10"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver al inicio
      </Link>
      
      <div className="text-[0.68rem] font-medium tracking-widest uppercase text-brown mb-2">
        Poemas sin editar
      </div>
      
      <h1 className="font-serif text-2xl md:text-[2rem] leading-tight text-espresso mb-4 tracking-tight">
        {poem.title}
      </h1>
      
      <div className="text-sm text-muted-text mb-8 pb-8 border-b border-sand">
        {poem.date} · Poema sin editar
      </div>
      
      <div className="font-serif italic text-base md:text-lg text-espresso leading-loose mt-8">
        {poem.verses.map((verse, index) => (
          <p key={index} className="mb-5 whitespace-pre-line">
            {verse}
          </p>
        ))}
      </div>
    </article>
  )
}
