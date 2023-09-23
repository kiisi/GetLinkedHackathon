import Button from "../Button";
import Container from "../Container";


export default function Policy() {

    return (
        <div className="bg-[#150e28] py-[74px]">
            <Container className="py-20 relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none mix-blend-hard-light top-[600px] min-[425px]:top-[500px] lg:top-0 lg:bottom-[-400px] left-[-20%]" />
                <div className="grid lg:grid-cols-2 gap-[50px]">
                    <section>
                        <header className="text-white relative mb-14">
                            <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute w-[8px] h-[8px] lg:w-[26px] lg:h-[32px] right-[38%] top-[-5px]" />
                            <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Privacy Policy and </h1>
                            <h1 className="relative z-2 text-[32px] text-primary font-clashdisplay font-bold">Terms </h1>
                            <p className="pt-4 text-[14px] text-[#FFFFFFBF]">Last updated on September 12, 2023 </p>
                            <p className="pt-8 text-[14px]">Below are our privacy & policy, which outline a lot of goodies.
                                it&rsquo;s our aim to always take of our participant
                            </p>
                        </header>
                        <div className="relative border-[1px] border-primary w-full max-w-[569px] mx-auto py-[59px] rounded-[5px]">
                            <img src="/icons/star-purple.svg" alt="Star Grey" className="absolute w-[17px] h-[20px] lg:w-[30px] lg:h-[36px] left-[-50px] bottom-[40%]" />
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
                            <img src="/icons/star-white.svg" alt="Star White" className="absolute w-[9px] h-[10px] lg:w-[15px] lg:h-[18px] left-[25%] bottom-[20%]" />
                            <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute w-[8px] h-[8px] lg:w-[26px] lg:h-[32px] right-[2%] bottom-[15%]" />
                            <img src="/icons/star-dark-purple.svg" alt="Star Dark Purple" className="absolute w-[15px] h-[18px] left-[30%] bottom-[30%]" />
                            <img src="/icons/star-white.svg" alt="Star White" className="absolute w-[7px] h-[8px] lg:w-[15px] lg:h-[18px] right-[22%] top-[20%]" />
                            <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute w-[17px] h-[20px] lg:w-[23px] lg:h-[28px] left-0 lg:left-[-5%] top-[20%]" />
                        </figure>
                    </section>
                </div>
            </Container>
        </div>
    )
}