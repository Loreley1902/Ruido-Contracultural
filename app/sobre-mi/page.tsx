import Link from "next/link"
import Image from "next/image"

export default function SobreMiPage() {
  return (
    <section className="bg-cream border-t border-sand px-6 md:px-10 py-12 md:py-14">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h1 className="font-serif text-2xl text-espresso mb-4">Sobre mí</h1>
          <p className="text-sm text-muted-text leading-relaxed mb-4">
            Ruido Contracultural es un archivo personal de escritura y reflexión cultural. 
            Notas, ensayos y poemas sobre la vida cultural contemporánea. Escritura como forma 
            de observar el mundo con honestidad y conciencia crítica.
          </p>
          <p className="text-sm text-muted-text leading-relaxed">
            Creo en el poder de las palabras para cuestionar, conectar y transformar. 
            Aquí comparto mis reflexiones sobre género, lenguaje, memoria colectiva y 
            todo aquello que merece una pausa en medio del ruido cotidiano.
          </p>
          
          <div className="mt-6">
            <div className="text-[0.65rem] font-medium tracking-widest uppercase text-brown mb-2">
              Correo
            </div>
            <div className="text-sm text-espresso">Lfuentesh19@gmail.com</div>
          </div>
          
          <div className="mt-5">
            <div className="text-[0.65rem] font-medium tracking-widest uppercase text-brown mb-3">
              Redes sociales
            </div>
            <div className="flex gap-3">
              <Link 
                href="https://www.linkedin.com/in/loreley-fuentes-hern%C3%A1ndez-28a856307/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-sand rounded-sm text-xs font-medium tracking-wider uppercase text-espresso hover:bg-beige hover:border-brown transition-colors"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://www.instagram.com/lorefh19/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-sand rounded-sm text-xs font-medium tracking-wider uppercase text-espresso hover:bg-beige hover:border-brown transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-sm">
            <Image 
              src="/images/author.jpg" 
              alt="Foto de la autora"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 border border-sand rounded-sm bg-warm-white">
            <blockquote className="font-serif italic text-sm text-espresso leading-relaxed mb-3">
              &ldquo;Ya no es la ausencia de lenguaje lo que nos separa, sino la incapacidad de usarlo con conciencia.&rdquo;
            </blockquote>
            <cite className="text-xs text-muted-text tracking-wider uppercase not-italic">
              — El sutil fracaso de las palabras
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
