import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme/theme-provider"
import { MusicPage } from "./pages/Room"
import { LandingPage } from "./pages/Landing"
import { AdminDashboard } from "./pages/AdminDashboard"
import AdminMusicPage from "./pages/AdminRoomPage"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/room/:roomId" element={<MusicPage/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/admin-room/:roomId" element={<AdminMusicPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
