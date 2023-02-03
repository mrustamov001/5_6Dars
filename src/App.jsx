import { Routes, Route, Navigate } from "react-router-dom"
import Redirect from "./Components/Redirect"
import Details from "./Pages/details"
import Home from "./Pages/home"
import Login from "./Pages/login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  )
}

export default App
