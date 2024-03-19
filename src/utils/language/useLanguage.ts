import { useContext,  } from 'react'
import { LanguageContext } from "./LanguageContext"
import { Language } from './utils'

export default function useLanguage(): [Language, (lang: Language) => void] {
  const { language, setLanguage} = useContext(LanguageContext)


  return [language, setLanguage]
}