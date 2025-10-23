import Navbar from "@/components/UI/navbar/Navbar";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;
