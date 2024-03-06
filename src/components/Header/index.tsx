import { useState } from "react";
import { Switch } from "../ui/switch";

import data from "@/assets/dataLang.json";

export function Header() {
  const [lang, setLang] = useState("pt-br");

  const handleLang = () => {
    const newLang = lang === "pt-br" ? "en" : "pt-br";
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  const language = data[lang].navBar;

  console.log(language);

  return (
    <>
      <header className="bg-red-500">
        <span>MYAPP</span>
        <ul>
          {language.map((item: string) => (
            <li>
              <button>{item}</button>
            </li>
          ))}
        </ul>

        <Switch onClick={handleLang} />
      </header>
    </>
  );
}
