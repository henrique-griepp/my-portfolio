
import { Header } from "@/components/Header";

// import  ChangeLanguage  from "@/utils/language";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  // const  handleLang  = ChangeLanguage()

  return (
    <>
    <Header />
    <button className="h-100% flex justify-center" >hfgj</button>
      <main>
        <Outlet />
      </main>
    </>
  );
}
