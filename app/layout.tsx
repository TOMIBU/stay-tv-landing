import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StayTV - Tu TV como asistente de huéspedes',
  description: 'Convierte tus televisores en herramientas para mejorar la experiencia de los huéspedes.',
  keywords: ['StayTV', 'TV inteligente', 'alquiler turístico', 'huéspedes'],
  authors: [{ name: 'StayTV', url: 'https://staytv.app' }],
  generator: 'v0.dev',

  openGraph: {
    title: 'StayTV - Tu TV como asistente de huéspedes',
    description: 'Transforma la experiencia de tus huéspedes con StayTV.',
    url: 'https://staytv.app',
    siteName: 'StayTV',
    images: [
      {
        url: 'https://staytv.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portada StayTV',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StayTV - Tu TV como asistente de huéspedes',
    description: 'Convierte tu televisor en una herramienta para mejorar la experiencia de tus huéspedes.',
    images: ['https://staytv.app/og-image.jpg'],
  },
  metadataBase: new URL('https://staytv.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
