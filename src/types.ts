export type Category = 'EAD' | 'SUSTENTABILIDADE' | 'LOGICA' | 'INGLES';

export interface Question {
  id: number;
  category: Category;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'fácil' | 'intermediário';
}

export const CATEGORIES: Record<Category, { title: string; color: string; icon: string }> = {
  EAD: {
    title: 'Tecnologias e AVA/EAD',
    color: 'bg-blue-500',
    icon: 'Monitor',
  },
  SUSTENTABILIDADE: {
    title: 'Educação Ambiental e Sustentabilidade',
    color: 'bg-emerald-500',
    icon: 'Leaf',
  },
  LOGICA: {
    title: 'Lógica de Programação',
    color: 'bg-indigo-500',
    icon: 'Code',
  },
  INGLES: {
    title: 'Inglês Técnico',
    color: 'bg-amber-500',
    icon: 'Languages',
  },
};

export const QUESTIONS: Question[] = [
  // --- EAD & AVA ---
  {
    id: 1,
    category: 'EAD',
    text: 'Qual é o papel do Professor Mediador (Tutor) em um curso EAD?',
    options: [
      'Apenas corrigir provas sem contato com alunos',
      'Acompanhar e orientar o aluno no processo de aprendizagem',
      'Desenvolver o software da plataforma',
      'Atuar apenas na parte administrativa da instituição'
    ],
    correctAnswer: 1,
    explanation: 'O tutor atua como uma ponte entre o conteúdo e o aluno, mediando o conhecimento.',
    difficulty: 'fácil'
  },
  {
    id: 2,
    category: 'EAD',
    text: 'O que significa a sigla AVA no contexto educacional?',
    options: [
      'Ambiente Virtual Amigável',
      'Ambiente Visual de Aprendizado',
      'Ambiente Virtual de Aprendizagem',
      'Aulas Virtuais Assíncronas'
    ],
    correctAnswer: 2,
    explanation: 'AVA é o espaço digital onde ocorre a interação educativa.',
    difficulty: 'fácil'
  },
  {
    id: 3,
    category: 'EAD',
    text: 'No Moodle, qual ferramenta é ideal para discussões assíncronas sobre um tema?',
    options: [
      'Chat',
      'Questionário',
      'Fórum',
      'Tarefa'
    ],
    correctAnswer: 2,
    explanation: 'O fórum permite que alunos postem e respondam em tempos diferentes.',
    difficulty: 'fácil'
  },
  {
    id: 4,
    category: 'EAD',
    text: 'O que diferencia a modalidade presencial da distância (EAD)?',
    options: [
      'O EAD não exige estudo individual',
      'A separação física e temporal no EAD mediada por tecnologia',
      'O conteúdo no EAD é sempre inferior',
      'O professor não existe no EAD'
    ],
    correctAnswer: 1,
    explanation: 'A mediação tecnológica é o fator principal que permite a distância física.',
    difficulty: 'intermediário'
  },
  {
    id: 5,
    category: 'EAD',
    text: 'Sobre a origem da EAD, qual foi uma das primeiras formas de ensino a distância?',
    options: [
      'Cursos por correspondência via correio',
      'Aulas via YouTube',
      'Grupos de WhatsApp',
      'Plataformas mobile'
    ],
    correctAnswer: 0,
    explanation: 'A EAD começou séculos atrás com materiais enviados pelo serviço postal.',
    difficulty: 'fácil'
  },
  {
    id: 6,
    category: 'EAD',
    text: 'O Moodle é considerado uma plataforma de...',
    options: [
      'Rede Social corporativa',
      'Software de edição de vídeo',
      'LMS (Learning Management System)',
      'Sistema Operacional para servidores'
    ],
    correctAnswer: 2,
    explanation: 'LMS é a sigla em inglês para Sistema de Gerenciamento de Aprendizagem.',
    difficulty: 'fácil'
  },
  {
    id: 7,
    category: 'EAD',
    text: 'Dentro do Moodle, a ferramenta "Tarefa" serve para:',
    options: [
      'Bater papo em tempo real',
      'Enviar arquivos para avaliação do professor',
      'Apenas ler textos de apoio',
      'Trocar senha do usuário'
    ],
    correctAnswer: 1,
    explanation: 'A tarefa é usada para entrega de trabalhos e atividades.',
    difficulty: 'fácil'
  },
  {
    id: 8,
    category: 'EAD',
    text: 'Qual agente da EAD é responsável pela criação pedagógica e científica do material didático?',
    options: [
      'Tutor',
      'Estudante',
      'Professor Autor',
      'Suporte Técnico'
    ],
    correctAnswer: 2,
    explanation: 'O Professor Autor cria o conteúdo original do curso.',
    difficulty: 'intermediário'
  },
  {
    id: 9,
    category: 'EAD',
    text: 'O que caracteriza uma atividade "síncrona" no EAD?',
    options: [
      'Atividade feita no tempo do aluno',
      'Interação em tempo real entre participantes',
      'Leitura de PDF offline',
      'Assistir a um vídeo gravado no ano passado'
    ],
    correctAnswer: 1,
    explanation: 'Sincronia exige que os participantes estejam conectados ao mesmo tempo.',
    difficulty: 'fácil'
  },
  {
    id: 10,
    category: 'EAD',
    text: 'No Moodle, o bloco que mostra o progresso das atividades é geralmente chamado de:',
    options: [
      'Calendário',
      'Barra de Conclusão',
      'Menu Lateral',
      'Arquivos Privados'
    ],
    correctAnswer: 1,
    explanation: 'A barra de conclusão ajuda o aluno a visualizar o que já foi feito.',
    difficulty: 'intermediário'
  },
  {
    id: 11,
    category: 'EAD',
    text: 'Qual componente é essencial para o funcionamento de um AVA moderno?',
    options: [
      'Conexão com a Internet',
      'Impressora matricial',
      'Disquete de 3.5 polegadas',
      'Televisão de tubo'
    ],
    correctAnswer: 0,
    explanation: 'Como plataforma web, o acesso à rede é fundamental.',
    difficulty: 'fácil'
  },
  {
    id: 12,
    category: 'EAD',
    text: 'A flexibilidade de horários é uma vantagem de qual modalidade?',
    options: [
      'Presencial rígida',
      'Ensino a Distância',
      'Palestra ao vivo obrigatória',
      'Prova de concurso presencial'
    ],
    correctAnswer: 1,
    explanation: 'O EAD permite que o aluno escolha o melhor momento para estudar (assíncrono).',
    difficulty: 'fácil'
  },

  // --- SUSTENTABILIDADE ---
  {
    id: 13,
    category: 'SUSTENTABILIDADE',
    text: 'O que representa o termo "Lixo Eletrônico" (E-waste)?',
    options: [
      'Papéis jogados fora em escritórios',
      'Equipamentos elétricos ou eletrônicos descartados',
      'Restos de comida em refeitórios de empresas de TI',
      'Arquivos deletados da lixeira do Windows'
    ],
    correctAnswer: 1,
    explanation: 'E-waste abrange desde celulares até grandes servidores obsoletos.',
    difficulty: 'fácil'
  },
  {
    id: 14,
    category: 'SUSTENTABILIDADE',
    text: 'Na política dos 3Rs, qual ordem deve ser priorizada?',
    options: [
      'Reciclar, Reutilizar e Reduzir',
      'Reduzir, Reutilizar e Reciclar',
      'Reutilizar, Reciclar e Reduzir',
      'Reciclar, Reduzir e Reutilizar'
    ],
    correctAnswer: 1,
    explanation: 'Reduzir o consumo é sempre o mais eficiente, seguido pela reutilização.',
    difficulty: 'intermediário'
  },
  {
    id: 15,
    category: 'SUSTENTABILIDADE',
    text: 'Qual metal pesado, comum em baterias antigas, é altamente tóxico ao meio ambiente?',
    options: [
      'Alumínio',
      'Chumbo',
      'Ferro',
      'Cálcio'
    ],
    correctAnswer: 1,
    explanation: 'Chumbo e mercúrio são grandes poluentes presentes em eletrônicos.',
    difficulty: 'fácil'
  },
  {
    id: 16,
    category: 'SUSTENTABILIDADE',
    text: 'O que é Obsolecência Programada?',
    options: [
      'Programar um software para ser rápido',
      'Desenvolver produtos com vida útil curta para forçar a recompra',
      'Reciclagem automática de dados',
      'Atualização gratuita de sistemas'
    ],
    correctAnswer: 1,
    explanation: 'É uma prática criticada que gera excesso de lixo eletrônico.',
    difficulty: 'intermediário'
  },
  {
    id: 17,
    category: 'SUSTENTABILIDADE',
    text: 'Um exemplo de "Reduzir" no contexto da informática é:',
    options: [
      'Comprar um mouse novo todo mês',
      'Imprimir todos os e-mails recebidos',
      'Utilizar virtualização de servidores para usar menos hardware físico',
      'Trocar de monitor a cada atualização de driver'
    ],
    correctAnswer: 2,
    explanation: 'A virtualização reduz a necessidade de múltiplos equipamentos físicos.',
    difficulty: 'intermediário'
  },
  {
    id: 18,
    category: 'SUSTENTABILIDADE',
    text: 'A Responsabilidade Social do profissional de TI envolve:',
    options: [
      'Apenas ganhar dinheiro com códigos',
      'Ignorar as leis ambientais para reduzir custos',
      'Garantir o descarte correto de resíduos eletrônicos que manipula',
      'Deletar arquivos de clientes sem aviso'
    ],
    correctAnswer: 2,
    explanation: 'O profissional deve zelar pelo impacto ambiental de suas escolhas técnicas.',
    difficulty: 'fácil'
  },
  {
    id: 19,
    category: 'SUSTENTABILIDADE',
    text: 'Qual prática abaixo é considerada "Tecnologia Sustentável"?',
    options: [
      'Data Centers que utilizam energia renovável e refrigeração eficiente',
      'Uso de baterias que não duram 1 hora',
      'Criação de softwares propositalmente pesados',
      'Descarte de servidores em rios locais'
    ],
    correctAnswer: 0,
    explanation: 'Eficiência energética é pilar fundamental da TI Verde.',
    difficulty: 'fácil'
  },
  {
    id: 20,
    category: 'SUSTENTABILIDADE',
    text: 'Reutilizar um computador antigo como servidor de arquivos doméstico é uma ação de:',
    options: [
      'Reciclagem',
      'Redução',
      'Reutilização',
      'Rejeição'
    ],
    correctAnswer: 2,
    explanation: 'Dar um novo uso a um item antes de descartá-lo é reutilizar.',
    difficulty: 'fácil'
  },
  {
    id: 21,
    category: 'SUSTENTABILIDADE',
    text: 'Como a computação em nuvem (Cloud Computing) auxilia na sustentabilidade?',
    options: [
      'Aumentando o calor global individualmente',
      'Otimizando o uso de recursos de hardware em escala industrial',
      'Exigindo mais cabos por residência',
      'Eliminando o uso de eletricidade'
    ],
    correctAnswer: 1,
    explanation: 'Serviços centralizados costumam ser mais eficientes do que equipamentos isolados.',
    difficulty: 'intermediário'
  },
  {
    id: 22,
    category: 'SUSTENTABILIDADE',
    text: 'O descarte correto de componentes eletrônicos deve ser feito em:',
    options: [
      'Lixeiras comuns de rua',
      'Pontos de coleta seletiva específicos para resíduos eletrônicos',
      'Terrenos baldios',
      'Lixo orgânico'
    ],
    correctAnswer: 1,
    explanation: 'Eletrônicos exigem tratamento especial devido aos metais pesados.',
    difficulty: 'fácil'
  },
  {
    id: 23,
    category: 'SUSTENTABILIDADE',
    text: 'Educação Ambiental nas empresas de TI serve para:',
    options: [
      'Aumentar o gasto com papel',
      'Conscientizar colaboradores sobre economia de recursos e descarte',
      'Apenas decorar o escritório com plantas',
      'Dificultar o trabalho técnico'
    ],
    correctAnswer: 1,
    explanation: 'Treinamento e cultura são essenciais para práticas sustentáveis reais.',
    difficulty: 'fácil'
  },
  {
    id: 24,
    category: 'SUSTENTABILIDADE',
    text: 'O conceito de Sustentabilidade se baseia no equilíbrio entre:',
    options: [
      'Social, Econômico e Ambiental',
      'Rápido, Barato e Fácil',
      'Windows, Linux e Mac',
      'CPU, RAM e Disco'
    ],
    correctAnswer: 0,
    explanation: 'O tripé da sustentabilidade engloba pessoas, lucro e planeta.',
    difficulty: 'intermediário'
  },

  // --- LOGICA DE PROGRAMAÇÃO ---
  {
    id: 25,
    category: 'LOGICA',
    text: 'Qual é a principal função de um Algoritmo?',
    options: [
      'Ser uma linguagem de programação difícil',
      'Uma sequência finita de passos para resolver um problema',
      'Consertar peças físicas do computador',
      'Navegar na internet'
    ],
    correctAnswer: 1,
    explanation: 'Algoritmos são receitas lógicas para alcançar um resultado.',
    difficulty: 'fácil'
  },
  {
    id: 26,
    category: 'LOGICA',
    text: 'Qual tipo de dado é ideal para armazenar a idade de uma pessoa?',
    options: [
      'Float (Real)',
      'String (Cadeia)',
      'Integer (Inteiro)',
      'Boolean (Lógico)'
    ],
    correctAnswer: 2,
    explanation: 'Idades são normalmente representadas por números inteiros.',
    difficulty: 'fácil'
  },
  {
    id: 27,
    category: 'LOGICA',
    text: 'O que faz o comando de "Saída" em um programa?',
    options: [
      'Lê o que o usuário digita',
      'Encerra o sistema imediatamente',
      'Exibe informações na tela ou dispositivo para o usuário',
      'Salva o código no HD'
    ],
    correctAnswer: 2,
    explanation: 'Comandos como "print" ou "escreva" são de saída de dados.',
    difficulty: 'fácil'
  },
  {
    id: 28,
    category: 'LOGICA',
    text: 'Qual estrutura de decisão permite escolher entre dois caminhos?',
    options: [
      'Para (For)',
      'Se...Então...Senão (If/Else)',
      'Enquanto (While)',
      'Vetor'
    ],
    correctAnswer: 1,
    explanation: 'O "If/Else" é a base da lógica de decisão condicional.',
    difficulty: 'fácil'
  },
  {
    id: 29,
    category: 'LOGICA',
    text: 'Uma estrutura de repetição serve para:',
    options: [
      'Executar um bloco de código várias vezes',
      'Mudar a cor da tela',
      'Armazenar apenas um valor',
      'Definir o nome de uma variável'
    ],
    correctAnswer: 0,
    explanation: 'Loops (For, While) evitam a repetição manual de código.',
    difficulty: 'fácil'
  },
  {
    id: 30,
    category: 'LOGICA',
    text: 'O que é um Vetor (Array) na programação?',
    options: [
      'Uma variável que armazena apenas um valor booleano',
      'Uma estrutura que armazena múltiplos valores do mesmo tipo sob um mesmo nome',
      'Um tipo de vírus de computador',
      'Uma instrução de desligamento'
    ],
    correctAnswer: 1,
    explanation: 'Vetores são coleções indexadas de elementos.',
    difficulty: 'intermediário'
  },
  {
    id: 31,
    category: 'LOGICA',
    text: 'Qual o valor final de X? [ X = 10; X = X + 5; X = X * 2; ]',
    options: [
      '20',
      '30',
      '15',
      '25'
    ],
    correctAnswer: 1,
    explanation: '10 + 5 = 15; 15 * 2 = 30.',
    difficulty: 'intermediário'
  },
  {
    id: 32,
    category: 'LOGICA',
    text: 'A operação lógica (Verdadeiro E Falso) resulta em:',
    options: [
      'Verdadeiro',
      'Falso',
      'Nulo',
      'Erro de sintaxe'
    ],
    correctAnswer: 1,
    explanation: 'No operador "E" (AND), ambas precisam ser verdadeiras para o resultado ser verdadeiro.',
    difficulty: 'intermediário'
  },
  {
    id: 33,
    category: 'LOGICA',
    text: 'Qual estrutura é mais adequada quando sabemos EXATAMENTE quantas vezes repetir?',
    options: [
      'Enquanto (While)',
      'Se (If)',
      'Para (For)',
      'Matriz'
    ],
    correctAnswer: 2,
    explanation: 'O "For" é indicado para iterações com contagem definida.',
    difficulty: 'fácil'
  },
  {
    id: 34,
    category: 'LOGICA',
    text: 'Em uma Matriz 3x3, quantos elementos existem no total?',
    options: [
      '3',
      '6',
      '9',
      '12'
    ],
    correctAnswer: 2,
    explanation: 'Multiplicamos linhas por colunas: 3 * 3 = 9.',
    difficulty: 'fácil'
  },
  {
    id: 35,
    category: 'LOGICA',
    text: 'Qual o erro clássico de um loop "Enquanto" (While) que nunca para?',
    options: [
      'Erro de compilação',
      'Loop Infinito',
      'Variável não definida',
      'Divisão por zero'
    ],
    correctAnswer: 1,
    explanation: 'Ocorre quando a condição de parada nunca se torna falsa.',
    difficulty: 'fácil'
  },
  {
    id: 36,
    category: 'LOGICA',
    text: 'A variável do tipo "Boolean" aceita quais valores?',
    options: [
      'Qualquer número',
      'Letras de A a Z',
      'True ou False',
      'Endereços web'
    ],
    correctAnswer: 2,
    explanation: 'Booleanos representam estados lógicos binários.',
    difficulty: 'fácil'
  },

  // --- INGLÊS TÉCNICO ---
  {
    id: 37,
    category: 'INGLES',
    text: 'O que significa o termo "Software"?',
    options: [
      'Componentes físicos do computador',
      'Programas, rotinas e dados de um sistema',
      'Um tipo de metal macio',
      'A tela do monitor'
    ],
    correctAnswer: 1,
    explanation: 'Software é a parte lógica, enquanto Hardware é a física.',
    difficulty: 'fácil'
  },
  {
    id: 38,
    category: 'INGLES',
    text: 'Na informática, a palavra "Output" refere-se a:',
    options: [
      'Entrada de dados',
      'Saída de informação',
      'Desligar o sistema',
      'Salvar um arquivo'
    ],
    correctAnswer: 1,
    explanation: 'Out = fora, Put = colocar. Colocar para fora/exibir.',
    difficulty: 'fácil'
  },
  {
    id: 39,
    category: 'INGLES',
    text: 'O que faz a estratégia de leitura "Skimming"?',
    options: [
      'Ler cada palavra com ajuda de dicionário',
      'Ler o texto superficialmente para pegar a ideia geral',
      'Traduzir o texto para o português rapidamente',
      'Procurar uma palavra específica no texto'
    ],
    correctAnswer: 1,
    explanation: 'Skimming é o olhar rápido para entender o assunto do texto.',
    difficulty: 'intermediário'
  },
  {
    id: 40,
    category: 'INGLES',
    text: 'O termo "Database" traduz-se como:',
    options: [
      'Dados básicos',
      'Base de dados (Banco de dados)',
      'Data de nascimento',
      'Finalizar dados'
    ],
    correctAnswer: 1,
    explanation: 'Data = dados, Base = base.',
    difficulty: 'fácil'
  },
  {
    id: 41,
    category: 'INGLES',
    text: 'A estratégia "Scanning" é usada para:',
    options: [
      'Digitalizar um documento físico',
      'Localizar uma informação específica rapidamente no texto',
      'Ignorar o título do texto',
      'Resumir um parágrafo'
    ],
    correctAnswer: 1,
    explanation: 'Scanning é como passar um scanner em busca de um dado específico.',
    difficulty: 'intermediário'
  },
  {
    id: 42,
    category: 'INGLES',
    text: 'O significado de "Download" é:',
    options: [
      'Enviar um arquivo para a internet',
      'Baixar um arquivo da rede para o computador',
      'Deletar um arquivo',
      'Carregar a bateria'
    ],
    correctAnswer: 1,
    explanation: 'Down = baixo, Load = carregar.',
    difficulty: 'fácil'
  },
  {
    id: 43,
    category: 'INGLES',
    text: 'A expressão "User-friendly" significa que um sistema é:',
    options: [
      'Amigo do usuário (Fácil de usar)',
      'Apenas para usuários avançados',
      'Caro e difícil',
      'Incompatível com o usuário'
    ],
    correctAnswer: 0,
    explanation: 'Indica uma boa experiência de usuário (UX).',
    difficulty: 'fácil'
  },
  {
    id: 44,
    category: 'INGLES',
    text: 'Qual palavra é um falso cognato (parece mas não é) comum na TI: "Push"?',
    options: [
      'Puxar',
      'Empurrar',
      'Postar',
      'Pressionar'
    ],
    correctAnswer: 1,
    explanation: 'Push parece "puxe", mas significa "empurre".',
    difficulty: 'intermediário'
  },
  {
    id: 45,
    category: 'INGLES',
    text: 'O que significa "Source Code"?',
    options: [
      'Código secreto',
      'Código fonte',
      'Arquivo executável',
      'Manual do usuário'
    ],
    correctAnswer: 1,
    explanation: 'É o código original escrito pelo programador.',
    difficulty: 'fácil'
  },
  {
    id: 46,
    category: 'INGLES',
    text: '"Cloud Computing" refere-se a:',
    options: [
      'Computação nas nuvens (Remota)',
      'Previsão do tempo via PC',
      'Computadores feitos de material leve',
      'Sistemas lentos e nebulosos'
    ],
    correctAnswer: 0,
    explanation: 'Uso de recursos de computação via internet.',
    difficulty: 'fácil'
  },
  {
    id: 47,
    category: 'INGLES',
    text: 'A palavra "Bug" na informática é usada para:',
    options: [
      'Um inseto dentro do monitor',
      'Um erro ou falha no sistema/software',
      'Um novo recurso de hardware',
      'Uma senha de segurança'
    ],
    correctAnswer: 1,
    explanation: 'É o termo universal para falhas lógicas.',
    difficulty: 'fácil'
  },
  {
    id: 48,
    category: 'INGLES',
    text: 'O que significa "Wireless" literalmente?',
    options: [
      'Com menos fios',
      'Sem fios',
      'Fio de aço',
      'Conexão por vidro'
    ],
    correctAnswer: 1,
    explanation: 'Less = sem. Wire = fio.',
    difficulty: 'fácil'
  },

  // --- MIXED BATCH FOR 50+ ---
  {
    id: 49,
    category: 'LOGICA',
    text: 'Qual operador lógico inverte o valor de uma expressão?',
    options: [
      'E (AND)',
      'OU (OR)',
      'NÃO (NOT)',
      'IGUAL (DOUBLE EQUAL)'
    ],
    correctAnswer: 2,
    explanation: 'O operador NOT transforma Verdadeiro em Falso e vice-versa.',
    difficulty: 'intermediário'
  },
  {
    id: 50,
    category: 'SUSTENTABILIDADE',
    text: 'Reciclagem de eletrônicos permite recuperar quais materiais valiosos?',
    options: [
      'Apenas plástico',
      'Ouro, Prata e Cobre',
      'Apenas vidro',
      'Nenhum material é aproveitável'
    ],
    correctAnswer: 1,
    explanation: 'Placas de circuito contêm metais preciosos que podem ser extraídos.',
    difficulty: 'intermediário'
  },
  {
    id: 51,
    category: 'INGLES',
    text: 'O comando "Save as" permite:',
    options: [
      'Deletar o arquivo atual',
      'Salvar o arquivo com um novo nome ou formato',
      'Apenas fechar o programa',
      'Imprimir o arquivo'
    ],
    correctAnswer: 1,
    explanation: 'Save as = Salvar como.',
    difficulty: 'fácil'
  },
  {
    id: 52,
    category: 'EAD',
    text: 'Qual formato de arquivo é mais comum para leitura de livros digitais em AVAs?',
    options: [
      'MP3',
      'PDF',
      'AVI',
      'EXE'
    ],
    correctAnswer: 1,
    explanation: 'PDF é o padrão para documentos de leitura universais.',
    difficulty: 'fácil'
  },
  {
    id: 53,
    category: 'LOGICA',
    text: 'Como chamamos a verificação passo a passo de um código para achar erros?',
    options: [
      'Instalação',
      'Debug (Depuração)',
      'Digitação',
      'Upload'
    ],
    correctAnswer: 1,
    explanation: 'Debugar é o ato de remover "bugs" do código.',
    difficulty: 'intermediário'
  }
];
