import { useEffect, useState } from "react";
import { Switch as SwitchLang } from "../ui/switch";
import dataLang from "../../assets/dataLang.ts";
import { NavBarLanguage } from "../../assets/dataLang.ts";
import { Link } from "react-router-dom";
import IconClose from "@/assets/img/close.tsx";
import { ModeToggle as ThemeToogle } from "../Theme/mode-toggle.tsx";
import IconMenu from "@/assets/img/menu.tsx";

export function Header() {
  const [lang, setLang] = useState("pt-br");
  const [screen, setScreen] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);
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
    const scroll = window.scrollY >= 20 ? true : false;
    setScroll(scroll);
  };

  const handleToggleNavBar = () => setOpenNavBar((prevState) => !prevState);

  useEffect(() => {
    window.addEventListener("resize", handleScreenNavBar);
    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("resize", handleScreenNavBar);
    //   window.removeEventListener("scroll", handleScroll)
    // };
  });

  const NavMob = () => {
    return (
      <div
        className={`${
          openNavBar === false ? "" : "bg-background h-screen"
        }  w-full   p-1`}
      >
        <div className="w-full grid grid-cols-3 place-items-center">
          <div>
          { openNavBar === false ? null : <SwitchLang
            checked={lang === "en"}
            className="justify-self-start"
            onClick={handleLang}
          />}
          </div>
          <span className="text-3xl items-center">MYAPP</span>
          <button
            className="size-9 justify-self-end"
            onClick={handleToggleNavBar}
          >
           {openNavBar === false ? <IconMenu /> : <IconClose />} 
          </button>
          <div className=" w-full col-span-3 ">
            {openNavBar === false ? null : (
              <ul className="h-full w-full flex flex-col items-center max-w-3xl text-2xl gap-3 p-5 ">
                {navBar.map((item: { url: string; menu: string }) => (
                  <li className="p-2" key={item.menu}>
                    <Link to={item.url}>{item.menu}</Link>
                  </li>
                ))}
                <li>
                  <ThemeToogle />
                </li>
              </ul>
            )}
          </div>
        </div>
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
        <SwitchLang
          checked={lang === "en"}
          className="flex items-center"
          onClick={handleLang}
        />

        <ThemeToogle />
      </div>
    );
  };

  return (
    <>
      <header
        className={`w-full fixed delay-200 duration-700 ${
          scroll === true ? `bg-background` : ``
        }`}
      >
        {screen >= 768 ? <NavWeb /> : <NavMob />}
      </header>
    </>
  );
}
