type HomeType = {
    home: string[]
}

export const Home  = (home: HomeType)  => {
    return(
        <div
          id="home-container"
          className="h-screen min-h-[400px] flex justify-center items-center bg-gradient-to-t from-blue-200 to-background to-95% "
        >
          <section
            id="home"
            className=" w-full max-w-[1200px] flex  justify-around font-semibold "
          >
            <div className="my-auto md:w-1/2 h-full flex flex-col text-center md:text-left leading-loose gap-y-4 md:p-5 scale-90 sm:scale-100">
              <div className="text-3xl ">{home.home[0]}</div>
              <div className={`text-5xl `}>Henrique</div>
              <div className="text-4xl md:flex flex-wrap">
                <p className="pb-4 pr-2 whitespace-nowrap">{`${home.home[1]}`}</p>
                <p className="min-w-[320px] live-text text-popover whitespace-nowrap">{home.home[2]}</p>
              </div>
            </div>
            <div className="hidden md:w-1/2 md:max-w-[350px] md:flex justify-end ">
              <img
                className=" md:flex  rounded-full m-8  md:p-5 hover:scale-110 transition   "
                src="https://avatars.githubusercontent.com/u/104803272?v=4"
                alt="Foto Perfil"
              />
            </div>
          </section>
        </div>
    )
}


