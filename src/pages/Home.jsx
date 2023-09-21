import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { attributesData } from "../data/atrributes";

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
                <BigIdea />
                <Rules />
                <Attributes />
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
                <h1 className="font-bold italic py-6 lg:text-[36px] text-white relative z-2 text-center lg:text-right">Igniting a Revolution in <span className="relative">HR Innovation <img src="/images/curved-line.svg" className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute" /></span></h1>
            </Container>
            <div className="border-b-[1px] border-[#ffffff2e]">
                <Container className="grid lg:grid-cols-2 pt-8 lg:pt-24">
                    <header className="grid place-items-center lg:place-items-start lg:flex flex-col gap-5 pb-8">
                        <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light" />
                        <div className="grid place-items-center text-center lg:text-left lg:block font-clashdisplay text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2">
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
                        <div className="pt-5 text-white flex gap-4 lg:gap-6 relative z-2">
                            <div className="flex">
                                <h1 className="font-unicaone text-[48px] lg:text-[64px]">00</h1>
                                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">H</span>
                            </div>
                            <div className="flex">
                                <h1 className="font-unicaone text-[48px] lg:text-[64px]">00</h1>
                                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">M</span>
                            </div>
                            <div className="flex">
                                <h1 className="font-unicaone text-[48px] lg:text-[64px]">00</h1>
                                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">S</span>
                            </div>
                        </div>
                    </header>
                    <figure className="relative overflow-y-hidden">
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

const BigIdea = () => {

    return (
        <Container className="pt-[62px] pb-[78px]">
            <div className="grid lg:grid-cols-2 gap-[109px] max-w-max mx-auto">
                <figure>
                    <img src="/images/bigidea.svg" alt="Big Idea" />
                </figure>
                <div className="flex items-center">
                    <div className="w-full max-w-[535px] grid place-items-center lg:block text-center lg:text-left">
                        <header className="text-white text-[32px] font-clasdisplay font-bold">
                            <h1>Introduction to getlinked</h1>
                            <h1 className="text-primary">tech Hackathon 1.0</h1>
                        </header>
                        <div className="pt-2">
                            <p className="text-white text-[14px] leading-[27px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                                clear as day: to shape the future. Whether you&rsquo;re a coding genius, a
                                design maverick, or a concept wizard, you&rsquo;ll have the chance to transform
                                your ideas into reality. Solving real-world problems, pushing the boundaries
                                of technology, and creating solutions that can change the world,
                                that&rsquo;s what we&rsquo;re all about!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Rules = () => {

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container>
                <div className="grid lg:grid-cols-2 gap-[48px] max-w-max mx-auto">
                    <figure className="col-start-1 lg:col-start-2 relative">
                        <img src="/images/rules.svg" alt="Rules and Guidelines" className="relative z-2" />
                        <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="w- absolute w-[1037px] h-[948px] pointer-events-none top-[20px] right-[-350px] mix-blend-hard-light hidden lg:block" />
                    </figure>
                    <div className="flex items-center lg:row-start-1 pb-[78px]">
                        <div className="w-full max-w-[535px] grid place-items-center lg:block text-center lg:text-left">
                            <header className="text-white text-[32px] font-clasdisplay font-bold relative ">
                                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="w- absolute w-[1037px] h-[948px] pointer-events-none top-[-420px] left-[20px] mix-blend-hard-light hidden lg:block" />
                                <h1 className="relative z-2">Rules and</h1>
                                <h1 className="text-primary relative z-2">Guidelines</h1>
                            </header>
                            <div className="pt-2 relative z-2">
                                <p className="text-white text-[14px] leading-[27px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                                    clear as day: to shape the future. Whether you&rsquo;re a coding genius, a
                                    design maverick, or a concept wizard, you&rsquo;ll have the chance to transform
                                    your ideas into reality. Solving real-world problems, pushing the boundaries
                                    of technology, and creating solutions that can change the world,
                                    that&rsquo;s what we&rsquo;re all about!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Attributes = () => {

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container>
                <div className="grid lg:grid-cols-2 gap-[53px] max-w-max mx-auto pt-[100px]">
                    <figure className="relative flex items-center">
                        <img src="/images/attributes.svg" alt="Judging Criteria Key attributes" className="relative z-2" />
                        <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute w-[1037px] h-[948px] pointer-events-none top-[-150px] lg:top-[150px] left-[-100px] mix-blend-hard-light  lg:block" />
                    </figure>
                    <div className="flex items-center pb-[78px] relative">
                        <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute w-[1037px] h-[948px] pointer-events-none top-[400px] right-[-200px] mix-blend-hard-light hidden lg:block" />
                        <div className="w-full max-w-[564px] grid place-items-center lg:block text-center lg:text-left">
                            <header className="text-white text-[32px] font-clasdisplay font-bold relative ">
                                <h1 className="relative z-2">Judging Criteria</h1>
                                <h1 className="text-primary relative z-2">Key attributes</h1>
                            </header>
                            <div className="pt-8 relative z-2 flex flex-col gap-8">
                                {
                                    attributesData.map(ad => (
                                        <p key={ad.id} className="text-white">
                                            <span className="text-[#FF26B9] font-bold">{ad.title}</span> {ad.content}
                                        </p>
                                    ))
                                }
                                <Button className="mt-6 mx-auto lg:mx-0">Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}