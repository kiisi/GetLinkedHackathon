/* eslint-disable react/prop-types */
import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { attributesData } from "../data/atrributes";
import { Disclosure, Transition } from '@headlessui/react'
import { faqsData } from "../data/faqs";
import { TimelineLeft, TimelineMobile, TimelineRight } from "../components/Timeline";
import { timelineData } from "../data/timeline";
import Footer from "../layout/Footer";

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
                <Rewards />
                <Partners />
                <Policy />
            </div>
            <Footer />
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
                        <header className="text-white text-[32px] font-clashdisplay font-bold">
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
                            <header className="text-white text-[32px] font-clashdisplay font-bold relative ">
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
                            <header className="text-white text-[32px] font-clashdisplay font-bold relative ">
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
                            <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Frequently Ask </h1>
                            <h1 className="text-primary relative z-2 text-[32px] font-clashdisplay font-bold">Question</h1>
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
                <section className="hidden sm:block">
                    {
                        timelineData.map(tld => (
                            tld.direction === 'left' ?
                                <TimelineLeft
                                    key={tld.id}
                                    title={tld.title}
                                    content={tld.content}
                                    date={tld.date}
                                    index={tld.index}
                                    start={tld?.start}
                                    end={tld?.end}
                                />
                                :
                                <TimelineRight
                                    key={tld.id}
                                    title={tld.title}
                                    content={tld.content}
                                    date={tld.date}
                                    index={tld.index}
                                    start={tld?.start}
                                    end={tld?.end}
                                />
                        ))
                    }
                </section>
                <section className="block sm:hidden">
                    {
                        timelineData.map(tld => (
                            <TimelineMobile
                                key={tld.id}
                                title={tld.title}
                                content={tld.content}
                                date={tld.date}
                                index={tld.index}
                            />
                        ))
                    }
                </section>
            </Container>
        </div>
    )
}

