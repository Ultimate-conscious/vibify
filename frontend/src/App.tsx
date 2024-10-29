import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MusicPage } from "./pages/MusicPage"
import { LandingPage } from "./pages/Landing"
import { HostProfile } from "./pages/HostProfile"
import AdminMusicPage from "./pages/AdminMusicPage"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/room/:roomId" element={<MusicPage/>} />
          <Route path="/admin" element={<HostProfile/>} />
          <Route path="/player" element={<AdminMusicPage/>} />
        </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App
