import { Header } from '@/components/ui/header'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { modalitiesData } from '@/lib/modality-datas'
import { Metadata } from 'next'
interface PageProps {
  params: {
    slug: string
  }
}

export default async function ModalityPage({ params }: PageProps) {
  const {slug} = await params
  const modality = modalitiesData[slug]

  if (!modality) {
    notFound()
  }

  return (
    <>
      {/* Hero Section da Modalidade */}
      <main className="relative min-h-[70vh] w-full bg-black overflow-hidden">
        <div className="absolute inset-0">

          <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/gym1-4.jpg" // Imagem de fallback
        >
          <source src={modality.heroImage} type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback para browsers que não suportam vídeo */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gallery-4.jpg')" }}
          />
        </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <Header />
          
          <div className="mx-auto mt-20 max-w-7xl text-center lg:mt-32">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {modality.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
              {modality.description}
            </p>
          </div>
        </div>
      </main>

      {/* Conteúdo da Modalidade */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            
            {/* Coluna Esquerda - Informações Principais */}
            <div className="space-y-12">
              
              {/* O que é */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                  O que é {modality.title}?
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  {modality.whatIs}
                </p>
              </div>

              {/* Para quem é */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-white">Para quem é ideal?</h3>
                <div className="grid gap-3">
                  {modality.whoIsFor.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefícios */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-white">Benefícios Principais</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {modality.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 mt-1 flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            <div className="space-y-8">

              {/* Cartão de Informações - SEM BACKGROUND */}
              <div className="rounded-2xl border border-red-500/20 bg-black/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-white">Informações Práticas</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
                    <span className="text-gray-300">Intensidade:</span>
                    <span className="font-semibold text-white">{modality.intensity}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
                    <span className="text-gray-300">Duração:</span>
                    <span className="font-semibold text-white">{modality.duration}</span>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="mb-3 font-semibold text-white">Horários:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Segunda a Sexta:</span>
                        <span className="font-semibold text-white">{modality.schedule.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Fim de Semana:</span>
                        <span className="font-semibold text-white">{modality.schedule.weekends}</span>
                      </div>
                      {modality.schedule.notes && (
                        <p className="mt-3 text-sm text-gray-400 bg-red-500/10 p-2 rounded-lg">
                          {modality.schedule.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Preçário - SEM BACKGROUND */}
              <div className="rounded-2xl border border-red-500/20 bg-black/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-white">Preçário</h3>
                <div className="space-y-4">
                  {modality.pricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-red-500/20 pb-3">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="font-semibold text-white text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-full bg-red-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700 text-lg">
                  <Link
                  href="https://wa.me/244924010504?text=Olá! Gostaria de marcar uma aula experimental."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform rounded-full border border-red-500/20 bg-red-600/90 px-6 py-2 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
                  >
                    Começar Agora
                    </Link>
                    </button>
              </div>

              {/* Instrutores - SEM BACKGROUND */}
              <div className="rounded-2xl border border-red-500/20 bg-black/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-white">Nossos Instrutores</h3>
                <div className="space-y-4">
                  {modality.trainers.map((trainer, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-red-500/5">
                      <div className="h-14 w-14 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/30">
                        <span className="text-red-400 font-bold text-sm">
                          {trainer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{trainer.name}</h4>
                        <p className="text-sm text-gray-400">{trainer.specialty}</p>
                        <p className="text-xs text-gray-500">{trainer.experience} de experiência</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - AGORA FORA DA SECTION E NO FINAL DA PÁGINA */}
      <footer className="relative border-t border-red-500/20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <img
                  src="/"
                  alt="Logo Ginásio"
                  className="h-12 w-12 rounded-full text-white border-2 border-red-500/30"
                />
                <h3 className="text-xl font-bold text-white">Ginásio (sua marca aqui) Luanda</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                O melhor ginásio de Luanda para transformar o teu corpo e alcançar os teus objetivos 
                de fitness com equipamentos modernos e treinos personalizados.
              </p>
              
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/(sua marca aqui).fitnessgym/"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5zm5-1.25a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
                <Link
                  href="malito:(sua marca aqui)fitness@gmail.com"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                </Link>
                <Link
                  href="malito:(sua marca aqui)fitness@gmail.com"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
                  </svg>
                </Link>
                <Link
                    href="https://wa.me/244924010504?text=Olá! Gostaria de marcar uma aula experimental."
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0a11.77 11.77 0 0 0-10 18.2L0 24l5.94-1.56A11.76 11.76 0 1 0 20.52 3.48zM12 21.46a9.43 9.43 0 0 1-4.8-1.31l-.34-.2-3.52.93.94-3.43l-.22-.35A9.46 9.46 0 1 1 12 21.46zm5.32-7.17c-.29-.15-1.72-.85-1.98-.95s-.46-.15-.65.15s-.75.95-.92 1.15s-.34.22-.63.07a7.68 7.68 0 0 1-2.26-1.39a8.37 8.37 0 0 1-1.55-1.93c-.16-.27 0-.42.12-.57s.27-.34.41-.51a1.91 1.91 0 0 0 .27-.46a.49.49 0 0 0-.02-.46c-.07-.15-.65-1.57-.9-2.16s-.47-.5-.65-.51h-.56a1.09 1.09 0 0 0-.79.37a3.29 3.29 0 0 0-1.03 2.43a5.73 5.73 0 0 0 1.2 3.02a13.15 13.15 0 0 0 5 4.57a16.58 16.58 0 0 0 1.6.59a3.86 3.86 0 0 0 1.78.11a2.93 2.93 0 0 0 2-1.42a2.46 2.46 0 0 0 .17-1.42c-.07-.13-.26-.21-.55-.36z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#modalities"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Modalidades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#pricing"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                    >
                      Planos e Preços
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Modalities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Modalidades</h4>
              <nav>
                <ul className="space-y-2">
                  {[
                    { name: 'Musculação', slug: 'musculacao' },
                    { name: 'Zona-cardio', slug: 'zona-cardio' },
                    { name: 'CrossFit', slug: 'cross-fit' },
                    // { name: 'Judo', slug: 'judo' },
                    // { name: 'Kick Boxing', slug: 'kick-boxing' },
                    // { name: 'Jiu-Jitsu Brasileiro', slug: 'jiu-jitsu-brasileiro' },

                  ].map((modalityItem) => (
                    <li key={modalityItem.slug}>
                      <Link
                        href={`/modalities/${modalityItem.slug}`}
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                      >
                        {modalityItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contactos</h4>
              <address className="space-y-4 not-italic">
                <div className="flex items-start space-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400">
                      Seu endereço aqui
                      <br />
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    href="tel:+244924010504"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    Seu contacto aqui
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400">
                      Horarios aqui
{/* {                      <strong>Seg-Sex:</strong> 05:00 - 23:00
                      <br />
                      <strong>Fins de Semana:</strong> 07:00 - 21:00} */}
                    </p>
                  </div>
                </div>
              </address>
            </div>
          </div>
          {/* Bottom */}
          <div className="mt-8 border-t border-red-500/20 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <p className="text-center text-sm text-gray-400 sm:text-left">
                © 2024 Ginásio (sua marca aqui) Luanda. Todos os direitos reservados.
              </p>
              <nav>
                <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                  {['Política de Privacidade', 'Termos de Uso', 'Cookies'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// Geração de páginas estáticas
export async function generateStaticParams() {
  return Object.keys(modalitiesData).map((slug) => ({
    slug: slug,
  }))
}

export  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug} = await params
  const modality = modalitiesData[slug]
  
  if (!modality) {
    return {
      title: 'Modalidade Não Encontrada - Ginásio (sua marca aqui) Luanda',
      description: 'A modalidade que procuras não existe.',
    }
  }

  return {
    title: `${modality.title} - Ginásio (sua marca aqui) Luanda`,
    description: modality.description,
    openGraph: {
      title: `${modality.title} - Ginásio (sua marca aqui) Luanda`,
      description: modality.description,
      images: [modality.heroImage],
    },
  }
}