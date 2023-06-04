import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"
import Home from "../pages/Home/index"
import About from "../pages/About/index"

const Routerku = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  )
}

export default Routerku