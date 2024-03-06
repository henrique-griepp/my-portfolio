import {useState } from "react";
import { Switch } from "../ui/switch";

import data from "@/assets/dataLang.json";
import { Link } from "react-router-dom";

export function Header() {
  const [lang, setLang] = useState("pt-br");

  const handleLang = () => {
    const newLang = lang === "pt-br" ? "en" : "pt-br";
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  const language = data[lang].navBar;

  console.log(language.map((item: { url: string; }) => item.url))

  return (
    <>
      <header className="w-full fixed "  >
        <div className="container flex justify-between items-center py-1">
        <span className="text-3xl">MYAPP</span>
        <ul className="flex w-full  justify-end text-2xl gap-5 px-3">
          {language.map((item: { url: string; menu: string }) => (
            <li>
              <Link to={item.url}>{item.menu}</Link>
            </li>
          ))}
        </ul>

        <Switch onClick={handleLang} />
        </div>
      </header>
    </>
  );
}
