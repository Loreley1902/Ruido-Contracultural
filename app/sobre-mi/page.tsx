import Link from "next/link"
import Image from "next/image"

export default function SobreMiPage() {
  return (
    <div className="bg-warm-white">
      {/* Hero Section - Soy Lore */}
      <section className="bg-cream border-t border-sand px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-6">Soy Lore</h1>
            <p className="text-sm text-muted-text leading-relaxed mb-6">
              Mi rincón en internet dedicado a la reflexión cultural, la escritura y las ideas 
              que atraviesan nuestra vida cotidiana. En este espacio comparto artículos, críticas 
              y textos donde exploro la cultura, la sociedad y las preguntas que muchas veces 
              pasan desapercibidas. Este es un lugar para leer, pensar y cuestionar el mundo 
              desde distintas miradas.
            </p>
            
            <div className="mb-6">
              <div className="text-[0.65rem] font-medium tracking-widest uppercase text-brown mb-3">
                Encuéntrame en
              </div>
              <div className="flex flex-wrap gap-3">
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
                <Link 
                  href="mailto:Lfuentesh19@gmail.com"
                  className="px-4 py-2 border border-sand rounded-sm text-xs font-medium tracking-wider uppercase text-espresso hover:bg-beige hover:border-brown transition-colors"
                >
                  Correo electrónico
                </Link>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-sm">
            <Image 
              src="/images/lore.png" 
              alt="Foto de Lore"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-beige border-y border-sand px-6 md:px-10 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl text-espresso mb-3">Disfruta</h2>
          <p className="text-sm text-muted-text mb-6">
            Opina acerca de los últimos artículos, reflexiones e ideas que he compartido en este espacio.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Escribe tu correo electrónico..."
              className="flex-1 px-4 py-3 bg-warm-white border border-sand rounded-sm text-sm text-espresso placeholder:text-muted-text focus:outline-none focus:border-brown transition-colors"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-espresso text-cream text-xs font-medium tracking-wider uppercase rounded-sm hover:bg-dark-brown transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* About the Blog Section */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-espresso mb-6 text-center">Acerca de Ruido Contracultural</h2>
          
          <div className="space-y-5 text-sm text-muted-text leading-relaxed">
            <p>
              Este es un espacio digital dedicado a la escritura y a la reflexión cultural. 
              Aquí reúno artículos, críticas y ensayos breves que observan distintos fenómenos 
              de la cultura, la sociedad y la vida cotidiana desde una mirada crítica y curiosa.
            </p>
            
            <p>
              La intención de este sitio no es solo comentar lo que ocurre a nuestro alrededor, 
              sino también detenerse a pensar en aquello que muchas veces pasa desapercibido: 
              los discursos que circulan en la cultura, las contradicciones sociales, las ideas 
              que influyen en nuestra forma de vivir y de comprender el mundo.
            </p>
            
            <p>
              A través de textos que combinan análisis, opinión y exploración cultural, este 
              espacio busca abrir preguntas más que ofrecer respuestas definitivas. Cada publicación 
              intenta mirar la realidad desde distintos ángulos, cuestionar lo evidente y proponer 
              nuevas formas de interpretar lo cotidiano.
            </p>
            
            <p>
              Este sitio está pensado como un lugar para leer con calma, reflexionar y entrar en 
              diálogo con ideas que atraviesan nuestra época. Un pequeño rincón en internet donde 
              la escritura funciona como herramienta para pensar la cultura y sus múltiples significados.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
