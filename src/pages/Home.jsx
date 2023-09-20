import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Container from "../components/Container";

export default function Home() {

    return (
        <>
            <SEO
                title="Home"
                description="GetLinked Pre Hackathon Project"
            />
            <div className="min-h-[100vh] bg-bgdark">
                <div className="border-b-[1px] border-b-[#FFFFFF2E]">
                    <Navbar className="pb-5" />
                </div>
                <Container className="!px-4 flex justify-end">
                    <h1 className="font-bold italic py-6 lg:text-[36px] text-white">Igniting a Revolution in <span className="relative">HR Innovation <img src="/images/curved-line.svg" className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute"/></span></h1>
                </Container>
            </div>
        </>
    )
}