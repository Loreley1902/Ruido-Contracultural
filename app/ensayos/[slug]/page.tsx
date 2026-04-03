import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getEssayBySlug, essays } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const essay = getEssayBySlug(slug)
  if (!essay) return { title: "Ensayo no encontrado" }
  return {
    title: `${essay.title} — Ruido Contracultural`,
    description: essay.excerpt,
  }
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const essay = getEssayBySlug(slug)
  
  if (!essay) {
    notFound()
  }

  return (
    <article className="max-w-[720px] mx-auto px-6 md:px-10 py-12 md:py-14">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-smoke hover:text-coral transition-colors mb-10"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver al inicio
      </Link>
      
      <div className="text-[0.68rem] font-medium tracking-widest uppercase text-coral mb-2">
        {essay.category}
      </div>
      
      <h1 className="font-serif text-3xl md:text-[2.4rem] leading-tight text-pearl mb-4 tracking-tight">
        {essay.title}
      </h1>
      
      <div className="text-sm text-smoke mb-8 pb-8 border-b border-slate">
        {essay.date} · Ensayo · {essay.readTime}
      </div>
      
      {essay.image && (
        <div className="w-full h-[280px] md:h-[320px] rounded-lg mb-10 overflow-hidden bg-graphite">
          <Image 
            src={essay.image}
            alt={essay.title}
            width={720}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="prose prose-sm max-w-none">
        {essay.content.map((paragraph, index) => (
          <p 
            key={index}
            className="text-[0.95rem] leading-loose text-silver mb-5"
          >
            {paragraph}
          </p>
        ))}
        
        {essay.blockquote && (
          <blockquote className="font-serif italic text-lg text-pearl border-l-[3px] border-coral pl-6 my-8 leading-relaxed">
            {essay.blockquote}
          </blockquote>
        )}
      </div>
    </article>
  )
}
