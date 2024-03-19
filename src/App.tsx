import { ThemeProvider } from "./components/Theme/theme-provider";
import "../app/globals.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { LanguageProvider } from "./utils/language/LanguageContext";

function App() {
  return (
    <LanguageProvider >
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
