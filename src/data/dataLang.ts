
interface NavBarMenuItem {
  menu: string;
  url: string;
}


export interface NavBarLanguage {
  navBar: NavBarMenuItem[];
  home: string[];
}

interface DataLang {
  name: string;
  lastName: string;
  email: string;
  'pt-BR': NavBarLanguage 
  'en': NavBarLanguage 
  [key: string]: NavBarLanguage | string;
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
    "home": ["Olá Mundo, me chamo", "E eu sou", "Desenvolvedor Web" ]
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
      "home": ["Hello World, my name is", "I am a", "Web Developer"]
  }
}

export default dataLang