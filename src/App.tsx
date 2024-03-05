import { ThemeProvider } from "./components/theme-provider"
import  "../app/globals.css"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
