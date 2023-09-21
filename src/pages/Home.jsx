/* eslint-disable react/prop-types */
import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { attributesData } from "../data/atrributes";
import { Disclosure, Transition } from '@headlessui/react'
import { faqsData } from "../data/faqs";

export default function Home() {

    return (
        <>
            <SEO
                title="Home"
                description="GetLinked Pre Hackathon Project"
            />
            <div className="min-h-[100vh] bg-[#150E28] overflow-hidden">
                <div className="border-b-[1px] border-b-[#FFFFFF2E]">
                    <Navbar className="pb-5" />
                </div>
                <Hero />
                <BigIdea />
                <Rules />
                <Attributes />
                <Faqs />
                <Timeline />
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
                <Container className="grid lg:grid-cols-2 pt-8 lg:pt-24 !px-0 lg:!pl-12">
                    <header className="grid place-items-center lg:place-items-start px-[30px] lg:px-0 lg:flex flex-col gap-5 pb-8">
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
                        <div className="w-full max-w-[535px] mx-auto grid place-items-center lg:block text-center lg:text-left">
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
                        <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute w-[1037px] h-[948px] pointer-events-none top-[400px] right-[-200px] mix-blend-hard-light" />
                        <div className="w-full max-w-[564px] mx-auto grid place-items-center lg:block text-center lg:text-left">
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

const Faqs = () => {

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container>
                <div className="flex gap-[24px] pb-14 flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[427px] pt-24">
                        <header className="text-white relative pb-14 grid place-items-center lg:block text-center lg:text-left">
                            <h1 className="relative z-2 text-[32px] font-clasdisplay font-bold">Frequently Ask </h1>
                            <h1 className="text-primary relative z-2 text-[32px] font-clasdisplay font-bold">Question</h1>
                            <p className="pt-2 text-[14px]">We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0</p>
                        </header>
                        <div>
                            {
                                faqsData.map(faq => (
                                    <Disclosure key={faq.id}>
                                        {({ open }) => (
                                            <div className="mb-5">
                                                <Disclosure.Button className="flex w-full justify-between border-b-[1px] border-primary py-2 text-left">
                                                    <span className="text-white text-[14px]">{faq.title}</span>
                                                    <span className={`material-icons self-end ${open ? "rotate-180" : "-rotate-180"} transition text-primary`}>
                                                        {open ? "remove" : "add"}
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    <Disclosure.Panel className="text-left px-2 py-2 text-[13px] text-white text-opacity-80">
                                                        {faq.content}
                                                    </Disclosure.Panel>
                                                </Transition>

                                            </div>
                                        )}
                                    </Disclosure>
                                ))
                            }
                        </div>
                    </div>
                    <figure className="flex-1">
                        <img src="/images/faqs.svg" alt="Faqs" />
                    </figure>
                </div>
            </Container>
        </div>
    )
}

const Timeline = () => {

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container className="py-20">
                <header className="w-full max-w-[346px] mx-auto text-center text-white mb-20">
                    <h1 className="text-[32px] font-clashdisplay font-bold mb-2">Timeline</h1>
                    <p className="text-[14px]">Here is the breakdown of the time we anticipate
                        using for the upcoming event.</p>
                </header>
                <section>
                    <TimelineLeft 
                        title="Hackathon Announcement"
                        content="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
                        date="November 18, 2023"
                        index="1"
                        start={true}
                    />
                    <TimelineRight 
                        index="2"
                        date="November 18, 2023"
                        title="Teams Registration begins"
                        content="Interested teams can now show their interest in the
                        getlinked tech hackathon 1.0 2023 by proceeding to register"
                    />
                    <TimelineLeft 
                        title="Teams Registration ends"
                        content="Interested Participants are no longer Allowed to
                        register"
                        date="November 18, 2023"
                        index="3"
                    />
                    <TimelineRight
                        title="Announcement of the accepted teams
                        and ideas"
                        content="All teams whom idea has been accepted into getlinked tech
                        hackathon 1.0 2023 are formally announced"
                        date="November 18, 2023"
                        index="4"
                    />
                    <TimelineLeft
                        title="Getlinked Hackathon 1.0 Offically Begins"
                        content="Accepted teams can now proceed to build their
                        ground breaking skill driven solutions"
                        date="November 18, 2023"
                        index="5"
                    />
                    <TimelineRight
                        title="Demo Day"
                        content="Teams get the opportunity to pitch their projects to judges.
                        The winner of the hackathon will also be announced on
                        this day"
                        date="November 18, 2023"
                        index="6"
                        end={true}
                    />
                </section>
            </Container>
        </div>
    )
}


const TimelineLeft = ({ title, content, index, date, start }) => {

    return (
        <div className="grid grid-cols-[1fr_70px_1fr]">
            <div className={`pr-[80px] pb-5 ${start ? "pt-24" : "pt-10"}`}>
                <h1 className="text-right text-primary text-[24px] font-bold mb-2">{title}</h1>
                <p className="text-[14px] text-white text-right">{content}</p>
            </div>
            <div className="flex justify-center relative">
                <div className="h-[58px] w-[58px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[24px] font-bold self-end mb-5 relative z-[1] border-[6px] border-[#150E28]">
                    {index}
                </div>
                <div className="absolute w-[4px] h-full bg-primary"></div>
            </div>
            <div className="pl-[80px] flex">
                <h1 className="text-left self-end text-primary text-[24px] font-bold mb-[30px]">{date}</h1>
            </div>
        </div>
    )
}

const TimelineRight = ({ title, content, index, date, end }) => {

    return (
        <div className="grid grid-cols-[1fr_70px_1fr]">
            <div className="pr-[80px] flex">
                <h1 className="flex-1 text-right mb-[30px] self-end text-primary text-[24px] font-bold mb-2">{date}</h1>
            </div>
            <div className="flex justify-center relative">
                <div className="h-[65px] w-[65px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[24px] font-bold self-end mb-5 relative z-[1] border-[10px] border-[#150E28]">
                    {index}
                </div>
                <div className={`absolute w-[4px] h-full bg-primary ${end ? "bottom-5" : ""}`}></div>
            </div>
            <div className="pl-[80px] pb-5 pt-10 text-left">
                <h1 className="text-primary text-[24px] font-bold mb-2">{title}</h1>
                <p className="text-[14px] text-white">{content}</p>
            </div>
        </div>
    )
}