import dataLang, { NavBarLanguage } from "@/data/dataLang";
import useLanguage from "@/utils/language/useLanguage";

function ComposedPage() {
  const [language] = useLanguage();

  const { home } = dataLang[language] as NavBarLanguage;

  return (
    <>
      <main className="">
        <div
          id="home-container"
          className="h-screen min-h-[400px] flex justify-center items-center bg-gradient-to-t from-foreground to-background to-95% "
        >
          <section
            id="home"
            className=" w-full max-w-[1200px] flex justify-around font-semibold "
          >
            <div className="my-auto h-full  flex flex-col text-center md:text-left leading-loose gap-y-4 p-8 sm:p-7 md:p-5 ">
              <div className="text-3xl ">{home[0]}</div>
              <div className={`text-5xl `}>Henrique</div>
              <div className="text-4xl ">
                <span>{`${home[1]} `}</span>
                <span className="live-text text-[#40599B]">{home[2]}</span>
              </div>
            </div>
            <div className="hidden md:flex justify-end ">
              <img
                className=" md:flex  md:max-w-[20rem] lg:max-w-[22rem] rounded-full p-8 sm:p-7 md:p-5 hover:scale-110 transition   "
                src="https://avatars.githubusercontent.com/u/104803272?v=4"
                alt="Foto Perfil"
              />
            </div>
          </section>
        </div>
        <section
          id="2"
          className="h-screen bg-gradient-to-t from-transparent to-blue-500 ..."
        ></section>
      </main>
    </>
  );
}

export default ComposedPage;
