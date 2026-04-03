import Link from "next/link"
import Image from "next/image"

export default function SobreMiPage() {
  return (
    <div className="bg-ink">
      {/* About the Blog Section - First */}
      <section className="bg-charcoal border-t border-slate px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-2xl md:text-3xl text-pearl mb-8 text-center">Acerca de Ruido Contracultural</h1>
          
          <div className="space-y-5 text-sm text-silver leading-relaxed">
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

      {/* About Me Section - Second */}
      <section className="px-6 md:px-10 py-12 md:py-16 border-t border-slate">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Small Photo */}
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-full border-2 border-coral">
              <Image 
                src="/images/lore.png" 
                alt="Foto de Loreley"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* About Me Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl md:text-2xl text-pearl mb-4">Acerca de mí: Loreley</h2>
              <p className="text-sm text-silver leading-relaxed mb-6">
                Mi rincón en internet dedicado a la reflexión cultural, la escritura y las ideas 
                que atraviesan nuestra vida cotidiana. En este espacio comparto artículos, críticas 
                y textos donde exploro la cultura, la sociedad y las preguntas que muchas veces 
                pasan desapercibidas. Este es un lugar para leer, pensar y cuestionar el mundo 
                desde distintas miradas.
              </p>
              
              <div>
                <div className="text-[0.65rem] font-medium tracking-widest uppercase text-coral mb-3">
                  Encuéntrame en
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="https://www.linkedin.com/in/loreley-fuentes-hern%C3%A1ndez-28a856307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-slate rounded text-xs font-medium tracking-wider uppercase text-pearl hover:bg-graphite hover:border-coral transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link 
                    href="https://www.instagram.com/lorefh19/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-slate rounded text-xs font-medium tracking-wider uppercase text-pearl hover:bg-graphite hover:border-coral transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link 
                    href="mailto:Lfuentesh19@gmail.com"
                    className="px-4 py-2 border border-slate rounded text-xs font-medium tracking-wider uppercase text-pearl hover:bg-graphite hover:border-coral transition-colors"
                  >
                    Correo electrónico
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-graphite border-y border-slate px-6 md:px-10 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl text-pearl mb-3">Disfruta</h2>
          <p className="text-sm text-silver mb-6">
            Opina acerca de los últimos artículos, reflexiones e ideas que he compartido en este espacio.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Escribe tu correo electrónico..."
              className="flex-1 px-4 py-3 bg-charcoal border border-slate rounded text-sm text-pearl placeholder:text-smoke focus:outline-none focus:border-coral transition-colors"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-coral text-ink text-xs font-medium tracking-wider uppercase rounded hover:bg-coral-light transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
