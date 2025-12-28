'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Fechar menu
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Prevenir scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Função para gerar links que funcionam em qualquer página
  const getLinkHref = (section: string) => {
    if (pathname === '/') {
      // Se estamos na página inicial, usa âncoras
      return section === 'home' ? '#' : `#${section}`
    } else {
      // Se estamos em outra página, redireciona para a página inicial com âncora
      return section === 'home' ? '/' : `/#${section}`
    }
  }

  return (
    <>
      <header className="flex items-center justify-between">        
        <div className="flex items-center">
          <Link href="/logo.png">
            <img
              src=""
              alt=" A sua Logo"
              className="h-16 w-16  text-white rounded-full border-2 border-red-500/30 shadow-lg transition-all duration-300 hover:border-red-500/60 md:h-20 md:w-20"
            />
          </Link>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href={getLinkHref('home')}
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Início
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={getLinkHref('about')}
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Sobre Nós
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={getLinkHref('modalities')}
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Modalidades
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={getLinkHref('pricing')}
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Planos
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={getLinkHref('footer')}
            className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
          >
            Contacto
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Link
              href="https://wa.me/244924010504?text=Olá! Gostaria de marcar uma aula experimental."
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full border border-red-500/20 bg-red-600/90 px-6 py-2 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
            >
              Inscreve-te Já
            </Link>
          </div>

          {/* Botão Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="relative z-30 p-2 text-white focus:outline-none md:hidden"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12' // X para fechar
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Conteúdo do Menu */}
        <div className="flex h-full flex-col items-center justify-center space-y-8 px-6">
          <Link
            href={getLinkHref('home')}
            onClick={closeMenu}
            className="text-2xl font-medium text-white transition-all duration-300 hover:text-red-400 hover:scale-105"
          >
            Início
          </Link>
          <Link
            href={getLinkHref('about')}
            onClick={closeMenu}
            className="text-2xl font-medium text-white transition-all duration-300 hover:text-red-400 hover:scale-105"
          >
            Sobre Nós
          </Link>
          <Link
            href={getLinkHref('modalities')}
            onClick={closeMenu}
            className="text-2xl font-medium text-white transition-all duration-300 hover:text-red-400 hover:scale-105"
          >
            Modalidades
          </Link>
          <Link
            href={getLinkHref('pricing')}
            onClick={closeMenu}
            className="text-2xl font-medium text-white transition-all duration-300 hover:text-red-400 hover:scale-105"
          >
            Planos
          </Link>
          <Link
            href={getLinkHref('footer')}
            onClick={closeMenu}
            className="text-2xl font-medium text-white transition-all duration-300 hover:text-red-400 hover:scale-105"
          >
            Contacto
          </Link>
          
          <div className="pt-4">
            <Link
              href="https://wa.me/244924010504?text=Olá! Gostaria de marcar uma aula experimental."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="transform rounded-full bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
            >
              Inscreve-te Já
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}