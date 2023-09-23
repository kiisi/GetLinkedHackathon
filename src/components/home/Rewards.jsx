import Container from "../Container";

export default function Rewards(){

    return (
        <div className="bg-[#110b20] py-[74px]">
            <Container className="relative !px-[10px] min-[320px]:!px-[30px]">
                <img src="/icons/star-purple.svg" alt="Star Purple" className="w-[7px] h-[9px] lg:w-[21px] lg:h-[25px] absolute top-[20px] left-[5%] lg:left-[20%]" />
                <img src="/icons/star-purple.svg" alt="Star Purple" className="w-[7px] h-[9px] lg:w-[21px] lg:h-[25px] absolute top-[80px] right-[5%] lg:right-[20%]" />
                <img src="/icons/star-white.svg" alt="Star White" className="w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] absolute top-[80%] lg:top-[50%] right-[3%] lg:right-[1%]" />
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none left-[-40px] sm:left-[-100px] sm:top-[-100px] mix-blend-hard-light" />
                <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute pointer-events-none bottom-[-50px] min-[425px]:bottom-[-200px] right-[-200px] min-[425px]:right-[-300px] lg:right-[-600px] lg:bottom-[-400px] mix-blend-hard-light" />
                <header className="text-white relative grid lg:hidden text-center">
                    <h1 className="relative z-2 text-[32px] font-clashdisplay font-bold">Prizes and </h1>
                    <h1 className="text-primary relative z-2 text-[32px] font-clashdisplay font-bold">Rewards</h1>
                    <p className="pt-2">Highlight of the prizes or rewards for winners and
                        for participants.
                    </p>
                </header>
                <div className="flex flex-col lg:flex-row gap-[37px] relative">
                    <figure className="pt-20 lg:pt-36 grid place-items-center relative z-2">
                        <img src="/images/trophy.svg" alt="Trophy" />
                        <img src="/icons/star-white.svg" alt="Star White" className="w-[10px] h-[12px] lg:w-[15px] lg:h-[16px] absolute bottom-[0px] left-[20%] lg:left-[50%] translate-x-[-50%]" />
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