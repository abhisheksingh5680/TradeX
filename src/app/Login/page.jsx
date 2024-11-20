// "use client";


// import { useState } from "react"
// import Logo from "../../../(Components)/Logo/logo"
// import Image from "next/image"
// import Link from "next/link";
// import { useRouter } from "next/navigation"
// import axios from "axios";
// const page = () => {
//     const router = useRouter();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);


//     const handleSubmit = async (e) => {
//         e.preventDefault();


//         try {
//             const response = await axios.post(
//                 `${process.env.NEXT_PUBLIC_API_URL}/account/login/`,
//                 formData
//             );

//             if (response.data.success === true) {
//                 console.log(response);
//                 router.push("/dashboard/home");
//             } else if (response.data.msg === "Please sign up first.") {
//                 console.log("signup first")
//             } else if (response.data.msg === "Invalid password.") {
//                 console.log("invalid password")
//             }

//         } catch (error) {
//             console.log(error);

//         }
//     };

"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../(Components)/Logo/logo"
// import Brand from "../../(components)/Account/Banner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("email", formData.email);
        data.append("password", formData.password);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/account/login/`,
                formData
            );

            console.log(response)

            if (response.data.success === true) {
                console.log(response);
                router.push("/dashboard/home");
            } else if (response.data.msg === "Please sign up first.") {
                console.log("sigin first")
            } else if (response.data.msg === "Invalid password.") {
                console.log("password error")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="overflow-hidden">
            <div className=" sm:mx-2    md:w-full ">
                <div className=" bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <Logo />
                    <div class="right_div_Container" >
                        <div class="flex justify-start px-20 py-12">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div class="items-center flex flex-col " style={{ padding: "120px" }}>
                            <div class="border-gray-200  gap-8 " >
                                <div class=" font-semibold text-3xl  ">
                                    <h1 class="text-black ">Login with</h1>
                                    <h1 class="text-black">Email</h1>
                                </div>
                                <div class="relative mt-4 mb-4">
                                    <input type="email" placeholder="Email" id="email" name="email"
                                        class="w-full bg-white rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.email} onChange={handleChange} />
                                </div>
                                <div class="relative mb-5">
                                    <input type="password" placeholder="Password" id="password" name="password" class="w-full bg-white rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.password} onChange={handleChange} />
                                </div>

                                <div class="text-center mb-5 ">
                                    <h1 class="text-black"><Link href="/" class="text-[#00CE86]">I forgot password </Link></h1>
                                </div>
                                <div class="form-check mb-5">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-black text-lg py-2 px-4" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <button
                                    onClick={handleSubmit} className="text-white bg-[#00CE86] border-0 py-2 px-24 focus:outline-none  rounded text-lg">Login</button>

                            </div>
                        </div>
                        <div class="text-center mb-5 ">
                            <h1 class="text-black">Do not have an account?<Link href="/" class="text-[#00CE86] underline">Create an Account</Link></h1>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

// export default page
