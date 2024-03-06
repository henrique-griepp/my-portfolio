
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <><Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
