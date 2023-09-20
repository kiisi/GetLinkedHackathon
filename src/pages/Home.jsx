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
                <Hero />
            </div>
        </>
    )
}

const Hero = () => {

    return (
        <>
            <Container className="!px-4 flex justify-end relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none top-[-300px] left-[-100px] mix-blend-hard-light" />
                <h1 className="font-bold italic py-6 lg:text-[36px] text-white">Igniting a Revolution in <span className="relative">HR Innovation <img src="/images/curved-line.svg" className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute" /></span></h1>

            </Container>
            <Container className="grid lg:grid-cols-2 pt-10">
                <div>

                </div>
                <figure>
                    {/* <img 
                        src="" 
                        alt=""
                    /> */}
                    <img 
                        src="/images/man-vr.svg" 
                        className="w-full h-full" 
                    />
                </figure>
            </Container>
        </>
    )
}