import { useState } from "react";
import { Switch } from "../ui/switch";

import dataLang from "../../assets/dataLang.ts";
import { NavBarLanguage } from "../../assets/dataLang.ts";
import { Link } from "react-router-dom";

export function Header() {
  const [lang, setLang] = useState("pt-br");

  const handleLang = () => {
    const newLang = lang === "pt-br" ? "en" : "pt-br";
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  const { navBar } = (dataLang[lang] as NavBarLanguage) || { navBar: [] };

  return (
    <>
      <header className="w-full fixed ">
        <div className="container flex justify-between items-center py-1 my-5">
          <span className="text-3xl items-center">MYAPP</span>
          <ul className="flex w-full justify-between max-w-3xl text-2xl  px-4 ">
            {navBar.map((item: { url: string; menu: string }) => (
              <li className="p-2" key={item.menu}>
                <Link to={item.url}>{item.menu}</Link>
              </li>
            ))}
          </ul>
          <Switch className="flex items-center" onClick={handleLang} />
        </div>
      </header>
    </>
  );
}
