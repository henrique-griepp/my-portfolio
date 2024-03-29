import dataLang, { NavBarLanguage } from "@/data/dataLang";
import useLanguage from "@/utils/language/useLanguage";
import { Home } from "../home";
import { About } from "../About";

function ComposedPage() {
  const [language] = useLanguage();

  const  content  = dataLang[language] as NavBarLanguage;

  return (
    <>
      <main className="">
        <Home home={content.home} />
        <About content={content}/>
      </main>
    </>
  );
}

export default ComposedPage;
