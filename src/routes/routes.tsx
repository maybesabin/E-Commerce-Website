import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Products from "@/pages/Products"
import About from "@/pages/About"
import Contact from "../pages/Contact"
const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default routes