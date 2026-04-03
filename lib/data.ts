export interface Essay {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
  image?: string
  content: string[]
  blockquote?: string
}

export interface Poem {
  slug: string
  title: string
  number: number
  preview: string
  date: string
  verses: string[]
}

export const essays: Essay[] = [
  {
    slug: "el-sutil-fracaso-de-las-palabras",
    title: "El sutil fracaso de las palabras",
    category: "Lenguaje & Sociedad",
    excerpt: "El lenguaje nos otorga la capacidad de crear y conectar, pero también revela cuánto nos falta por aprender a comprendernos.",
    date: "Marzo 2026",
    readTime: "5 min de lectura",
    image: "https://ruidocontracultural.wordpress.com/wp-content/uploads/2026/03/az0x6s71psjioq8my4nhsq-az0x6s71cwg9sph4iu98lq.png",
    content: [
      "El lenguaje, como herramienta casi divina, otorgada por algo superior o, al menos, por una fuerza que nos trasciende, nos convierte a su vez en creadores, hijos de nuestra propia naturaleza. Gracias a él, hemos logrado sobrepasar barreras inimaginables, incluso para aquellos primeros humanos que, por una mínima diferencia —como el olor— atentaban contra la vida de quienes pertenecían a otra comunidad.",
      "Y no pretendo llamar salvajes a esos primeros seres que hicieron posible nuestra evolución; al contrario, fue a partir de ellos que emergió la civilización. Sin embargo, la conciencia que nos otorgó la lengua nos ha permitido conectar más allá de cualquier medio tecnológico: ha expandido nuestra dimensión social. El lenguaje mismo nos impulsa a poner en práctica aquello para lo que, quizá, estamos aquí.",
      "Ahora bien, en medio de tanta exaltación y autoproclamación, seguimos siendo nosotros quienes limitamos nuestro propio uso del lenguaje. Y no lo juzgo: nos tomó millones de años llegar a decir \"hi, hola, salut, hallo, こんにちは\", y aún hoy nos cuesta comprender que el mensaje que el otro dice no siempre es el que quiso decir, ni tampoco el que yo quise escuchar.",
      "Las palabras nos potencian, pero también nos restringen. Seguimos categorizando prototipos sociales, y, por ende, lingüísticos, que nos arrastran a dinámicas del pasado: aquellas en las que, al no compartir una lengua privilegiada, se atentaba contra la vida del otro.",
      "Pues ya no es la ausencia de lenguaje lo que nos separa, sino la incapacidad de usarlo con conciencia; así, el meollo deja de estar en cuánto podemos decir y pasa a residir en cuánto somos capaces de comprender."
    ],
    blockquote: "Tal vez ya no atentamos de forma física contra el prójimo sino de una manera más dulce y sutil contra nuestra propia diversidad."
  },
  {
    slug: "a-la-medida-de-otro",
    title: "A la Medida de Otro",
    category: "Género",
    excerpt: "La mujer continúa enfrentando estándares desmedidos impuestos por una sociedad que no compete únicamente a los hombres.",
    date: "Marzo 2026",
    readTime: "4 min de lectura",
    image: "https://ruidocontracultural.wordpress.com/wp-content/uploads/2026/03/chatgpt-image-18-mar-2026-06_07_05-p.m.png",
    content: [
      "La mujer ha sido, sin duda, objeto de múltiples formas de violencia simbólica y social. A lo largo de la historia ha atravesado la crítica, el menosprecio y la desvalorización. Sin embargo, muchos afirman que, en la actualidad, ya hemos alcanzado una igualdad plena, como quien evoca mentalmente la balanza de la justicia en equilibrio perfecto.",
      "Sin embargo, esa mirada desconectada de la realidad ignora que la mujer continúa enfrentando estándares desmedidos, impuestos por una sociedad que no compete únicamente a los hombres, sino también a nosotras mismas.",
      "Se espera que la mujer encarne el ideal de madre perfecta, sin espacio para la vulnerabilidad, mientras trabaja y sostiene su hogar. Se le exige un equilibrio imposible: si muestra demasiado, es juzgada como exhibicionista; si muestra poco, es percibida como sin gracia y poco femenina. Si decide tener hijos, debe conservar una imagen prolija; si decide no tenerlos, es cuestionada por renunciar a su supuesta naturaleza.",
      "Así, nos encontramos atrapadas en estándares de belleza, profesionalismo y vida doméstica prácticamente inalcanzables, enfrentando no solo el señalamiento de los hombres, sino también el de otras mujeres que, viviendo bajo las mismas presiones, repiten los mismos juicios."
    ],
    blockquote: "\"Dicen que no hablan las plantas, ni las fuentes, ni los pájaros… pero hablan, y dicen cosas de mujer.\" — Rosalía de Castro"
  },
  {
    slug: "feliz-8-de-marzo",
    title: "Feliz 8 de Marzo",
    category: "Feminismo",
    excerpt: "En conmemoración de las mujeres asesinadas, maltratadas y silenciadas — y de nuestra facilidad colectiva para olvidar.",
    date: "8 de marzo 2026",
    readTime: "4 min de lectura",
    image: "https://ruidocontracultural.wordpress.com/wp-content/uploads/2026/03/ruido-contracultural-69af6f9de42f4.png",
    content: [
      "Hoy, en conmemoración de las mujeres asesinadas, maltratadas y silenciadas, podría desear una feliz lucha a quienes aún siguen siendo víctimas, a las que lo saben y a las que no. Sin embargo, desde que abrí los ojos no he podido dejar de pensar en el feminicidio ocurrido en la costa atlántica, que dejó como víctimas a las adolescentes Sheerydan y Keyla, dos jóvenes que apenas empezaban, para bien o para mal, el camino de sus vidas.",
      "Sus historias fueron truncadas por un par de adolescentes que, de alguna manera, también son reflejo de nuestra propia sociedad: de ideales torcidos, del maltrato de adultos cuyos nombres rara vez aparecen en las noticias, de amigos que normalizan e incluso alientan el acoso en las calles, de un gobierno que muchas veces le da la espalda a los problemas sociales, y también de nosotros: de ti y de mí, que olvidamos.",
      "\"Quien no conoce su historia está condenado a repetirla\", y nosotros, aun conociéndola, terminamos contagiados por la peste del olvido. En pocas semanas, después de haber juzgado a la fusilada y a la degollada, ni siquiera seremos capaces de recordar sus nombres.",
      "Feliz Día de la Mujer para quienes todavía pueden celebrarlo."
    ],
    blockquote: "Nuestra facilidad para olvidar se ha convertido en una carga colectiva. Deslizamos el scroll frente a situaciones que merecen detener nuestra mirada."
  }
]

