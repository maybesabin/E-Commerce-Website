import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Products from "@/pages/Products"

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    )
}

export default routes