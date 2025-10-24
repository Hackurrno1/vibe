"use client";
import { Eye, EyeOff, OctagonX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import validateForm from "../../utils/validateForm";

const Register = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passVisible, setPassVisible] = useState<boolean>(false);
    const [errors, setErrors] = useState({
        emailError: "border-blue-400",
        passwordError: "border-blue-400",
    });
    const [errorMessages, setErrorMessages] = useState({
        emailMessage: "",
        passwordMessage: "",
    });

    const handlePasswordVisible = () => {
        setPassVisible((prev) => !prev);
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationResult = validateForm(email, password);

        setErrors({
            emailError: validationResult.emailError,
            passwordError: validationResult.passwordError,
        });

        setErrorMessages({
            emailMessage: validationResult.emailMessage || "",
            passwordMessage: validationResult.passwordMessage || "",
        });

        if (validationResult.isValid) {
            console.log("Form is valid, proceeding with registration:", { email, password });
        } else {
            console.log("Form validation failed:", validationResult);
        }
    };

    return (
        <>
            <div className="w-full bg-background-primary/90">
                <div className="max-w-[1440px] px-4 pt-20 sm:px-8 lg:px-20 mx-auto lg:h-[calc(100vh-40px)] flex flex-col lg:flex-row justify-center lg:justify-between items-center relative py-8 lg:py-0">
                    <div className="w-80 h-64 lg:w-120 lg:h-100 absolute bottom-0 lg:translate-y-0 translate-y-1/2 lg:bottom-auto left-1/2 -translate-x-1/2 z-0  lg:top-auto">
                        <Image
                            src={"/images/auth/man-falling.png"}
                            alt="man-falling"
                            fill
                            loading="eager"
                            sizes="(max-width: 768px) 320px, (max-width: 1024px) 480px, 1200px"
                            className="animate-levitate"
                        />
                    </div>
                    <div className="bg-blue-500/20 w-32 h-32 sm:w-40 sm:h-40 lg:w-100 lg:h-100 rounded-full absolute blur-3xl top-10 lg:top-auto" />

                    <div className="flex flex-col gap-6 lg:gap-10 tracking-wider z-10 text-center lg:text-left mb-8 lg:mb-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight lg:leading-16">
                            <span className="text-blue-400">Register</span> <br />{" "}
                            <span className="hidden lg:inline-block">to direct vibe</span>
                        </h1>
                        <p className="font-semibold text-sm sm:text-base hidden lg:block">
                            If you already have an account <br /> you can{" "}
                            <Link href={"/signin"} className="text-blue-500 animate-pulse">
                                Sign in here!
                            </Link>
                        </p>
                    </div>

                    <form
                        onSubmit={handleRegister}
                        className="w-full max-w-md lg:w-[30%] lg:min-w-[400px] flex flex-col gap-4 z-10"
                    >

                        <div
                            className={`bg-input-primary px-3 sm:px-4 py-4 sm:py-5 rounded-2xl border ${errors.emailError} shadow-md flex items-center justify-between relative`}
                        >
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="outline-none w-[80%] text-sm sm:text-base"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <div onClick={() => setEmail("")}>
                                <OctagonX className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                            </div>                  
                        </div>
                        <div className="h-2">{errorMessages.emailMessage && (
                                <p className={`text-xs font-semibold ml-2 ${
                                    errors.emailError === "border-green-400" 
                                        ? "text-green-500" 
                                        : "text-red-500"
                                }`}>
                                    {errorMessages.emailMessage}
                                </p>
                            )}</div>
                        <div
                            className={`bg-input-primary px-3 sm:px-4 py-4 sm:py-5 rounded-2xl border ${errors.passwordError} shadow-md flex items-center justify-between relative`}
                        >
                            <input
                                type={passVisible ? "text" : "password"}
                                placeholder="Enter Password"
                                className="outline-none w-[80%] text-sm sm:text-base"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <div onClick={handlePasswordVisible} className="cursor-pointer">
                                {passVisible ? (
                                    <EyeOff className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                                ) : (
                                    <Eye className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                                )}
                            </div>
                        </div>
                            <div className="h-2">
                            {errorMessages.passwordMessage && (
                                <p className={`text-xs font-semibold ml-2 ${
                                    errors.passwordError === "border-green-400" 
                                        ? "text-green-500" 
                                        : "text-red-500"
                                }`}>
                                    {errorMessages.passwordMessage}
                                </p>
                            )}
                            </div>

                        <button className="bg-blue-500 rounded-2xl text-white py-3 sm:py-4 mt-5 shadow-2xl shadow-blue-500 font-semibold text-sm sm:text-base">
                            Register
                        </button>
                        <div className="flex flex-col gap-6 sm:gap-8 mt-5">
                            <div className="flex flex-row gap-2 justify-between items-center">
                                <div className="w-[30%] h-0.5 bg-gray-300" />
                                <p className="text-gray-400 text-sm sm:text-base">or continue with</p>
                                <div className="w-[30%] h-0.5 bg-gray-300" />
                            </div>
                                <button className="w-full px-4 sm:px-6 lg:px-8 py-3 rounded-xl bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:bg-blue-50 hover:-translate-y-1 flex items-center justify-center">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 relative transition-transform duration-300 hover:scale-110">
                                    <Image src={"/images/auth/google-icon.svg"} alt="google-icon" fill />
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
