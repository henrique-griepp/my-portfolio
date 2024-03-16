import { useEffect, useState } from "react";


export const LoadingLang = () => {
  const langInit = navigator.language;
  const savedLang = localStorage.getItem('preferredLang');
  
  if (savedLang) {
    document.documentElement.lang = savedLang;
  } else if (langInit === 'en-US' || langInit === 'en') {
    document.documentElement.lang = 'en';
    localStorage.setItem('preferredLang', 'en');
  } else if (langInit === 'pt-BR') {
    document.documentElement.lang = 'pt-BR';
    localStorage.setItem('preferredLang', 'pt-BR');
  }
}


export default function ChangeLanguage  ()  {
  
  const [lang, setLang] = useState("en")
  
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLang');
    setLang(savedLang || '');
  }, []);
  
  const handleLang = () => {
    const newLang = lang === "en" ? 'pt-BR' : 'en';
    setLang(newLang);
    document.documentElement.lang = newLang;
    localStorage.setItem('preferredLang', newLang);
    
  };
  
  return handleLang
}



// --------método não recomendado---------
window.onload = LoadingLang
