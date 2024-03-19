import { useEffect, useState } from "react";
import { Switch as SwitchLang } from "../ui/switch";
import { NavList } from "./navList.tsx";
import IconClose from "@/assets/img/close.tsx";
import IconMenu from "@/assets/img/menu.tsx";
import useLanguage from "@/utils/language/useLanguage.ts";

export function Header() {
  const [scroll, setScroll] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);
  const [language, setLanguage] = useLanguage();

  const handleScroll = () => {
    const scroll = window.scrollY >= 20 ? true : false;
    setScroll(scroll);
  };

  const handleToggleNavBar = () => setOpenNavBar((prevState) => !prevState);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll)
    // }
    
  });

  return (
    <>
      <header
        className={`fixed z-[1] w-full flex justify-center items-center transition ${
          scroll === true
            ? `ease-linear duration-75 bg-background`
            : `duration-1000 ease-out`
        }`}
      >
        <nav
          id="nav-web"
          className={`hidden container md:flex flex-row justify-between items-center px-2`}
        >
          <span className="lg:w-[100px] text-3xl">MYAPP</span>
          <NavList className={``} />
          <button className=" lg:w-[100px]  flex justify-end">
            <SwitchLang
              className=" hidden md:block "
              checked={language === "en"}
              onClick={() => setLanguage(language === "en" ? "pt-BR" : "en")}
            />
          </button>
        </nav>
        <nav id="nav-mob" className={`md:hidden w-full h-full flex flex-col`}>
          <div
            className={`z-[1] flex flex-row justify-between items-center p-1 transition  ${
              openNavBar
                ? "delay-200 duration-200 ease-linear bg-background"
                : "delay-1000 duration-1000 ease-out"
            } `}
          >
            <SwitchLang
              checked={language === "en"}
              onClick={() => setLanguage(language === "en" ? "pt-BR" : "en")}
            />

            <span className="text-3xl">MYAPP</span>
            <button
              className="size-9 hover:text-primary"
              onClick={handleToggleNavBar}
            >
              {openNavBar ? <IconClose /> : <IconMenu />}
            </button>
          </div>
          <NavList
            className={` absolute z-[0] py-14 h-screen bg-background flex-col justify-start transition-all  duration-500 ${
              openNavBar
                ? "translate-y-0 delay-150 opacity-100"
                : "-translate-y-full delay-150 opacity-0"
            }`}
          />
        </nav>
      </header>
    </>
  );
}
