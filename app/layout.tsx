import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500']
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '600'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Ruido Contracultural',
  description: 'Un archivo personal de escritura y reflexión cultural. Notas, ensayos y poemas sobre la vida cultural contemporánea.',
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased bg-warm-white text-text`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
