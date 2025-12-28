import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página Não Encontrada - Ginásio AJ Luanda',
  description: 'A página que procuras não existe.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-8">
          Página Não Encontrada
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">
          A página que procuras não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700"
        >
          Voltar à Página Inicial
        </Link>
      </div>
    </div>
  )
}