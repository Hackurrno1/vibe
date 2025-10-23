import Register from "@/pages/register/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register - Direct Vibe",
    description: "Create your account and join Direct Vibe community",
};

const page = () => {
    return (
        <>
            <Register />
        </>
    );
};

export default page;
