import { useParams } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import product1 from "./assets/images/Featured Products/product1.jpg"
import product2 from "./assets/images/Featured Products/product2.jpg"
import product3 from "./assets/images/Featured Products/product3.jpg"
import product4 from "./assets/images/Featured Products/product4.jpg"
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

const FeaturedProductDetail = () => {
    const { productName } = useParams();
    const featuredProducts = [
        { productImage: product1, productName: "Comfy Winter Sweaters", previousPrice: 35, newPrice: 30 },
        { productImage: product2, productName: "Women Hoodie", previousPrice: 25, newPrice: 22 },
        { productImage: product3, productName: "Winter Jackets", previousPrice: 30, newPrice: 30 },
        { productImage: product4, productName: "Comfy Cotton Sweaters", previousPrice: 22, newPrice: 22 },
    ]

    const [product, setProduct] = useState({
        productImage: "",
        productName: "",
        previousPrice: 0,
        newPrice: 0
    });


    useEffect(() => {
        featuredProducts.forEach((e) => {
            if (e.productName.split(' ').join('') == productName) {
                setProduct(e)
            }
        })
    }, [])


    return (
        <>
            <Header />
            <div className="md:my-[9rem] my-12 flex md:flex-row flex-col md:items-start items-center justify-center gap-9 xl:px-0 px-12">
                <div className="flex flex-col md:items-start items-center gap-6 h-full">
                    <img src={product.productImage} className="w-full h-96 object-cover cursor-zoom-in" alt="" />
                    <div className="flex items-center flex-wrap w-full gap-4 lg:justify-between justify-between md:justify-start">
                        <img src={product.productImage} className="scale-x-[-1] md:h-36 md:w-24 h-28 w-16  opacity-85 cursor-pointer hover:border-2 border-black object-cover"></img>
                        <img src={product.productImage} className="md:h-36 md:w-24 h-28 w-16 opacity-85 cursor-pointer hover:border-2 border-black object-cover"></img>
                        <img src={product.productImage} className="md:h-36 md:w-24 h-28 w-16 opacity-85 cursor-pointer hover:border-2 border-black object-cover"></img>
                        <img src={product.productImage} className="scale-x-[-1] md:h-36 md:w-24 h-28 w-16 opacity-85 cursor-pointer hover:border-2 border-black object-cover"></img>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-6">
                    <h1 className="font-semibold lg:text-5xl text-3xl">{product.productName}</h1>
                    <p className="max-w-[35rem] lg:text-[1rem] lg:leading-5 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusamus necessitatibus libero iusto. Ullam rerum voluptate illum. Qui, error. Hic adipisci a ea fugit repellat!</p>
                    <h3 className="lg:text-4xl text-2xl">$ {product.previousPrice !== product.newPrice && <span className="line-through">{product.previousPrice}.00</span>}  {product.newPrice}.00</h3>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="font-semibold text-xs lg:text-[0.9rem]">Colors</h1>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#fcebd8] lg:h-11 lg:w-11 h-9 w-9 rounded-lg shadow-md cursor-pointer"></div>
                            <div className="bg-[#798e89] lg:h-11 lg:w-11 h-9 w-9 rounded-lg shadow-md cursor-pointer"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="font-semibold text-[0.9rem]">Sizes</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center lg:h-11 lg:w-11 h-9 w-9 rounded-lg shadow-md cursor-pointer">M</div>
                            <div className="flex items-center justify-center lg:h-11 lg:w-11 h-9 w-9 rounded-lg shadow-md cursor-pointer">L</div>
                            <div className="flex items-center justify-center lg:h-11 lg:w-11 h-9 w-9 rounded-lg shadow-md cursor-pointer">XL</div>
                        </div>
                    </div>
                    <Button className="px-8 text-xs">Buy Now</Button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default FeaturedProductDetail