export const poems: Poem[] = [
  {
    slug: "jueves-19",
    title: "Jueves 19",
    number: 1,
    preview: "Miré a los ojos del mundo un jueves 19 entre guacherna y batalla de flores, en plena ciudad paralizada, con mi papá borracho y mi mamá con dolores…",
    date: "Marzo 2026",
    verses: [
      "Miré a los ojos del mundo un jueves 19 entre guacherna y batalla de flores, en plena ciudad paralizada, con mi papá borracho y mi mamá con dolores, en un hospital moribundo del centro de la ciudad, digno de una novela de realismo mágico, casito que me ahogo dijo el médico",
      "y luego de 28 años lo mismo me representa, un país moribundo, a un día del desfile nocturno, mi papá borracho y mi mamá con dolores.",
      "Algunas cosas nunca cambian."
    ]
  },
  {
    slug: "brindis-por-tu-valentia",
    title: "Brindis por tu valentía",
    number: 2,
    preview: "Hoy invito un brindis por tu valentía,<br>por el fuego que llevas dentro,<br>porque ni el viento ni el frío te atan,<br>ni detienen tu aliento…",
    date: "Marzo 2026",
    verses: [
      "Hoy invito un brindis por tu valentía,\npor el fuego que llevas dentro,\nporque ni el viento ni el frío te atan,\nni detienen tu aliento.",
      "Hoy soy feliz de compartir contigo,\nde acompañarte en tus historias,\nabrazarte en tus luchas,\nser parte de tu abrigo.",
      "Eres un sol, un astro sin fin,\nhermosa, fuerte y gentil.\nY hoy, desde tu corazón\neres mil veces amor y revolución."
    ]
  },
  {
    slug: "caminemos",
    title: "Caminemos",
    number: 3,
    preview: "Caminemos más y volemos menos, pero caminemos lento,<br>viendo las flores, la gente,<br>las calles; pero caminemos,<br>no corramos, me canso…",
    date: "Marzo 2026",
    verses: [
      "Caminemos más y volemos menos, pero caminemos lento,\nviendo las flores, la gente,\nlas calles; pero caminemos,\nno corramos, me canso.",
      "Caminemos como quien no\ntiene adónde llegar, encontrando\nel destino en cada esquina\ny perdiéndolo al cruzar.",
      "Caminemos y, en el camino,\nescuchemos lo que dicen las aves:\nno hay destino\nadónde llegar."
    ]
  }
]

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find(essay => essay.slug === slug)
}

export function getPoemBySlug(slug: string): Poem | undefined {
  return poems.find(poem => poem.slug === slug)
}
