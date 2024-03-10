import { useEffect, useState } from "react";
import { Switch as SwitchLang } from "../ui/switch";
import dataLang from "../../data/dataLang.ts";
import { NavBarLanguage } from "../../data/dataLang.ts";
import { Link } from "react-router-dom";
import IconClose from "@/assets/img/close.tsx";
import { ModeToggle as ThemeToogle } from "../Theme/mode-toggle.tsx";
import IconMenu from "@/assets/img/menu.tsx";
import  ChangeLanguage  from "@/utils/language.tsx";


const NavMob = ( ) => {

  const { navBar } = (dataLang[document.documentElement.lang] as NavBarLanguage) || { navBar: [] };
  const [openNavBar, setOpenNavBar] = useState(false);

  const handleToggleNavBar = () => setOpenNavBar((prevState) => !prevState);

  return (
    <>
      <nav className=" w-full flex justify-between">
        <div className="button-lang flex items-center">
          <SwitchLang  onClick={ChangeLanguage()} />
        </div>
        <span className="title-app text-3xl">MYAPP</span>
        <button className="open-navbar size-9 " onClick={handleToggleNavBar}>
          {openNavBar ? <IconClose /> : <IconMenu />}
        </button>
      </nav>
      {/* -----ul com problema -----ss */}
      <ul
        className={`fixed h-screen text-2xl gap-3 p-5 transition-all duration-500 ease-in-out ${
          openNavBar ? "left-0" : "left-full"
        }    `}
      >
        {navBar.map((item: { url: string; menu: string }) => (
          <li className="p-2" key={item.menu}>
            <Link to={item.url}>{item.menu}</Link>
          </li>
        ))}
        <li>
          <ThemeToogle />
        </li>
      </ul>
    </>
  );
};

// const NavWeb = () => {
//   return (
//     <div className="container flex justify-between items-center py-1 px-2">
//       <span className="text-3xl items-center">MYAPP</span>
//       <ul className="flex w-full justify-between max-w-3xl text-2xl  px-4 ">
//         {navBar.map((item: { url: string; menu: string }) => (
//           <li className="p-2" key={item.menu}>
//             <Link to={item.url}>{item.menu}</Link>
//           </li>
//         ))}
//       </ul>
//       <SwitchLang
//         checked={lang === "en"}
//         className="flex items-center"
//         onClick={handleLang}
//       />
//       <ThemeToogle />
//     </div>
//   );
// };

export function Header() {
  // const [screen, setScreen] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(false);

  

  // const handleScreenNavBar = () => {
  //   const sizeScreen = window.innerWidth;
  //   setScreen(sizeScreen);
  // };

  const handleScroll = () => {
    const scroll = window.scrollY >= 20 ? true : false;
    setScroll(scroll);
  };

  useEffect(() => {
    // window.addEventListener("resize", handleScreenNavBar);
    window.addEventListener("scroll", handleScroll);
  // )
    //-----procurar mais detalhes---------

    // return () => {
    //   window.removeEventListener("resize", handleScreenNavBar);
    //   window.removeEventListener("scroll", handleScroll)
    // };
  });

  return (
    <>
      <header
        className={`fixed w-full  delay-200 duration-700 ${
          scroll === true ? `bg-background` : ``
        }`}
      >
        <NavMob  />
        {/* {screen >= 768 ? <NavWeb /> : <NavMob />} */}
      </header>
    </>
  );
}
