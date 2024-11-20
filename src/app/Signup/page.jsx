



import Logo from "../../../(Components)/Logo/logo"
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image"

export default function Signup() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company_name: "",
        role: "",
        phone_number: "",
        password: "",
        confirmpassword: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (formData.password !== formData.confirmpassword) {
            setError("Your password is incorrect.");
            setLoading(false);
            return;
        }

        if (!formData.terms) {
            setError(
                "You must agree to the Terms & Conditions and Privacy Policy to create an account."
            );
            setLoading(false);
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("company_name", formData.company_name);
        data.append("role", formData.role);
        data.append("phone_number", formData.phone_number);
        data.append("password", formData.password);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/account/userSignUp/`,
                formData
            );
            console.log(response);
            if (response.data.success === true) {
                sessionStorage.setItem("email", response.data.email);
                sessionStorage.setItem("phone_number", response.data.phone_number);

                router.push("/account/verify-account/");
            } else if (response.data.msg === "Email already exists.") {
                setError("Email already exists");
                router.push("/account/verify-account");
            } else if (response.data.msg === "Invalid password.") {
                setError("Your password is incorrect.");
            } else {
                setError("Login failed. Please check your credentials.");
            }

            setLoading(false);
        } catch (error) {
            setError("Sorry, something went wrong. Please try again in a moment.");
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <section className="overflow-hidden" >
            <div className="container sm:mx-2    md:w-full">
                <div className="bg-[#E8F9F3] grid grid-cols-1 sm:grid-cols-2 gap-4 px-1  py-2">
                    <Logo />
                    <div className="right_div_Container">
                        <div className="flex justify-center sm:justify-start sm:px-20 sm:py-12 py-4">
                            <Image src="/assests/logo.png" width={150} alt="project logo" height={100} />
                        </div>
                        <div className="flex justify-center ml-[30px] sm:justify-start ">
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#00CE86] rounded-full p-5">
                                    <span className="text-[#fff]">1</span>
                                </div>
                                <span className="seprator" style={{ width: "80px", height: "2px", backgroundColor: "#fff" }}>  </span>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">2</span>
                                </div>
                                <span className="seprator" style={{ width: "80px", height: "2px", backgroundColor: "#fff" }}>  </span>
                            </div>
                            <div className="circle_separtor flex items-center">
                                <div className="bg_circle bg-[#fff] rounded-full p-5">
                                    <span className="text-[#00CE86]">3</span>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center sm:justify-start sm:px-10 pt-6 sm:pt-10">
                            <div className="border-gray-200 ">
                                <div className="font-semibold text-2xl sm:text-3xl pb-6 sm:pb-8">
                                    <h1 className="text-black">Signup with Email ID</h1>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative flex">
                                        <input value={formData.name}
                                            onChange={handleChange}
                                            disabled={loading} type="text" placeholder="Name" id="name" name="name" className="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 px-4 py-2 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative">
                                        <input value={formData.email}
                                            onChange={handleChange}
                                            disabled={loading} type="email" placeholder="Email" id="email" name="email" className="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative flex">
                                        <input value={formData.company_name}
                                            onChange={handleChange}
                                            disabled={loading} type="text" placeholder="Company Name" id="company_name" name="coname" className="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative flex">
                                        <input value={formData.phone_number}
                                            onChange={handleChange}
                                            disabled={loading} type="number" placeholder="Phone Number" id="phone_number" name="number" className="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative mb-5">
                                        <input value={formData.password}
                                            onChange={handleChange}
                                            disabled={loading} type="password" placeholder="Password" id="password" name="pswd" className="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative mb-5">
                                        <input value={formData.confirmpassword}
                                            onChange={handleChange}
                                            disabled={loading} type="password" placeholder="Confirm Password" id="confirmpassword" name="cpswd" className="w-full bg-white rounded-lg focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="inputfield pt-4 flex gap-4 mb-5">
                                    <input className="text-center p-1 h-10 w-10 rounded-lg border-2 bg-[#00CE86] border-[#e1e1e1]" type="text" maxLength="1" />
                                    <input className="text-center p-1 h-10 w-10 rounded-lg border-2 bg-[#00CE86] border-[#e1e1e1]" type="text" maxLength="1" />
                                    <input className="text-center p-1 h-10 w-10 rounded-lg border-2 bg-[#00CE86] border-[#e1e1e1]" type="text" maxLength="1" />
                                    <input className="text-center p-1 h-10 w-10 rounded-lg border-2 border-[#e1e1e1]" type="text" maxLength="1" />
                                    <input className="text-center p-1 h-10 w-10 rounded-lg border-2 border-[#e1e1e1]" type="text" maxLength="1" />
                                </div>
                                <div className="mb-5">
                                    <h1 className="text-black">Strong password! Dont ever share it</h1>
                                </div>
                                <div className="form-check mb-5">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-black text-lg py-2 px-4" htmlFor="flexCheckDefault">
                                        I accept all <a className="underline text-[#00CE86]">terms & conditions</a> & <a className="underline text-[#00CE86]">privacy policy</a>
                                    </label>
                                </div>
                                <button onClick={handleSubmit} className="text-white bg-[#00CE86] border-0 py-2 px-10 sm:px-32 focus:outline-none rounded text-lg">Next</button>
                            </div>
                        </div>
                        <div className="text-center mb-12">
                            <h1 className="text-black">Do not have an account? <a className="text-[#00CE86] underline">Create an Account</a></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


