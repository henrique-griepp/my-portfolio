export type Language = "pt-BR" | 'en' 
 

export function getBrowserLanguage(): Language {
  switch(navigator.language.toLowerCase()) {
    case "en-us":
    case "en":
      return "en"
    case "pt":
    case "pt-br":
    default:
      return "pt-BR"
  }
}


export function getLocalStorageLanguage(key: string = 'preferredLang'): Language | undefined {
  return localStorage.getItem(key) as Language
}