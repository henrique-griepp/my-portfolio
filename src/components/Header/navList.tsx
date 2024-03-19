import dataLang, { NavBarLanguage } from "@/data/dataLang";

import { Link } from "react-router-dom";
import { ModeToggle } from "../Theme/mode-toggle";
import useLanguage from "@/utils/language/useLanguage";

export function NavList(props: { className: string }) {
  const [language] = useLanguage()

  const { navBar } = (dataLang[language] as NavBarLanguage);
  
  return (
    <>
      <ul
        className={`w-full md:h-auto md:max-w-[700px] flex  flex-col md:flex-row md: md:justify-between items-center  gap-x-1 text-2xl ${props.className}`}
      >
        {navBar.map((item: { url: string; menu: string }) => (
          <li className="p-2 md:px-1 hover:text-primary" key={item.menu}>
            <Link to={item.url}>{item.menu}</Link>
          </li>
        ))}
        <li className="md:hidden flex p-2">
          <ModeToggle />
        </li>
      </ul>
    </>
  );
}
