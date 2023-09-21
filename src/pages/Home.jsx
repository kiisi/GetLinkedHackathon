import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <SEO
                title="Home"
                description="GetLinked Pre Hackathon Project"
            />
            <div className="min-h-[100vh] bg-bgdark overflow-hidden">
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
            <Container className="!px-4 flex justify-center lg:justify-end relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="hidden lg:block absolute pointer-events-none lg:top-[-300px] lg:left-[-100px] mix-blend-hard-light" />
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="hidden lg:block absolute pointer-events-none top-[-100px] left-[600px] mix-blend-hard-light" />
                <h1 className="font-bold italic py-6 lg:text-[36px] text-white relative z-2">Igniting a Revolution in <span className="relative">HR Innovation <img src="/images/curved-line.svg" className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute" /></span></h1>
            </Container>
            <div className="border-b-[1px] border-[#ffffff2e]">
                <Container className="grid lg:grid-cols-2 pt-8 lg:pt-24">
                    <header className="grid place-items-center lg:place-items-start lg:flex flex-col gap-5 pb-8">
                        <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light" />
                        <div className="grid place-items-center lg:block font-clashdisplay text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2">
                            <h1>getlinked Tech</h1>
                            <h1>Hackathon&nbsp;
                                <span className="text-primary inline-block relative">1.0
                                    <img src="/icons/chain.svg" alt="chain" className="inline-block mb-2 lg:mb-0 lg:absolute w-[32px] h-[32px] lg:w-auto lg:h-auto top-[5px] left-[120px]" />
                                    <img src="/icons/fire.svg" alt="chain" className="inline-block mb-2 lg:mb-0 lg:absolute top-[20px] w-[22px] h-[22px] lg:w-auto lg:h-auto left-[205px]" />
                                </span>
                            </h1>
                        </div>
                        <p className="text-[13px] lg:text-[20px] lg:mb-5 text-white text-center lg:text-left max-w-[264px] lg:max-w-none relative z-2">Participate in getlinked tech Hackathon 2023 stand
                            a chance to win a Big prize</p>
                        <Link to='/register' className="relative z-2">
                            <Button>Register</Button>
                        </Link>
                        <div className="pt-5 text-white flex gap-6 relative z-2">
                            <div className="flex">
                                <h1 className="font-unicaone text-[64px]">00</h1>
                                <span className="text-[14px] font-primary pb-4 inline-block self-end mb-2">H</span>
                            </div>
                            <div className="flex">
                                <h1 className="font-unicaone text-[64px]">00</h1>
                                <span className="text-[14px] font-primary pb-4 inline-block self-end mb-2">M</span>
                            </div>
                            <div className="flex">
                                <h1 className="font-unicaone text-[64px]">00</h1>
                                <span className="text-[14px] font-primary pb-4 inline-block self-end mb-2">S</span>
                            </div>
                        </div>
                    </header>
                    <figure className="relative">
                        <img
                            src="/images/planet.svg"
                            alt="Planet"
                            className="absolute"
                        />
                        <img
                            src="/images/man-vr.svg"
                            alt="Man - Virtual Reality"
                            className="w-full h-full"
                        />
                    </figure>
                </Container>
            </div>
        </>
    )
}