import { Header } from '@/components/ui/header'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* Vídeo de Fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/gym.jpg" // Imagem de fallback
        >
          <source src="/vid10.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback para browsers que não suportam vídeo */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('gym.jpg')" }}
          />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <Header />
          
          <div className="mx-auto mt-16 max-w-7xl text-center lg:mt-32">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Transforma o Teu <span>Corpo</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
              O melhor ginásio de Luanda para alcançares os teus objetivos de fitness. 
              Equipamentos modernos, treinos personalizados e resultados garantidos.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="transform rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black sm:text-lg">
            <Link
            href="#about"
              rel="noopener noreferrer"
              className="transform rounded-full bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
            >
              Ver mais
            </Link>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative bg-black py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/10" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              O Nosso <span >Ginásio</span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                A Nossa Missão
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Somos o ginásio líder em Luanda, dedicado a transformar vidas através do fitness 
                e bem-estar. Com mais de 5 anos de experiência, oferecemos um ambiente motivador 
                e profissional onde cada membro pode alcançar os seus objetivos de forma segura e eficaz.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Contamos com uma equipa de personal trainers certificados, equipamentos de última 
                geração e uma variedade de modalidades que se adaptam a todos os níveis de condição física. 
                O teu sucesso é a nossa prioridade.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">200+</div>
                  <div className="text-sm text-gray-400 sm:text-base">Membros Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">5</div>
                  <div className="text-sm text-gray-400 sm:text-base">Modalidades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">5</div>
                  <div className="text-sm text-gray-400 sm:text-base">Anos Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 sm:text-3xl">24/7</div>
                  <div className="text-sm text-gray-400 sm:text-base">Horário</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  ),
                  title: "Equipamentos Premium",
                  description: "Máquinas e equipamentos de última geração para treinos completos."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  title: "Trainers Qualificados",
                  description: "Personal trainers certificados para te guiar nos teus objetivos."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Horários Flexíveis",
                  description: "Aberto 24/7 para se adequar à tua rotina e estilo de vida."
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Resultados Garantidos",
                  description: "Planos personalizados com acompanhamento para resultados reais."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="transform rounded-lg border border-red-500/20 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 sm:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 sm:mb-4 sm:h-12 sm:w-12">
                    <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-white sm:text-xl">{feature.title}</h4>
                  <p className="text-sm text-gray-400 sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
    <section id="modalities" className="relative bg-black py-20">
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-black to-red-900/5 pointer-events-none"></div>
  
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Nossas <span>Modalidades</span>
      </h2>
      <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
        Descubra as modalidades mais procuradas e transforme o seu treino numa experiência única
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          image: "/gi.jpeg",
          title: "Musculação",
          description: "Treino de força com equipamentos de última geração e acompanhamento profissional",
          features: ["Equipamentos premium", "Planos personalizados", "Acompanhamento técnico"],
          schedule: "Seg-Sex: 05:00-22:00",
          slug: "musculacao",
        },
        {
          image: "/cardio.avif",
          title: "Cross Fit",
          description: "Treino funcional de alta intensidade para melhorar todas as capacidades físicas",
          features: ["Treinos variados", "Alta intensidade", "Resultados rápidos"],
          schedule: "Seg-Sex: 06:00-22:00",
          slug: "cross-fit"
        },
        {
          image: "/cardio3.jpg",
          title: "Zona Cardio",
          description: "Área completa com equipamentos modernos para melhorar a sua resistência cardiovascular",
          features: ["Esteiras profissionais", "Bicicletas elípticas", "Escadas climáticas"],
          schedule: "Seg-Dom: 05:00-23:00",
          slug: "zona-cardio",
        },
        
        // {
        //   image: "/galley-1.jpg",
        //   title: "Jiu-Jitsu Brasileiro",
        //   description: "Arte marcial brasileira que desenvolve técnica, disciplina e condicionamento físico",
        //   features: ["Aulas para todos os níveis", "Professores certificados", "Competições"],
        //   schedule: "Seg/Qua/Sex: 18:00-20:00",
        //   slug: "jiu-jitsu-brasileiro"
        // },
        // {
        //   image: "/galley-1.jpg",
        //   title: "Kick Boxing",
        //   description: "Combina técnicas de boxe e artes marciais para um treino completo e dinâmico",
        //   features: ["Condicionamento físico", "Técnica de defesa", "Aulas em grupo"],
        //   schedule: "Seg/Qua: 18:00-20:00",
        //   slug: "kick-boxing",
        // },
        // {
        //   image: "/galley-1.jpg",
        //   title: "Judo",
        //   description: "Arte marcial tradicional que desenvolve força, equilíbrio e autodisciplina",
        //   features: ["Técnicas de projeção", "Trabalho de solo", "Valores marciais"],
        //   schedule: "Seg/Qua: 20:00-22:00",
        //   slug: "judo",
        // }
      ].map((modality, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-black/80 to-red-900/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={modality.image}
              alt={modality.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-red-600/0 transition-all duration-500 group-hover:bg-red-600/10"></div>
            
            {/* Badge */}
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {modality.schedule.split('|')[0].trim()}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6">
            <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
              {modality.title}
            </h3>
            
            <p className="mb-4 text-gray-300 leading-relaxed">
              {modality.description}
            </p>

            {/* Features */}
            <ul className="mb-4 space-y-2">
              {modality.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                  <svg
                    className="mr-2 h-4 w-4 flex-shrink-0 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Schedule */}
            <div className="mt-4 flex items-center justify-between border-t border-red-500/20 pt-4">
              <div className="flex items-center text-xs text-gray-400">
                <svg
                  className="mr-1 h-4 w-4 text-red-500"
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
                <span>{modality.schedule}</span>
              </div>
              
              <Link
              href={`/modalities/${modality.slug.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-red-700"
              >
                Saber Mais
                </Link>

            </div>
            
          </div>
          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 transition-all duration-500 group-hover:from-red-600/10 group-hover:via-red-600/5 group-hover:to-red-600/10 pointer-events-none"></div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-red-900/10" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Planos e <span>Preços</span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
            <p className="mt-6 text-lg text-gray-400">
              Escolhe o plano que melhor se adapta aos teus objetivos e orçamento
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Básico",
                price: "15.000",
                period: "mês",
                popular: false,
                features: [
                  "Acesso à zona de musculação",
                  "Acesso à zona cardio",
                  "Horário: 05:00 - 23:00",
                  "Aulas de grupo inclusas",
                  "Avaliação física inicial",
                  "App de treino básico"
                ],
                excluded: ["Acesso 24/7", "Personal trainer", "Aulas especiais"]
              },
              {
                name: "Premium",
                price: "25.000",
                period: "mês",
                popular: true,
                features: [
                  "Todos os benefícios do plano Básico",
                  "Acesso 24/7",
                  "2 sessões com personal trainer",
                  "Acesso a todas as modalidades",
                  "Plano de treino personalizado",
                  "App de treino premium",
                  "Avaliação física mensal"
                ],
                excluded: ["Aulas particulares"]
              },
              {
                name: "Elite",
                price: "45.000",
                period: "mês",
                popular: false,
                features: [
                  "Todos os benefícios do plano Premium",
                  "Sessões ilimitadas com personal trainer",
                  "Aulas particulares inclusas",
                  "Plano nutricional personalizado",
                  "Acompanhamento contínuo",
                  "Acesso prioritário a equipamentos",
                  "Convites para eventos especiais",
                  "Área VIP exclusiva"
                ],
                excluded: []
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-red-500/50 bg-gradient-to-br from-red-600/20 to-red-800/20 scale-105"
                    : "border-red-500/20 bg-gradient-to-br from-red-600/10 to-red-800/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -right-12 top-8 rotate-45 bg-red-600 px-12 py-1 text-sm font-semibold text-white">
                    Mais Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price} Kz</span>
                      <span className="ml-2 text-gray-400">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.excluded.map((excluded, excludedIndex) => (
                      <li key={excludedIndex} className="flex items-center text-gray-500">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="ml-3">{excluded}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full transform rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      plan.popular
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "border border-red-500/30 bg-red-600/20 text-white backdrop-blur-sm hover:bg-red-600/40"
                    }`}
                  >
                    <Link 
                    href={`https://wa.me/244seu contacto aqui?text=Olá! Gostaria de assinar o plano ${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"> Escolher Plano</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* FAQ Section */}
<section id="faq" className="relative bg-black py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-red-900/10" />
  
  <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Perguntas <span>Frequentes</span>
      </h2>
      <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
        Encontre respostas para as dúvidas mais comuns
      </p>
    </div>

    <div className="space-y-4">
      {[
        {
          question: "Qual é a idade mínima para me inscrever?",
          answer: "Aceitamos membros a partir dos 16 anos. Menores de idade precisam de autorização dos pais ou responsáveis. Temos programas específicos para jovens que focam no desenvolvimento físico saudável e seguro."
        },
        {
          question: "Os planos incluem acompanhamento nutricional?",
          answer: "O plano Elite inclui acompanhamento nutricional completo com consultas mensais. Para os planos Básico e Premium, oferecemos consultas opcionais com a nossa nutricionista a preços especiais para membros."
        },
        {
          question: "Posso congelar a minha mensalidade?",
          answer: "Sim, oferecemos a opção de congelamento por até 3 meses por ano, mediante apresentação de justificação médica ou profissional. Basta contactar a nossa receção com 15 dias de antecedência."
        },
        {
          question: "O ginásio tem estacionamento?",
          answer: "Sim, temos estacionamento gratuito e seguro para todos os nossos membros. O parque de estacionamento é vigiado 24 horas e possui mais de 50 lugares disponíveis."
        },
        {
          question: "Que equipamentos estão disponíveis?",
          answer: "Contamos com equipamentos de última geração: máquinas de musculação Life Fitness, área cardio completa com esteiras, bicicletas e elípticas, pesos livres, área de functional training e espaço dedicado para artes marciais."
        },
        {
          question: "Posso experimentar antes de me inscrever?",
          answer: "Claro! Oferecemos uma aula experimental gratuita onde podes conhecer as instalações, equipamentos e falar com os nossos instrutores. Marca a tua aula através do WhatsApp ou diretamente na receção."
        },
        {
          question: "O ginásio está aberto aos fins de semana?",
          answer: "Sim, estamos abertos de segunda a sexta das 05:00 às 23:00 e aos fins de semana (sábado e domingo) das 07:00 às 21:00. Temos horário alargado para se adaptar à tua rotina."
        }
      ].map((faq, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-red-500/20 bg-gradient-to-r from-black/80 to-red-900/10 backdrop-blur-sm transition-all duration-300 hover:border-red-500/40"
        >
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-semibold text-white transition-colors duration-300 hover:text-red-400 lg:text-xl">
              {faq.question}
              <svg 
                className="h-6 w-6 flex-shrink-0 text-red-400 transition-transform duration-300 group-open:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="border-t border-red-500/20 px-6 pb-6 pt-4">
              <p className="text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="relative border-t border-red-500/20 bg-black" id="footer">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <img
                  src="logo.jp"
                  alt=" Logo"
                  className="h-12 w-12 text-white rounded-full border-2 border-red-500/30"
                />
                <h3 className="text-xl font-bold text-white">Ginásio (sua marca) Luanda</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                O melhor ginásio de Luanda para transformar o teu corpo e alcançar os teus objetivos 
                de fitness com equipamentos modernos e treinos personalizados.
              </p>
              
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/(sua marca).fitnessgym/"
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
                  href="malito:(sua marca)fitness@gmail.com"
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
                  href="https://web.facebook.com/(sua marca)FitnessGym"
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
                    href="https://wa.me/244seu contacto aqui?text=Olá! Gostaria de marcar uma aula experimental."
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
                  {['Início', 'Sobre Nós', 'Modalidades', 'Planos e Preços'].map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-400 sm:text-base"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
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
                    //{ name: 'Judo', slug: 'judo' },
                    //{ name: 'Kick Boxing', slug: 'kick-boxing' },
                    //{ name: 'Jiu-Jitsu Brasileiro', slug: 'jiu-jitsu-brasileiro' },
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
                    href="tel:+244seu contacto aqui"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    seu contacto aqui
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
                      {/*<strong>Seg-Sex:</strong> 
                      <br />
                      <strong>Fins de Semana:</strong> 07:00 - 21:00*/}
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
                © 2024 Ginásio (sua marca) Luanda. Todos os direitos reservados.
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