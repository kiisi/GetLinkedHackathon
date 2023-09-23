/* eslint-disable react/prop-types */
import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Button from "../components/Button";
import { TimelineLeft, TimelineMobile, TimelineRight } from "../components/Timeline";
import { timelineData } from "../data/timeline";
import Footer from "../layout/Footer";
import Hero from "../components/home/Hero";
import BigIdea from "../components/home/BigIdea";
import Rules from "../components/home/Rules";
import Attributes from "../components/home/Attributes";
import Faqs from "../components/home/Faqs";

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
            <Container className="relative !px-[10px] min-[320px]:!px-[30px]">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none left-[-40px] sm:left-[-100px] sm:top-[-100px] mix-blend-hard-light" />
                <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute pointer-events-none bottom-[-50px] min-[425px]:bottom-[-200px] right-[-200px] min-[425px]:right-[-300px] lg:right-[-600px] lg:bottom-[-400px] mix-blend-hard-light" />
                <header className="text-white relative grid lg:hidden text-center">
                    <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Prizes and </h1>
                    <h1 className="text-primary relative z-2 text-[32px] font-clashdisplay font-bold">Rewards</h1>
                    <p className="pt-2">Highlight of the prizes or rewards for winners and
                        for participants.
                    </p>
                </header>
                <div className="flex flex-col lg:flex-row gap-[37px]">
                    <figure className="pt-20 lg:pt-36 grid place-items-center relative z-2">
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
            <Container className="py-20 relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none mix-blend-hard-light top-[-10%] left-[-40%] md:top-[-300px] md:left-[-400px]" />
                <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute pointer-events-none mix-blend-hard-light bottom-[-20%] right-[-50%] min-[480px]:bottom-[-400px] lg:right-[-600px]" />
                <header className="text-white relative text-center mb-14">
                    <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Partners and Sponsors </h1>
                    <p className="pt-2 text-[14px] mx-auto w-full max-w-[452px] ">Getlinked Hackathon 1.0 is honored to have the following major
                        companies as its partners and sponsors
                    </p>
                </header>
                <div className="w-full max-w-[1255px] mx-auto py-20 lg:py-32 rounded-[2px] lg:rounded-[2px] border-[1px] border-primary">
                    <div className="w-full max-w-[240px] lg:max-w-[898px] mx-auto grid grid-cols-3 relative z-10">
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
            <Container className="py-20 relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none mix-blend-hard-light top-[600px] min-[425px]:top-[500px] lg:top-0 lg:bottom-[-400px] left-[-20%]" />
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
                            <div className="pl-[22px] lg:pl-[72px] pr-[22px] lg:pr-[39px] relative z-2">
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
                        <figure className="grid place-items-center relative h-full">
                            <img src="/images/privacy.svg" alt="Privacy" className="lg:self-end" />
                            <img src="/images/safeguard.svg" alt="Safeguard" className="absolute top-0" />
                        </figure>
                    </section>
                </div>
            </Container>
        </div>
    )
}