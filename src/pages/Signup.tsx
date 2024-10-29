import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import image from "../assets/images/signupimage.jpg";
import { useState } from "react";

interface UserData {
    firstName: string;
    email: string;
    password: string;
}

const saveUserToLocalStorage = (userData: UserData) => {
    localStorage.setItem("user", JSON.stringify(userData));
};


const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData: UserData = { firstName, email, password };
        saveUserToLocalStorage(userData);
        navigate("/signin");
    };

    return (
        <div className="h-screen min-w-screen flex items-center justify-start xl:gap-[5rem]">
            <div className="w-1/2 h-full md:flex hidden items-center justify-center">
                <img src={image} className="object-cover h-full w-full" alt="Signup" />
            </div>
            <form onSubmit={handleSubmit} className="xl:w-1/3 md:w-1/2 w-full flex flex-col items-start justify-center gap-9 p-12 h-full">
                <h1 className="text-5xl text-[#7f83ff] font-semibold mb-4">Sign Up</h1>
                <div className="flex lg:flex-row flex-col lg:items-center items-start justify-start gap-9 w-full">
                    <div className="flex flex-col items-start lg:w-1/2 w-full gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} required type="text" name="firstName" />
                    </div>
                    <div className="flex flex-col items-start lg:w-1/2 w-full gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input required type="text" name="lastName" />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <Label htmlFor="email">Email</Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" />
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <Label htmlFor="password">Password</Label>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" name="password" />
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox required id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>

                <button type="submit" className="w-full bg-[#7f83ff] hover:bg-[#7f83ffed] transition-all font-medium rounded-lg text-white py-3">Sign up</button>

                <h1>Already have an account? <Link to={"/signin"} className="text-[#7f83ff] hover:underline">Sign In</Link></h1>
            </form>
        </div>
    );
};

export default Signup;
