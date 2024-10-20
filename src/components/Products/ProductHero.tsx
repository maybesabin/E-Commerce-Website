import { useState } from "react";
import { data } from "../../data/Products";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"

const ProductHero = () => {
    const [price, setPrice] = useState(Math.max(...data.map((item) => item.price)));
    const [company, setCompany] = useState("All");
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [filterBasedOn, setFilterBasedOn] = useState<string>("");
    const [gender, setGender] = useState("All"); // Default is All, which includes all products
    const [gridView, setGridView] = useState(true);
    const [isActive, setIsActive] = useState<string>("All"); // Track active gender

    const uniqueCompanies = [...new Set(data.map(item => item.company))];
    const uniqueCategories = [...new Set(data.map(item => item.category))];

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const renderProducts = () => {
        // Initial filtering by price
        let filteredProducts = data.filter((item) => item.price <= price);

        // Further filtering by search term (name)
        if (search) {
            filteredProducts = filteredProducts.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filtering by category
        if (gender !== "All") {
            filteredProducts = filteredProducts.filter((item) =>
                item.gender.toLowerCase() === gender.toLowerCase()
            );
        }

        if (company !== "All") {
            filteredProducts = filteredProducts.filter((item) =>
                item.company.toLowerCase() === company.toLowerCase()
            );
        }

        if (category !== "All") {
            filteredProducts = filteredProducts.filter((item) =>
                item.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Sorting based on price (Highest/Lowest)
        if (filterBasedOn === "Highest") {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (filterBasedOn === "Lowest") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name)); // Default sorting
        }

        // If no products match the filter, return a message
        if (filteredProducts.length === 0) {
            return <p className="text-left w-[400px] flex items-start justify-start">There are no such products available currently.</p>;
        }

        // Render the filtered products
        return filteredProducts.map((item) => (
            <ProductCard
                grid={gridView}
                key={item.id}
                image={item.image}
                category={item.category}
                rating={item.rating}
                name={item.name}
                price={item.price}
            />
        ));
    };

    // Function to reset all filters
    const clearFilters = () => {
        setSearch("");
        setCompany("All");
        setPrice(Math.max(...data.map((item) => item.price)));
        setFilterBasedOn("");
        setCategory("All");
    };

    const [setFilter, setShowFilter] = useState(true);


    return (
        <div className="py-12 flex items-start justify-center w-full xl:px-0 px-12 min-h-[80vh]">
            <div className="flex items-start justify-center gap-6 w-full xl:w-[80rem]">
                <div className="w-full flex items-start xl:gap-0 gap-12 lg:flex-row flex-col lg:justify-between justify-start">
                    <div className="flex flex-col items-start gap-9 lg:w-1/4 w-full">
                        <div className="flex items-center w-full gap-4">
                            <Input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="SEARCH"
                                className="outline-none px-2 py-1 w-[80%]"
                            />
                            <Button className="md:hidden flex" onClick={() => setShowFilter(!setFilter)}>{setFilter ? "Hide Filters" : "Show Filters"}</Button>
                        </div>
                        <ul className={`${setFilter ? "flex" : "hidden"} flex-col items-start gap-4`}>
                            <div className="flex lg:flex-col flex-row flex-wrap items-center gap-4">
                                <li
                                    onClick={() => {
                                        setGender("All");
                                        setIsActive("All");
                                    }}
                                    className={` cursor-pointer hover:bg-zinc-100 w-[250px] pr-4 pl-3 rounded-lg transition-all py-2 ${isActive === "All" ? "bg-zinc-200" : ""}`}
                                >
                                    All
                                </li>
                                <li
                                    onClick={() => {
                                        setGender("male");
                                        setIsActive("Men"); // Set active category to "Men"
                                    }}
                                    className={` cursor-pointer hover:bg-zinc-100 w-[250px] pr-4 pl-3 rounded-lg transition-all py-2 ${isActive === "Men" ? "bg-zinc-200" : ""}`}
                                >
                                    Men
                                </li>
                                <li
                                    onClick={() => {
                                        setGender("female");
                                        setIsActive("Women"); // Set active category to "Women"
                                    }}
                                    className={` cursor-pointer hover:bg-zinc-100 w-[250px] pr-4 pl-3 rounded-lg transition-all py-2 ${isActive === "Women" ? "bg-zinc-200" : ""}`}
                                >
                                    Women
                                </li>
                                <li
                                    onClick={() => {
                                        setGender("kids");
                                        setIsActive("Kids"); // Set active category to "Kids"
                                    }}
                                    className={` cursor-pointer hover:bg-zinc-100 w-[250px] pr-4 pl-3 rounded-lg transition-all py-2 ${isActive === "Kids" ? "bg-zinc-200" : ""}`}
                                >
                                    Kids
                                </li>
                            </div>
                        </ul>

                        <div className={`${setFilter ? "flex" : "hidden"} w-full flex-col items-start gap-4`}>
                            <h1>Company</h1>
                            <Select value={company} onValueChange={(value) => setCompany(value)}>
                                <SelectTrigger className="w-[80%]">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="All">All</SelectItem>
                                    {uniqueCompanies.map((company, idx) => (
                                        <SelectItem value={company} key={idx}>{company}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className={`${setFilter ? "flex" : "hidden"} w-full flex-col items-start gap-4`}>
                            <h1>Category</h1>
                            <Select value={category} onValueChange={(value) => setCategory(value)}>
                                <SelectTrigger className="w-[80%]">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="All">All</SelectItem>
                                    {uniqueCategories.map((category, idx) => (
                                        <SelectItem value={category} key={idx}>{category}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className={`${setFilter ? "flex" : "hidden"} flex-col items-start gap-4 w-full`}>
                            <h1>Price</h1>
                            <div className="flex flex-col items-start gap-2 w-[80%]">
                                <p>$ {price}</p>
                                <input
                                    type="range"
                                    id="progress-input"
                                    min="0"
                                    max={Math.max(...data.map((item) => item.price))}
                                    value={price}
                                    onChange={handlePriceChange}
                                    step="1"
                                    className="w-full max-w-lg cursor-pointer appearance-none bg-zinc-100 rounded-full"
                                />
                            </div>
                        </div>

                        <div className="flex items-center flex-wrap gap-4">
                            <Button className="md:flex hidden" onClick={() => setShowFilter(!setFilter)}>{setFilter ? "Hide Filters" : "Show Filters"}</Button>
                            <Button
                                variant={"destructive"}
                                onClick={clearFilters}
                                className={`${setFilter ? " flex" : "hidden"}`
                                }
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-9 w-full xl:w-3/4">
                        <div className="flex items-center flex-wrap md:gap-0 gap-6 w-full justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    title="Grid View"
                                    onClick={() => setGridView(true)}
                                    className="p-2 bg-black transition-all hover:bg-zinc-800 cursor-pointer"
                                >
                                    {/* Grid View Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        color="white"
                                        fill="white"
                                    >
                                        <path
                                            d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>

                                <div
                                    title="List View"
                                    onClick={() => setGridView(false)}
                                    className="p-2 bg-zinc-100 transition-all hover:bg-zinc-200 cursor-pointer"
                                >
                                    {/* List View Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        color="black"
                                        fill="black"
                                    >
                                        <path
                                            d="M3 6H21M3 12H21M3 18H21"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <p>Sort By</p>
                                <Select
                                    value={filterBasedOn}
                                    onValueChange={(value) => setFilterBasedOn(value)}
                                >
                                    <SelectTrigger className="w-[150px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="Highest">Highest</SelectItem>
                                        <SelectItem value="Lowest">Lowest</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div
                            className={`flex flex-wrap w-full items-start md:justify-start justify-center ${gridView
                                ? "lg:grid-cols-3 grid-cols-2 gap-12"
                                : "flex flex-col items-start justify-center gap-12"
                                }`}
                        >
                            {renderProducts()}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductHero;
