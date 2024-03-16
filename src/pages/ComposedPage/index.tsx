
import dataLang, { NavBarLanguage } from "@/data/dataLang";


function ComposedPage() {
  
  
  const savedLang: string | null= localStorage.getItem("preferredLang");

  const langKey: string = savedLang || "en";

  const {home} = (dataLang[langKey]) as NavBarLanguage



  return (
    <>
      <main className="">
        <div id='home-container' className="h-screen flex justify-center items-center bg-gradient-to-t from-foreground to-background to-95% ">
          <section id="home" className="md:container flex font-semibold ">
              <div className="m-auto h-full flex flex-col justify-center  text-center md:text-left leading-loose gap-y-4 p-10 ">
                <div className="text-3xl ">{home[0]}</div>
                <div className={`text-5xl `}>Henrique</div>
                <div className="text-4xl ">
                  <span>{`${home[1]} `}</span> 
                  <span className="live-text text-[#40599B]">{home[2]}</span>
                </div>
              </div>
              <div className="img-home">
                <img
                  className="hidden md:flex w-[350px] rounded-full"
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
