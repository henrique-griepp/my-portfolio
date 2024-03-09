import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

import dataLang from "../../assets/dataLang.ts";
import { NavBarLanguage } from "../../assets/dataLang.ts";
import { Link } from "react-router-dom";
import IconClose from "@/assets/img/close.tsx";
import { ModeToggle } from "../Theme/mode-toggle.tsx";

export function Header() {
  const [lang, setLang] = useState("pt-br");
  const [screen, setScreen] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(false);
  const { navBar } = (dataLang[lang] as NavBarLanguage) || { navBar: [] };

  const handleLang = () => {
    const newLang = lang === "pt-br" ? "en" : "pt-br";
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  const handleScreenNavBar = () => {
    const sizeScreen = window.innerWidth;
    setScreen(sizeScreen);
  };

  const handleScroll = () => {
    const scroll = window.scrollY >= 20 ? true : false
    setScroll(scroll)
  }

  console.log(scroll)

  useEffect(() => {
    window.addEventListener("resize", handleScreenNavBar);
    window.addEventListener('scroll', handleScroll)

    // return () => {
    //   window.removeEventListener("resize", handleScreenNavBar);
    //   window.removeEventListener("scroll", handleScroll)
    // };
  });

  const NavMob = () => {
    return (
      <div className="bg-background w-full flex flex-col justify-between items-center p-1">
        <div className="w-full flex flex-row justify-between items-center">
          <Switch
            checked={lang === "en"}
            className="flex items-center"
            onClick={handleLang}
          />
          <span className="text-3xl items-center">MYAPP</span>
          <button className="size-9">
            <IconClose />
          </button>
        </div>
        <ul className=" h-full flex flex-col justify-start items-center max-w-3xl text-2xl gap-3 p-5 ">
          {navBar.map((item: { url: string; menu: string }) => (
            <li className="p-2" key={item.menu}>
              <Link to={item.url}>{item.menu}</Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    );
  };

  const NavWeb = () => {
    return (
      <div className="container flex justify-between items-center py-1 px-2">
        <span className="text-3xl items-center">MYAPP</span>
        <ul className="flex w-full justify-between max-w-3xl text-2xl  px-4 ">
          {navBar.map((item: { url: string; menu: string }) => (
            <li className="p-2" key={item.menu}>
              <Link to={item.url}>{item.menu}</Link>
            </li>
          ))}
        </ul>
        <Switch
          checked={lang === "en"}
          className="flex items-center"
          onClick={handleLang}
        />

<ModeToggle />
      </div>
    );
  };

  return (
    <>
      <header className={`w-full fixed delay-200 ${scroll === true ? "bg-background" : ""} duration-1000`}>
        {screen >= 768 ? <NavWeb /> : <NavMob />}
        
      </header>
    </>
  );
}
