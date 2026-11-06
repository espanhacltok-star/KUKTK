/**
 * config.js - Conteúdo Variável do Site de Luxo de Harmonização Facial
 * Documento de configuração individual por profissional: Dra. Daniella Meireles
 */

export const SITE = {
  doutora: {
    nome: 'Dra. Daniella Meireles',
    titulo: 'Cirurgiã-dentista | CROBA 24115',
    slogan: '🪞 Estética que respeita a sua essência',
    formacao: 'Especialista e Mestranda em Harmonização Facial (SL Mandic)',
    cidade: 'Salvador - BA',
    registro: 'CROBA 24115',
    instagram: 'dra.daniellameireles',
    instagramUrl: 'https://www.instagram.com/dra.daniellameireles/',
    whatsapp: '557191074723',
    telefone: '+55 71 9107-4723'
  },
  hero: {
    titulo: 'Seu rosto, na sua melhor <span class="hero-gold-script">versão.</span>',
    subtitulo: 'Harmonização facial para realçar o que já é seu: proporção, frescor e naturalidade. 🪞 Estética que respeita a sua essência. Cada plano nasce de uma avaliação individual com a Dra. Daniella Meireles.',
    cards: ['Estética que respeita sua essência', 'Cirurgiã-dentista | CROBA 24115', 'Especialista e Mestranda (SL Mandic)'],
    foto: 'https://i.ibb.co/WRsdrtL/Save-Clip-App-701296022-18590174836033404-8920250504416095298-n.webp',
    arco: 'HARMONIA ✦ NATURALIDADE ✦ ELEGÂNCIA ✦ CUIDADO ✦ CONFIANÇA ✦ '
  },
  faixa: ['Beauty', 'Harmonia', 'Naturalidade', 'Elegância', 'Cuidado', 'Confiança'],
  transformacao: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    legenda: 'Resultados variam de pessoa para pessoa.'
  },
  servicos: [
    {
      id: 'labial',
      rotulo: 'Lábios',
      nome: 'Preenchimento labial',
      foto: 'https://i.ibb.co/rfytNZN9/IMPROVE-THE-PHOTO-QUALITY-de378341-2-K.webp',
      foco: [50, 45],
      durabilidade: '10 a 16 meses',
      recuperacao: 'Imediata (leve edema transitório em 24h)',
      indicacao: 'Lábios desidratados, assimetrias anatômicas e perda de contorno pelo tempo.',
      descricao: 'Contorno, volume e hidratação na medida do seu rosto, respeitando a proporção entre os lábios superior e inferior.',
      beneficios: [
        'Lábios mais jovens, hidratados e volumizados',
        'Simetria e contorno nítido do arco do cupido',
        'Acabamento discreto sem efeito artificial',
        'Uso de ácido hialurônico de alta biocompatibilidade com lidocaína'
      ]
    },
    {
      id: 'mento',
      rotulo: 'Mento',
      nome: 'Preenchimento de mento',
      foto: 'https://i.ibb.co/pvLdgF9s/Remove-text-from-photo-ed73710f-2-K.webp',
      foco: [50, 56],
      durabilidade: '14 a 18 meses',
      recuperacao: 'Sem afastamento do trabalho',
      indicacao: 'Queixo retraído, falta de projeção no perfil e harmonia do terço inferior.',
      descricao: 'Projeta e alinha o queixo para equilibrar o perfil e a harmonia entre nariz, lábios e mandíbula.',
      beneficios: [
        'Mais expressão e definição no perfil',
        'Equilíbrio e alinhamento dos terços faciais',
        'Contorno elegante da linha da mandíbula',
        'Estruturação com sustentação óssea anatômica precisa'
      ]
    },
    {
      id: 'full',
      rotulo: 'Full face',
      nome: 'Full face',
      foto: '/img/s-full.svg',
      foco: [50, 42],
      durabilidade: '12 a 24 meses',
      recuperacao: 'Planejada em etapas confortáveis',
      indicacao: 'Rejuvenescimento global integrado, perda de sustentação e flacidez moderada.',
      descricao: 'Planejamento completo do rosto, combinando técnicas para rejuvenescer com coerência entre todas as regiões.',
      beneficios: [
        'Rosto harmônico, descansado e rejuvenescido',
        'Resultado integrado em equilíbrio estético',
        'Plano personalizado executado em etapas seguras',
        'Associação de preenchedores reabsorvíveis e bioestimuladores'
      ]
    },
    {
      id: 'botox',
      rotulo: 'Botox',
      nome: 'Botox',
      foto: '/img/s-botox.svg',
      foco: [50, 26],
      durabilidade: '4 a 6 meses',
      recuperacao: 'Retorno imediato às atividades normais',
      indicacao: 'Rugas na testa, glabela (entre as sobrancelhas) e pés de galinha ao redor dos olhos.',
      descricao: 'Relaxa a musculatura das linhas de expressão da testa e do olhar, sem congelar a sua expressão.',
      beneficios: [
        'Olhar descansado, leve e jovial',
        'Prevenção ativa de novas marcas e vincos',
        'Resultado perceptível em poucos dias',
        'Técnica de dosagem personalizada para manter a mímica natural'
      ]
    },
    {
      id: 'olheira',
      rotulo: 'Olheiras',
      nome: 'Preenchimento de olheira',
      foto: '/img/s-olheira.svg',
      foco: [50, 36],
      durabilidade: '12 a 18 meses',
      recuperacao: 'Sem necessidade de repouso',
      indicacao: 'Sulco nasojugal profundo, sombras sob os olhos e aspecto crônico de cansaço.',
      descricao: 'Suaviza a sombra e o aspecto de cansaço sob os olhos, devolvendo luz e frescor ao olhar.',
      beneficios: [
        'Olhar iluminado e livre de sombras profundas',
        'Rosto descansado com frescor imediato',
        'Ácido hialurônico específico para a área periocular',
        'Aplicação atraumática com microcânula flexível'
      ]
    }
  ],
  galeria: [
    { src: '/img/g1.svg', legenda: 'Preenchimento labial com definição de contorno e hidratação' },
    { src: '/img/g2.svg', legenda: 'Alinhamento de perfil com projeção de mento e ângulo mandibular' },
    { src: '/img/g3.svg', legenda: 'Tratamento preventivo de linhas com toxina botulínica' },
    { src: '/img/g4.svg', legenda: 'Suavização profunda de olheiras e iluminação do olhar' },
    { src: '/img/g5.svg', legenda: 'Planejamento Full Face: harmonia e rejuvenescimento integrado' },
    { src: '/img/g6.svg', legenda: 'Harmonização de perfil respeitando traços anatômicos' },
    { src: '/img/g7.svg', legenda: 'Efeito gloss labial e definição do arco do cupido' },
    { src: '/img/g8.svg', legenda: 'Equilíbrio e proporção áurea facial individualizada' }
  ],
  sobre: {
    titulo: 'Sua beleza é <span class="hero-gold-script">única.</span> O cuidado também.',
    subtitulo: 'Conheça a Dra. Daniella Meireles, Cirurgiã-dentista | CROBA 24115, Especialista e Mestranda em Harmonização Facial (SL Mandic).',
    emocional: '🪞 Estética que respeita a sua essência. Acredito que nenhum rosto precisa ser padronizado. Cada traço conta uma história, e o meu trabalho é valorizar o que já existe em você com delicadeza, equilíbrio e escuta atenta. Quando você se olha no espelho e se reconhece mais jovem, descansada e confiante, sei que a missão foi cumprida.',
    tecnico: 'Dra. Daniella Meireles é Cirurgiã-dentista (CROBA 24115), Especialista e Mestranda em Harmonização Facial pela São Leopoldo Mandic (SL Mandic). Com sólida fundamentação anatômica e atualização constante, alia rigor científico, biossegurança de nível hospitalar e materiais reabsorvíveis de prestígio internacional para proporcionar transformações harmônicas e duradouras.',
    citacao: '“🪞 Estética que respeita a sua essência: harmonizar não é transformar você em outra pessoa — é devolver ao espelho a sua versão mais descansada, elegante e autêntica.”',
    numeros: [
      { v: 5, sufixo: '+', rotulo: 'anos de dedicação' },
      { v: 1200, sufixo: '+', rotulo: 'pacientes atendidas' },
      { v: 5, sufixo: '.0', rotulo: 'avaliação média' }
    ]
  },
  instagram: {
    reelUrl: 'https://www.instagram.com/reel/DdmU2QbK6CH/',
    embedUrl: 'https://www.instagram.com/reel/DdmU2QbK6CH/embed/',
    perfil: 'dra.daniellameireles',
    link: 'https://www.instagram.com/dra.daniellameireles/'
  },
  feedbacks: [
    {
      nome: 'Mariana Silveira',
      servico: 'Preenchimento labial',
      texto: 'Saí me sentindo eu mesma, só mais descansada. Ninguém sabe exatamente o que fiz, só me dizem que estou ótima e iluminada!'
    },
    {
      nome: 'Camila Albuquerque',
      servico: 'Preenchimento de mento',
      texto: 'O alinhamento do meu queixo mudou completamente a harmonia das fotos de perfil. Um resultado impecável e super sutil.'
    },
    {
      nome: 'Patrícia Novaes',
      servico: 'Botox preventivo',
      texto: 'Eu tinha muito medo de ficar com o rosto congelado, mas o resultado da Dra. Daniella é leveza pura. As linhas sumiram naturalmente.'
    },
    {
      nome: 'Beatriz M. Castro',
      servico: 'Preenchimento de olheira',
      texto: 'Adeus corretivo pesado todo dia! A sombra sob os olhos suavizou tanto que pareço ter dormido 10 horas todos os dias.'
    },
    {
      nome: 'Renata V. Guimarães',
      servico: 'Full face',
      texto: 'Fizemos o plano em etapas com muita calma e transparência. Hoje me olho no espelho e vejo a minha melhor versão com estética que respeita minha essência.'
    },
    {
      nome: 'Juliana Mendes',
      servico: 'Preenchimento labial',
      texto: 'Volume na medida certa, sem exageros. Meus lábios ficaram hidratados e com o arco do cupido desenhado com delicadeza.'
    },
    {
      nome: 'Larissa Fontes',
      servico: 'Botox & Olheiras',
      texto: 'O atendimento da Dra. Daniella é acolhedor e super seguro. Ela explica cada detalhe anatômico e passa uma tranquilidade ímpar.'
    },
    {
      nome: 'Sofia Leite',
      servico: 'Full face',
      texto: 'Profissionalismo de altíssimo nível. O estúdio no Wall Street Empresarial é lindo, acolhedor e o resultado superou todas as expectativas.'
    },
    {
      nome: 'Fernanda Dantas',
      servico: 'Preenchimento labial & mento',
      texto: 'A sutileza no trabalho dela é impressionante. Recuperei a definição do meu queixo e meus lábios rejuvenesceram sem perder a minha identidade.'
    },
    {
      nome: 'Carolina Meirelles',
      servico: 'Harmonização Facial & Full Face',
      texto: 'A Dra. Daniella tem mãos de fada! Não senti dor alguma e o planejamento facial respeitou cada proporção minha com muita sofisticação.'
    },
    {
      nome: 'Luciana Barreto',
      servico: 'Preenchimento de olheiras',
      texto: 'O olhar cansado me incomodava há anos. O procedimento foi rápido, tranquilo e o efeito iluminador ficou surpreendente.'
    },
    {
      nome: 'Gabriela Vasconcelos',
      servico: 'Rejuvenescimento facial',
      texto: 'Equipe impecável e pós-atendimento atencioso demais. É muito gratificante encontrar uma profissional que prioriza a elegância e a naturalidade.'
    }
  ],
  estudio: {
    fotos: [
      { src: '/img/studio-1.svg', titulo: 'Consultório Wall Street Empresarial', legenda: 'Ambiente sofisticado e privativo no Wall Street Empresarial em Salvador' },
      { src: '/img/studio-2.svg', titulo: 'Recepção VIP & Lounge', legenda: 'Espaço exclusivo com café especial, conforto e controle de acesso' },
      { src: '/img/studio-3.svg', titulo: 'Consultório de Procedimentos', legenda: 'Biossegurança hospitalar rigorosa e tecnologia de ponta para sua segurança' },
      { src: '/img/studio-4.svg', titulo: 'Espaço de Avaliação Anatômica', legenda: 'Privacidade e acolhimento total antes e após cada atendimento' }
    ],
    endereco: 'Wall Street Empresarial',
    cidade: 'Salvador, Bahia, Brazil',
    horario: 'Segunda a Sexta, das 09h às 19h • Atendimento exclusivo com hora marcada',
    dica: 'Localizado no Wall Street Empresarial, com amplo estacionamento privativo, manobrista, segurança 24h e recepção com controle de acesso.',
    mapsEmbed: 'https://maps.google.com/maps?q=Wall+Street+Empresarial+Salvador+Bahia&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapsLink: 'https://maps.google.com/?q=Wall+Street+Empresarial,+Salvador,+Bahia,+Brazil',
    wazeLink: 'https://waze.com/ul?q=Wall+Street+Empresarial,+Salvador'
  },
  atendimento: [
    {
      passo: '01',
      titulo: 'Conte o que te incomoda',
      descricao: 'Envie sua mensagem ou inicie uma conversa no WhatsApp informando seus objetivos e queixas principais.'
    },
    {
      passo: '02',
      titulo: 'Envie fotos guiadas',
      descricao: 'Nossa equipe orienta fotos simples de frente e perfil para fazermos uma pré-análise personalizada da sua anatomia.'
    },
    {
      passo: '03',
      titulo: 'Receba a orientação inicial',
      descricao: 'Esclarecemos dúvidas, alinhamos expectativas e apresentamos as possibilidades de tratamento seguras.'
    },
    {
      passo: '04',
      titulo: 'Venha para a avaliação presencial',
      descricao: 'No estúdio no Wall Street Empresarial, realizamos a consulta de planejamento detalhada e iniciamos seu plano de harmonização com conforto.'
    }
  ],
  simulador: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    regioes: {
      labios: { x: 50, y: 44, rx: 17, ry: 8, servico: 'Preenchimento labial', rotulo: 'Olhar descansado' },
      queixo: { x: 50, y: 56, rx: 21, ry: 9, servico: 'Preenchimento de mento', rotulo: 'Mais boca' },
      olhos: [
        { x: 45, y: 36, rx: 11, ry: 6 },
        { x: 55, y: 36, rx: 11, ry: 6 }
      ],
      full: { x: 50, y: 42, rx: 32, ry: 38, servico: 'Full face', rotulo: 'Rejuvenescer tudo' }
    }
  },
  faq: [
    {
      p: 'Fico com aspecto artificial?',
      r: 'Não. O trabalho da Dra. Daniella Meireles é pautado pela proporção, sofisticação e pelo lema "Estética que respeita a sua essência". O objetivo nunca é padronizar seu rosto, mas sim realçar o que já é seu com frescor, equilíbrio e elegância.'
    },
    {
      p: 'Quanto tempo dura o procedimento?',
      r: 'Procedimentos à base de ácido hialurônico (como lábios, olheiras e mento) têm durabilidade média de 10 a 18 meses, sendo absorvidos gradativamente pelo organismo. A toxina botulínica (Botox) dura entre 3 e 5 meses conforme o metabolismo individual.'
    },
    {
      p: 'O procedimento dói?',
      r: 'O procedimento é extremamente tolerável e confortável. Empregamos anestésicos tópicos hospitalares de alta eficácia e técnicas com microcânulas atraumáticas. Além disso, as seringas já contêm lidocaína na própria composição.'
    },
    {
      p: 'Qual o tempo de recuperação?',
      r: 'A recuperação é rápida. A grande maioria das pacientes retoma suas atividades de trabalho no mesmo dia ou no dia seguinte. Pode ocorrer leve edema ou pequenos hematomas transitórios nas primeiras 48h.'
    },
    {
      p: 'Posso voltar às atividades no mesmo dia?',
      r: 'Sim! Recomendamos apenas repouso de atividades físicas vigorosas, abstenção de ingestão alcoólica e evitar calor excessivo (sauna ou sol direto) pelas primeiras 24 a 48 horas.'
    },
    {
      p: 'Como sei qual procedimento é o ideal para mim?',
      r: 'Na consulta de avaliação é realizada uma análise minuciosa dos terços faciais, mímica muscular e proporção áurea. A Dra. Daniella Meireles desenha uma proposta individual, explicando o que trará maior benefício sem excessos.'
    },
    {
      p: 'Quem realiza o meu atendimento?',
      r: 'Exclusivamente a Dra. Daniella Meireles, em todas as etapas: desde a avaliação diagnóstica minuciosa até a aplicação e o retorno de acompanhamento após 15 a 30 dias.'
    },
    {
      p: 'Quais os cuidados antes e depois?',
      r: 'Antes: não consumir bebidas alcoólicas e evitar aspirina ou anti-inflamatórios 48h antes. Depois: não pressionar as áreas tratadas, usar filtro solar e seguir as recomendações de hidratação prescritas.'
    },
    {
      p: 'Posso parcelar o tratamento?',
      r: 'Sim, disponibilizamos condições facilitadas de pagamento com parcelamento em até 12 vezes nos cartões de crédito e condições personalizadas para planos de tratamento integrados.'
    }
  ],
  analytics: { ga4: '', pixel: '' }
};
