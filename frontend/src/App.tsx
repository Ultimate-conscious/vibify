import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MusicPage } from "./pages/MusicPage"
import { LandingPage } from "./pages/Landing"
import { HostProfile } from "./pages/HostProfile"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/player" element={<MusicPage/>} />
          <Route path="/admin" element={<HostProfile/>} />
        </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App
