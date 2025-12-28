export interface Modality {
  id: string;
  title: string;
  heroImage: string;
  description: string;
  longDescription: string;
  benefits: string[];
  schedule: {
    weekdays: string;
    weekends?: string;
    notes?: string;
  };
  pricing: {
    name: string;
    price: string;
  }[];
  images: string[];
  features: string[];
  trainers: {
    name: string;
    specialty: string;
    experience: string;
    image?: string;
  }[];
  whatIs: string;
  whoIsFor: string[];
  intensity: string;
  duration: string;
}

export const modalitiesData: Record<string, Modality> = {
  'musculacao': {
    id: 'musculacao',
    title: "Musculação",
    heroImage: "/vid11.mp4",
    description: "Treino de força com equipamentos de última geração e acompanhamento profissional",
    longDescription: "A musculação é uma modalidade de treino de força que visa o desenvolvimento muscular através de exercícios com pesos livres, máquinas e equipamentos especializados. No nosso ginásio, oferecemos equipamentos de última geração e acompanhamento profissional personalizado para garantir os melhores resultados.",
    whatIs: "A musculação é uma atividade física que consiste no treino de força utilizando pesos, máquinas e equipamentos específicos para desenvolver a massa muscular, aumentar a força e melhorar a condição física geral.",
    whoIsFor: [
      "Iniciantes que querem começar no mundo do fitness",
      "Atletas experientes que buscam melhorar performance",
      "Pessoas que querem emagrecer e tonificar",
      "Quem busca melhorar a saúde óssea e postural",
      "Todos os níveis de condição física"
    ],
    intensity: "Moderada a Alta",
    duration: "45-90 minutos por sessão",
    benefits: [
      "Aumento da força muscular",
      "Melhoria da composição corporal",
      "Fortalecimento ósseo",
      "Aceleração do metabolismo",
      "Melhoria da postura",
      "Prevenção de lesões",
      "Aumento da autoestima"
    ],
    schedule: {
      weekdays: "05:00 - 23:00",
      weekends: "07:00 - 21:00",
      notes: "Acesso incluído em todos os planos"
    },
    pricing: [
      { name: "Aula Avulsa", price: "5.000 Kz" },
      { name: "Pacote 4 Aulas", price: "15.000 Kz" },
      { name: "Pacote 8 Aulas", price: "25.000 Kz" },
      { name: "Mensalidade", price: "Incluído nos planos" }
    ],
    images: [
      "/mus.jpg",
      "/gallery-1.jpg",
      "/gallery-2.jpg",
      "/gallery-3.jpg"
    ],
    features: [
      "Equipamentos Life Fitness",
      "Área de pesos livres",
      "Máquinas guiadas e não-guiadas",
      "Acompanhamento técnico",
      "Planos personalizados",
      "Área de functional training",
      "Vestiários completos"
    ],
    trainers: [
      {
        name: "Carlos Silva",
        specialty: "Personal Trainer",
        experience: "8 anos",
        image: "/trainer-1.jpg"
      },
      {
        name: "Maria Santos",
        specialty: "Especialista em Musculação",
        experience: "6 anos",
        image: "/trainer-2.jpg"
      }
    ]
  },
  'cross-fit': {
    id: 'cross-fit',
    title: "Cross Fit",
    heroImage: "/vid10.mp4",
    description: "Treino funcional de alta intensidade para melhorar todas as capacidades físicas",
    longDescription: "O CrossFit é um programa de treino de força e condicionamento físico que combina movimentos funcionais executados em alta intensidade. Desenvolve todas as capacidades físicas: resistência cardiovascular, resistência muscular, força, flexibilidade, potência, velocidade, coordenação, agilidade, equilíbrio e precisão.",
    whatIs: "O CrossFit é uma metodologia de treino que incorpora movimentos funcionais constantemente variados, executados em alta intensidade. É um programa completo que prepara o corpo para qualquer desafio físico.",
    whoIsFor: [
      "Pessoas que gostam de desafios",
      "Quem busca variedade nos treinos",
      "Atletas que querem condicionamento completo",
      "Quem prefere treinos em grupo",
      "Pessoas com boa base física"
    ],
    intensity: "Alta",
    duration: "60 minutos por sessão",
    benefits: [
      "Condicionamento físico completo",
      "Melhoria da capacidade cardiovascular",
      "Aumento da força e resistência",
      "Queima calórica acelerada",
      "Desenvolvimento da coordenação motora",
      "Trabalho em equipa motivador",
      "Resultados rápidos e visíveis"
    ],
    schedule: {
      weekdays: "06:00 - 22:00",
      weekends: "08:00 - 20:00",
      notes: "Aulas em grupo com horários fixos"
    },
    pricing: [
      { name: "Aula Experimental", price: "Grátis" },
      { name: "Pacote 8 Aulas", price: "25.000 Kz" },
      { name: "Pacote 16 Aulas", price: "45.000 Kz" },
      { name: "Aula Avulsa", price: "7.000 Kz" }
    ],
    images: [
      "/gallery-3.jpg",
      "/crossfit-1.jpg",
      "/crossfit-2.jpg",
      "/crossfit-3.jpg"
    ],
    features: [
      "WODs (Workout of the Day) variados",
      "Equipamento especializado",
      "Aulas em grupo",
      "Coaches certificados",
      "Área functional training",
      "Competições internas",
      "Acompanhamento progressivo"
    ],
    trainers: [
      {
        name: "Ana Rodrigues",
        specialty: "CrossFit Level 2",
        experience: "6 anos",
        image: "/trainer-2.jpg"
      },
      {
        name: "Pedro Costa",
        specialty: "CrossFit Coach",
        experience: "4 anos",
        image: "/trainer-4.jpg"
      }
    ]
  },
  'jiu-jitsu-brasileiro': {
    id: 'jiu-jitsu-brasileiro',
    title: "Jiu-Jitsu Brasileiro",
    heroImage: "/vid12.mp4",
    description: "Arte marcial brasileira que desenvolve técnica, disciplina e condicionamento físico",
    longDescription: "O Jiu-Jitsu Brasileiro é uma arte marcial que se concentra no combate de agarramento e no chão. Utiliza alavancas e técnicas de submissão para permitir que um praticante menor e mais fraco possa se defender com sucesso de um oponente maior e mais forte através da técnica adequada.",
    whatIs: "O Jiu-Jitsu Brasileiro (BJJ) é uma arte marcial, desporto de combate e sistema de autodefesa focado no grappling e especialmente na luta de chão. Desenvolvido no Brasil, é conhecido como 'a arte suave'.",
    whoIsFor: [
      "Todos que querem aprender autodefesa",
      "Pessoas interessadas em artes marciais",
      "Quem busca disciplina mental",
      "Crianças a partir dos 6 anos",
      "Homens e mulheres de todas as idades"
    ],
    intensity: "Moderada a Alta",
    duration: "90-120 minutos por sessão",
    benefits: [
      "Autodefesa eficiente",
      "Condicionamento físico completo",
      "Desenvolvimento da disciplina",
      "Aumento da confiança",
      "Melhoria da coordenação motora",
      "Redução do stress",
      "Trabalho mental estratégico"
    ],
    schedule: {
      weekdays: "18:00 - 20:00 (Seg/Qua/Sex)",
      weekends: "10:00 - 12:00 (Sábado)",
      notes: "Turmas separadas por faixas etárias e níveis"
    },
    pricing: [
      { name: "Aula Experimental", price: "Grátis" },
      { name: "Mensalidade Adulto", price: "20.000 Kz" },
      { name: "Mensalidade Infantil", price: "12.000 Kz" },
    ],
    images: [
      "/bjj.jpg",
      "/bjj.jpg",
      "/bjj.jpg",
      "/bjj.jpg"
    ],
    features: [
      "Professores faixa-preta",
      "Turmas por nível técnico",
      "Área específica para BJJ",
      "Participação em competições",
      "Metodologia graduada",
      "Aulas para crianças e adultos",
      "Sistema de faixas"
    ],
    trainers: [
      {
        name: "Abraão ",
        specialty: "Faixa Marrom",
        experience: "15 anos",
        image: "/trainer-3.jpg"
      },
      {
        name: "Miguel Costa",
        specialty: "Faixa Preta",
        experience: "8 anos",
        image: "/trainer-5.jpg"
      }
    ]
  },
  'kick-boxing': {
    id: 'kick-boxing',
    title: "Kick Boxing",
    heroImage: "/vid3.mp4",
    description: "Combina técnicas de boxe e artes marciais para um treino completo e dinâmico",
    longDescription: "O Kickboxing é um desporto de combate que combina técnicas de boxe com chutes das artes marciais. Oferece um treino cardiovascular intenso enquanto ensina técnicas de autodefesa eficazes.",
    whatIs: "O Kickboxing é uma arte marcial e desporto de combate que combina os socos do boxe com os chutes das artes marciais como o Karaté e Muay Thai. É excelente para condicionamento físico e autodefesa.",
    whoIsFor: [
      "Quem busca um treino cardiovascular intenso",
      "Pessoas interessadas em autodefesa",
      "Atletas que querem melhorar condicionamento",
      "Quem gosta de artes marciais",
      "Todos os níveis de experiência"
    ],
    intensity: "Alta",
    duration: "60-75 minutos por sessão",
    benefits: [
      "Excelente condicionamento cardiovascular",
      "Queima calórica elevada",
      "Melhoria da coordenação motora",
      "Aprendizado de autodefesa",
      "Alívio do stress",
      "Fortalecimento muscular",
      "Aumento dos reflexos"
    ],
    schedule: {
      weekdays: "18:00 - 20:00 (Seg/Qua)",
      weekends: "09:00 - 11:00 (Sábado)",
      notes: "Equipamento básico fornecido para iniciantes"
    },
    pricing: [
      { name: "Aula Experimental", price: "Grátis" },
      { name: "Mensalidade 2x semana", price: "18.000 Kz" },
      { name: "Mensalidade 3x semana", price: "25.000 Kz" },
      { name: "Aula Avulsa", price: "6.000 Kz" }
    ],
    images: [
      "/kickboxing.jpg",
      "/kickboxing-1.jpg",
      "/kickboxing-2.jpg",
      "/kickboxing-3.jpg"
    ],
    features: [
      "Aulas técnicas e de sparring",
      "Equipamento profissional",
      "Instrutores certificados",
      "Treino com sacos e pads",
      "Técnicas de defesa pessoal",
      "Preparação física específica",
      "Ambiente seguro e controlado"
    ],
    trainers: [
      {
        name: "Ricardo Almeida",
        specialty: "Instrutor de Kickboxing",
        experience: "10 anos",
        image: "/trainer-6.jpg"
      }
    ]
  },
  'judo': {
    id: 'judo',
    title: "Judo",
    heroImage: "/vid6.mp4",
    description: "Arte marcial tradicional que desenvolve força, equilíbrio e autodisciplina",
    longDescription: "O Judo é uma arte marcial japonesa que se concentra em projeções, imobilizações e técnicas de controlo no solo. Desenvolvido a partir do Jiu-Jitsu, o Judo enfatiza o uso eficiente da energia e o desenvolvimento pessoal.",
    whatIs: "O Judo, que significa 'caminho suave', é uma arte marcial japonesa criada por Jigoro Kano em 1882. É um desporto olímpico que foca no uso da força do oponente contra ele mesmo.",
    whoIsFor: [
      "Crianças a partir dos 4 anos",
      "Jovens e adultos de todas as idades",
      "Quem busca disciplina e valores marciais",
      "Pessoas interessadas em desporto olímpico",
      "Todos que querem desenvolver autocontrolo"
    ],
    intensity: "Moderada a Alta",
    duration: "90 minutos por sessão",
    benefits: [
      "Desenvolvimento físico completo",
      "Melhoria do equilíbrio e coordenação",
      "Aumento da força e flexibilidade",
      "Desenvolvimento da disciplina",
      "Aprendizado de valores marciais",
      "Melhoria da concentração",
      "Autodefesa eficaz"
    ],
    schedule: {
      weekdays: "20:00 - 22:00 (Seg/Qua)",
      weekends: "11:00 - 13:00 (Sábado)",
      notes: "Turmas separadas por idade e nível técnico"
    },
    pricing: [
      { name: "Aula Experimental", price: "Grátis" },
      { name: "Mensalidade Infantil", price: "12.000 Kz" },
      { name: "Mensalidade Adulto", price: "18.000 Kz" },
      { name: "Pacote Familiar", price: "45.000 Kz" }
    ],
    images: [
      "/judo.jpg",
      "/judo-1.jpg",
      "/judo-2.jpg",
      "/judo-3.jpg"
    ],
    features: [
      "Professores graduados",
      "Sistema de faixas oficial",
      "Área específica com tatami",
      "Competições internas e externas",
      "Metodologia para crianças",
      "Valores morais e éticos",
      "Preparação para exames de faixa"
    ],
    trainers: [
      {
        name: "Sensei Antonio Lima",
        specialty: "2° Dan de Judo",
        experience: "12 anos",
        image: "/trainer-7.jpg"
      }
    ]
  },
  'zona-cardio': {
    id: 'zona-cardio',
    title: "Zona Cardio",
    heroImage: "/vid12.mp4",
    description: "Área completa com equipamentos modernos para melhorar a sua resistência cardiovascular",
    longDescription: "A nossa zona cardio está equipada com os mais modernos equipamentos para treino cardiovascular. Ideal para melhorar a resistência, queimar calorias e fortalecer o sistema cardiovascular.",
    whatIs: "A Zona Cardio é uma área especializada do ginásio dedicada ao treino cardiovascular, com equipamentos que visam melhorar a saúde do coração, pulmões e sistema circulatório.",
    whoIsFor: [
      "Iniciantes no fitness",
      "Pessoas em processo de emagrecimento",
      "Atletas que precisam de condicionamento",
      "Quem busca melhorar saúde cardiovascular",
      "Todos os níveis de condição física"
    ],
    intensity: "Personalizável",
    duration: "20-60 minutos por sessão",
    benefits: [
      "Melhoria da saúde cardiovascular",
      "Queima eficiente de calorias",
      "Aumento da capacidade pulmonar",
      "Redução do risco de doenças cardíacas",
      "Melhoria do humor e energia",
      "Aceleração do metabolismo",
      "Alívio do stress"
    ],
    schedule: {
      weekdays: "05:00 - 23:00",
      weekends: "07:00 - 21:00",
      notes: "Acesso livre incluído em todos os planos"
    },
    pricing: [
      { name: "Acesso Diário", price: "3.000 Kz" },
      { name: "Pacote 10 Acessos", price: "25.000 Kz" },
      { name: "Mensalidade", price: "Incluído nos planos" }
    ],
    images: [
      "/cardio.jpg",
      "/cardio-1.jpg",
      "/cardio-2.jpg",
      "/cardio-3.jpg"
    ],
    features: [
      "Esteiras profissionais",
      "Bicicletas elípticas",
      "Escadas climáticas",
      "Bicicletas horizontais e verticais",
      "Remo ergómetros",
      "Monitores cardíacos",
      "Programas de treino variados"
    ],
    trainers: [
      {
        name: "Monitor de Cardio",
        specialty: "Acompanhamento Técnico",
        experience: "Sempre disponível",
        image: "/trainer-8.jpg"
      }
    ]
  }
};