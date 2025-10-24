"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();

    return (
        <div className="w-full relative top-10 z-50 bg-transparent">
            <div className="max-w-[1440px] px-5 md:px-20 m-auto flex flex-row justify-between items-center text-xs sm:text-sm font-semibold text-black/70">
                <div className="flex gap-1 md:gap-10 text-blue-500">
                    <Link
                        href={"/signin"}
                        className={`${
                            pathName === "/signin" ? "" : "bg-white rounded-2xl shadow-md"
                        } relative px-3 py-1.5`}
                    >
                        <div
                            className={`${
                                pathName === "/signin" ? "" : "hidden"
                            } absolute w-[30%] h-0.5 bg-blue-500 bottom-0 left-1/2 -translate-x-1/2`}
                        />
                        Sign in
                    </Link>
                    <Link
                        href={"/register"}
                        className={`${
                            pathName === "/register" ? "" : "bg-white rounded-2xl shadow-md"
                        } relative px-3 py-1.5`}
                    >
                        <div
                            className={`${
                                pathName === "/register" ? "" : "hidden"
                            } absolute w-[30%] h-0.5 bg-blue-500 bottom-0 left-1/2 -translate-x-1/2`}
                        />
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
