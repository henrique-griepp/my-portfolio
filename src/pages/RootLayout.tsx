
import { Header } from "@/components/Header";

// import  ChangeLanguage  from "@/utils/language";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  // const  handleLang  = ChangeLanguage()

  return (
    <>
    <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
