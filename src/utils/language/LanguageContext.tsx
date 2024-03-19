import { createContext, PropsWithChildren, useState, useEffect} from 'react'
import { Language, getBrowserLanguage, getLocalStorageLanguage } from './utils'

export type LanguageContextType = {
  language: Language,
  setLanguage(lang: Language): void
}

export const LanguageContext = createContext<LanguageContextType>({
  language: getBrowserLanguage(),
  setLanguage: () => {},
});



export const LanguageProvider = (props: PropsWithChildren) => {
  const defaultLang = getLocalStorageLanguage() || getBrowserLanguage()
  const [ language, setLanguage ] = useState<Language>(defaultLang)
  const value = { 
    language, 
    setLanguage: (lang: Language) => setLanguage(lang) 
  }

  useEffect(() => {
    localStorage.setItem("preferredLang", language);
    document.documentElement.lang = language;
  }, [language]);


  return (
    <LanguageContext.Provider value={value} {...props} />
  )
}