const Rewards = () => {

    return (
        <div className="bg-[#110b20] py-[74px]">
            <Container>
                <header className="text-white relative grid lg:hidden text-center">
                    <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Prizes and </h1>
                    <h1 className="text-primary relative z-2 text-[32px] font-clashdisplay font-bold">Rewards</h1>
                    <p className="pt-2">Highlight of the prizes or rewards for winners and
                        for participants.
                    </p>
                </header>
                <div className="flex flex-col lg:flex-row gap-[37px]">
                    <figure className="pt-20 lg:pt-36 grid place-items-center">
                        <img src="/images/trophy.svg" alt="Trophy" />
                    </figure>
                    <div className="flex-1">
                        <header className="text-white relative hidden lg:block pl-14 pb-14 text-left">
                            <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Prizes and </h1>
                            <h1 className="text-primary relative z-2 text-[32px] font-clashdisplay font-bold">Rewards</h1>
                            <p className="pt-2">Highlight of the prizes or rewards for winners and
                                for participants.
                            </p>
                        </header>
                        <section className="pt-20 lg:pt-56 flex gap-2 max-w-max lg:max-w-full w-full mx-auto lg:mx-auto-0">
                            <div className="flex flex-1  px-2 text-center pb-5 border-primary border-[1px] rounded-[8px] w-[90px] lg:w-[212px] h-[125px] pb-[22px] lg:h-[296px] relative">
                                <img src='/images/silver-medal.svg' alt='Silver medal' className="absolute top-[-45px] left-[50%] translate-x-[-50%]" />
                                <div className="text-center text-white self-end w-full">
                                    <h3 className="font-bold text-[12px] lg:text-[32px]">2nd</h3>
                                    <h2 className="font-semibold text-[12px] lg:text-[24px]">Runner</h2>
                                    <h1 className="text-[14px] text-primary font-bold lg:pt-2">N300,000</h1>
                                </div>
                            </div>
                            <div className="relative grid place-items-center w-[125px] lg:w-[296px]">
                                <img src='/images/gold-medal.svg' alt='Gold medal' className="absolute top-[-60px] lg:top-[-40%] left-[50%] translate-x-[-50%] block" />
                                <div className="flex px-2 text-center pb-5 border-primary border-[1px] rounded-[8px] w-[90px] lg:w-[212px] h-[147px] lg:h-[347px] pb-[22px]">
                                    <div className="text-center text-white self-end w-full">
                                        <h3 className="font-bold text-[12px] lg:text-[32px]">1st</h3>
                                        <h2 className="font-semibold text-[12px] lg:text-[24px]">Runner</h2>
                                        <h1 className="text-[14px] text-primary font-bold lg:pt-2">N400,000</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 px-2 text-center pb-5 border-primary border-[1px] rounded-[8px] w-[90px] lg:w-[212px] h-[125px] lg:h-[296px] pb-[22px] relative">
                                <img src='/images/bronze-medal.svg' alt='Bronze medal' className="absolute top-[-45px] left-[50%] translate-x-[-50%]" />
                                <div className="text-center text-white self-end w-full">
                                    <h3 className="font-bold text-[12px] lg:text-[32px]">3rd</h3>
                                    <h2 className="font-semibold text-[12px] lg:text-[24px]">Runner</h2>
                                    <h1 className="text-[14px] text-primary font-bold lg:pt-2">N150,000</h1>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Partners = () => {

    return (
        <div className="bg-[#110b20] py-[74px] border-b-[1px] border-b-[#FFFFFF2E]">
            <Container className="py-20">
                <header className="text-white relative text-center mb-14">
                    <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Partners and Sponsors </h1>
                    <p className="pt-2 text-[14px] mx-auto w-full max-w-[452px] ">Getlinked Hackathon 1.0 is honored to have the following major
                        companies as its partners and sponsors
                    </p>
                </header>
                <div className="w-full max-w-[1255px] mx-auto py-20 lg:py-32 rounded-[2px] lg:rounded-[2px] border-[1px] border-primary">
                    <div className="w-full max-w-[240px] lg:max-w-[898px] mx-auto grid grid-cols-3">
                        <div className="p-5 grid place-items-center border-b-[2px] lg:border-b-[4px] border-primary relative before:content-[''] before:w-[25px] before:h-[25px] lg:before:w-[50px] lg:before:h-[50px] before:absolute before:bottom-[-12.25px] before:right-[-12.25px] lg:before:bottom-[-25px] lg:before:right-[-25px] before:bg-[#110b20]">
                            <img src='/images/liberty.svg' alt="Liberty" className="w-[30px] h-[30px] lg:w-auto lg:h-auto" />
                        </div>
                        <div className="p-5 grid place-items-center border-b-[2px] lg:border-b-[4px] border-primary border-l-[2px] lg:border-l-[4px] border-primary border-r-[2px] lg:border-r-[4px]">
                            <img src='/images/libertypay.svg' alt="Liberty" className="w-[56px] lg:w-auto lg:h-auto" />
                        </div>
                        <div className="p-5 grid place-items-center border-b-[2px] lg:border-b-[4px] border-primary relative before:content-[''] before:w-[25px] before:h-[25px] lg:before:w-[50px] lg:before:h-[50px] before:absolute before:bottom-[-12.25px] before:left-[-12.25px] lg:before:bottom-[-25px] lg:before:left-[-25px] before:bg-[#110b20]">
                            <img src='/images/winwise.svg' alt="Winwise" className="w-[34px] h-[30px] lg:w-auto lg:h-auto" />
                        </div>
                        <div className="p-5 grid place-items-center">
                            <img src='/images/wisper.svg' alt="Wisper" className="w-[39px] lg:w-auto lg:h-auto" />
                        </div>
                        <div className="p-5 grid place-items-center border-l-[2px] lg:border-l-[4px] border-r-[2px] lg:border-r-[4px] border-primary">
                            <img src='/images/paybox.svg' alt="Paybox" className="w-[54px] h-[30px] lg:w-auto lg:h-auto" />
                        </div>
                        <div className="p-5 grid place-items-center">
                            <img src='/images/vizual-plus.svg' alt="Vizual Plus" className="w-[69px] h-[30px] lg:w-auto lg:h-auto" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Policy = () => {

    return (
        <div className="bg-[#150e28] py-[74px]">
            <Container className="py-20">
                <div className="grid lg:grid-cols-2 gap-[50px]">
                    <section>
                        <header className="text-white relative mb-14">
                            <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Privacy Policy and </h1>
                            <h1 className="relative z-2 text-[32px] text-primary font-clashdisplay font-bold">Terms </h1>
                            <p className="pt-4 text-[14px] text-[#FFFFFFBF]">Last updated on September 12, 2023 </p>
                            <p className="pt-8 text-[14px]">Below are our privacy & policy, which outline a lot of goodies.
                                it&rsquo;s our aim to always take of our participant
                            </p>
                        </header>
                        <div className="border-[1px] border-primary w-full max-w-[569px] mx-auto py-[59px] rounded-[5px]">
                            <p className="text-white text-[14px] px-[15px] lg:px-[72px] leading-[30px] pb-[24px]">At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose,
                                and safeguard your data when you participate in our tech
                                hackathon event. By participating in our event, you consent
                                to the practices described in this policy.</p>
                            <div className="pl-[22px] lg:pl-[72px] pr-[22px] lg:pr-[39px]">
                                <h1 className="relative z-2 text-primary font-clashdisplay font-bold">Licensing Policy </h1>
                                <p className="text-white font-bold leading-[30px]">Here are terms of our Standard License:</p>
                                <ul className="flex flex-col gap-4 pt-5 pb-6">
                                    <li className="flex gap-4">
                                        <img src="/icons/checked.svg" alt="Checked" className="w-[17px] h-[17px] mt-2" />
                                        <p className="text-white text-[14px] leading-[30px]">The Standard License grants you a non-exclusive right to
navigate and register for our event</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <img src="/icons/checked.svg" alt="Checked" className="w-[17px] h-[17px] mt-2" />
                                        <p className="text-white text-[14px] leading-[30px]">You are licensed to use the item available at any free source
sites, for your project developement</p>
                                    </li>
                                </ul>
                                <Button className="mx-auto">Read More</Button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <figure className="flex relative h-full">
                            <img src="/images/privacy.svg" alt="Privacy" className="self-end" />
                            <img src="/images/safeguard.svg" alt="Safeguard" className="absolute top-0" />
                        </figure>
                    </section>
                </div>
            </Container>
        </div>
    )
}