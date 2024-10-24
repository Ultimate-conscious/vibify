import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MusicPage } from "./pages/MusicPage"
import { LandingPage } from "./pages/Landing"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/player" element={<MusicPage/>} />
        </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App
