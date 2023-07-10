import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"
import Home from "../pages/Home/index"
import Login from "../pages/Login/index"
import Daftar from "../pages/Daftar/index"
import Dashboard from "../pages/Dashboard/Dashboard"

const Routerku = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/daftar" element={<Daftar/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  )
}

export default Routerku