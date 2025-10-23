import SignIn from "@/pages/signin/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In - Direct Vibe",
    description: "Sign in to your Direct Vibe account and access your community",
};

const page = () => {
    return (
        <>
            <SignIn />
        </>
    );
};

export default page;
