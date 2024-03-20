import dataLang, { NavBarLanguage } from "@/data/dataLang";
import useLanguage from "@/utils/language/useLanguage";
import { Home } from "../home";

function ComposedPage() {
  const [language] = useLanguage();

  const  {home}  = dataLang[language] as NavBarLanguage;

  return (
    <>
      <main className="">
        <Home home={home} />
        <section
          id="about"
          className="h-screen bg-gradient-to-t from-transparent to-blue-500 ..."
        ></section>
      </main>
    </>
  );
}

export default ComposedPage;
