
interface NavBarMenuItem {
  menu: string;
  url: string;
}


export interface NavBarLanguage {
  navBar: NavBarMenuItem[];
  home: string[];
  about: string[]
}

interface DataLang {
  name: string;
  lastName: string;
  email: string;
  'pt-BR': NavBarLanguage 
  'en': NavBarLanguage 
}


const dataLang: DataLang = {
  "name": "Henrique",
  "lastName": "Griepp Cerqueira",
  "email": "contato@grceh.com",
  "pt-BR": {
    "navBar": [
      {
        "menu": "Inicio",
        "url": "/"
      },
      {
        "menu": "Sobre",
        "url": "/"
      },
      {
        "menu": "Serviços",
        "url": "/"
      },
      {
        "menu": "Habilidades",
        "url": "/"
      },
      {
        "menu": "Projetos",
        "url": "/"
      },
      {
        "menu": "Contato",
        "url": "/"
      }
    ],
    "home": ["Olá Mundo, me chamo", "E eu sou", "Desenvolvedor Web" ],
    "about": [
    "Olá, me chamo Henrique e vou compartilhar um pouco da minha história e das minhas fontes de inspiração.",
    
    "Desde sempre, fui apaixonado por desafios e por aprender coisas novas. Sempre me interessei por música, tecnologia e arte visual. Enquanto muitos se dedicavam a uma única área, sempre fui mais generalista.",

    "Minha jornada acadêmica me levou por caminhos diversos, desde a Produção Fonográfica, até a Análise e Desenvolvimento de Sistemas. Sim, também dei uma passada pelo mundo do Marketing, mas minha verdadeira paixão sempre foi a tecnologia. Por isso, estou constantemente aprimorando meus conhecimentos como desenvolvedor e cursando especializações em Engenharia de Software e Desenvolvimento Front-end.",

    "Claro, não é só de códigos que eu vivo. Nas horas vagas, você me encontra jogando qualquer coisa que me desafie ou dedilhando umas músicas na guitarra. É, eu também tenho esse lado mais rock 'n' roll.",

    "Além disso, adoro ler de tudo um pouco, desde livros técnicos e de investimentos até obras de ficção. Mas é nos filmes e séries que encontro minha maior fonte de entretenimento e inspiração. Sempre em busca de novas histórias, os filmes e séries são minha maneira favorita de relaxar e me perder em mundos fictícios.",

    "No geral, sou o cara que equilibra a paixão pela tecnologia com doses generosas de diversão. Então, se quiser trocar uma ideia sobre desenvolvimento de software, música ou sobre aquela série nova, é só me chamar."
  ]
  },
  "en": {
    "navBar": [
        {
          "menu": "Home",
          "url": "/"
        },
        {
          "menu": "About",
          "url": "/"
        },
        {
          "menu": "Services",
          "url": "/"
        },
        {
          "menu": "Skills",
          "url": "/"
        },
        {
          "menu": "Projects",
          "url": "/"
        },
        {
          "menu": "Contact",
          "url": "/"
        }
      ],
      "home": ["Hello World, it's me", " and I'm a", "Web Developer"],
      "about": [
      "Hello, my name is Henrique and I'm going to share a bit of my story and my sources of inspiration.",

      "Since forever, I've been passionate about challenges and learning new things. I've always been interested in music, technology, and visual art. While many focused on a single area, I've always been more of a generalist.",
      
      "My academic journey took me through diverse paths, from Sound Production to Analysis and Development of Systems. Yes, I also dipped into the world of Marketing, but my true passion has always been technology. That's why I'm constantly improving my skills as a developer and pursuing specializations in Software Engineering and Front-end Development.",
      
      "Of course, it's not just about codes for me. In my spare time, you'll find me playing anything that challenges me or strumming some tunes on the guitar. Yeah, I've got that rock 'n' roll side too.",
      
      "Moreover, I love reading a bit of everything, from technical and investment books to fiction works. But it's in movies and series that I find my biggest source of entertainment and inspiration. Always in search of new stories, movies, and series are my favorite way to relax and get lost in fictional worlds.",
      
      "Overall, I'm the guy who balances a passion for technology with generous doses of fun. So, if you want to chat about software development, music, or that new series, just give me a shout."
    ]
  }
}

export default dataLang