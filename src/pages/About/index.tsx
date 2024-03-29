type NavBarType = {
    menu: string
}

type AboutType = {
  content: {
    navBar: NavBarType[];
    about: string[];
  };
};

export const About = ({content}: AboutType) => {

  return (
    <section id="about" className="container flex flex-col items-center ">
      <div className="">
        <h2 className="title-section">{content.navBar[1].menu}</h2>
      </div>
     <hr className="w-1/2 border-1 m-8 " />
      <div className="container flex flex-col md:flex-row m-5">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            className=" size-60 md:size-80  rounded-full m-8 hover:scale-110 transition   "
            src="https://avatars.githubusercontent.com/u/104803272?v=4"
            alt="Foto Perfil"
          />
        </div>
        <div className="md:w-1/2 min-w-[300px]" >
          {content.about.map((item, index ) => (
            <p key={index }className=" indent-5 p-2 text-justify">{item}  </p>
          ))}
        </div>
      </div>
    </section>
  );
};
