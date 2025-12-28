import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Metadados
export const metadata: Metadata = {
  title: {
    default: 'Ginásio (sua marca) Luanda - O Melhor Ginásio de Luanda',
    template: '%s | Ginásio (sua marca) Luanda'
  },
  description: 'O melhor ginásio de Luanda para transformar o teu corpo e alcançar os teus objetivos de fitness. Equipamentos modernos, treinos personalizados e resultados garantidos.',
  keywords: ['ginásio', 'luanda', 'fitness', 'musculação', 'crossfit', 'jiu-jitsu', 'treino'],
  authors: [{ name: 'Ginásio (sua marca) Luanda' }],
  creator: 'Ginásio (sua marca) Luanda',
  metadataBase: new URL('https://tu-dominio.vercel.app'), // ← ADICIONA O TEU DOMÍNIO AQUI
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://tu-dominio.vercel.app',
    siteName: 'Ginásio (sua marca) Luanda',
    title: 'Ginásio (sua marca) Luanda - O Melhor Ginásio de Luanda',
    description: 'Transforma o teu corpo no melhor ginásio de Luanda. Equipamentos modernos, treinos personalizados e resultados garantidos.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ginásio (sua marca) Luanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginásio (sua marca) Luanda - O Melhor Ginásio de Luanda',
    description: 'Transforma o teu corpo no melhor ginásio de Luanda.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // REMOVE viewport e themeColor daqui
}

// Viewport - MOVER PARA AQUI
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#dc2626', // Cor vermelha do teu site
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-AO">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}