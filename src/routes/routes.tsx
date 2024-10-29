import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Contact from "../pages/Contact";
import Signup from "@/pages/Signup";
import SignIn from "@/pages/Signin";
import ScrollToTop from "@/components/ScrollToTop";
import FeaturedProductDetail from "../FeaturedProductDetail";
import ProductDetail from "@/ProductDetail";

const RoutesConfig = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path={`product/:productName`} element={<FeaturedProductDetail />} />
                <Route path={`products/:productName`} element={<ProductDetail />} />
            </Routes>
        </>
    );
};

export default RoutesConfig;
