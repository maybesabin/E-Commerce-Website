import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import image from "../assets/images/signinimage.jpg"
import { getUserFromLocalStorage } from "@/utils/localStorage"
import { useState } from "react"

const Signin = () => {
    const data = getUserFromLocalStorage()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (email === data.email && password == data.password) {
            console.log("data is correct");
            navigate("/")
        } else {
            console.log("incorrect")
        }
    }

    return (
        <div className="h-screen min-w-screen flex items-center justify-start xl:gap-[5rem]">
            <div className="w-1/2 h-full md:flex hidden items-center justify-center">
                <img src={image} className="object-cover h-full w-full" />
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="xl:w-1/3 md:w-1/2 w-full flex flex-col items-start justify-center gap-9 p-12 h-full">
                <h1 className="text-5xl text-[#7f83ff] font-semibold mb-4">Sign In</h1>

                <div className="flex flex-col items-start gap-2 w-full">
                    <Label htmlFor="email">Email</Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" />
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <Label htmlFor="password">Password</Label>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" name="password" />
                </div>

                <button type="submit" className="w-full bg-[#7f83ff] hover:bg-[#7f83ffed] transition-all font-medium rounded-lg text-white py-3">Sign In</button>

                <h1>Don't have an account? <Link to={"/signup"} className="text-[#7f83ff] hover:underline">Sign Up</Link></h1>
            </form>
        </div>
    )
}

export default Signin