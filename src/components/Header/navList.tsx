import dataLang, { NavBarLanguage } from "@/data/dataLang";

import { ModeToggle } from "../Shadcn/mode-toggle";
import useLanguage from "@/utils/language/useLanguage";

export function NavList(props: {
  className: string;
  handleToggleNavbar: () => void;
}) {
  const [language] = useLanguage();
  const { navBar } = dataLang[language] as NavBarLanguage;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
    }
  };


  return (
    <>
      <ul
        className={`w-full md:h-auto md:max-w-[700px] flex  flex-col md:flex-row md: md:justify-between items-center  gap-x-1 text-2xl ${props.className}`}
      >
        {navBar.map((item: { url: string; menu: string }) => (
          <li className="p-2 md:px-1 hover:text-accent" key={item.menu}>
            <div onClick={() => {props.handleToggleNavbar(); scrollToSection(item.url);}}>            
              <a href={`#${item.url}`}>{item.menu}</a>
            </div>
          </li>
        ))}
        <li className="md:hidden flex p-2">
          <ModeToggle />
        </li>
      </ul>
    </>
  );
}
