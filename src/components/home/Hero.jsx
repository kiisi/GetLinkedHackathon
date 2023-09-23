import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import CountDown from "./CountDown";

export default function Hero (){

    return (
        <>
            <Container className="!px-4 flex justify-center lg:justify-end relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="hidden lg:block absolute pointer-events-none lg:top-[-300px] lg:left-[-100px] mix-blend-hard-light" />
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="hidden lg:block absolute pointer-events-none top-[-100px] left-[600px] mix-blend-hard-light" />
                <h1 className="font-bold italic py-6 lg:text-[36px] text-white relative z-2 text-center lg:text-right">Igniting a Revolution in <span className="relative">HR Innovation <img src="/images/curved-line.svg" className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute" /></span></h1>
            </Container>
            <div className="border-b-[1px] border-[#ffffff2e]">
                <Container className="grid lg:grid-cols-2 pt-8 lg:pt-24 !px-0 lg:!pl-12 relative">
                    <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] top-[228px] lg:top-[66%] right-[15%] lg:left-[30%] pointer-events-none" />
                    <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute lg:hidden w-[6px] h-[8px] top-[10px] right-[5%] pointer-events-none" />
                    <header className="grid place-items-center lg:place-items-start px-[30px] lg:px-0 lg:flex flex-col gap-5 pb-8">
                        <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light" />
                        <div className="grid place-items-center text-center lg:text-left lg:block font-clashdisplay text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2">
                            <img src="/icons/star-white.svg" alt="Star White" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] top-[-20px] left-[70px] lg:left-[50px] lg:top-[-120px] pointer-events-none" />
                            <h1>getlinked Te
                                <span className="inline-block relative">c <img src="/icons/light-bulb.svg" alt="light bulb" className="absolute left-[5px] lg:left-[15px] top-[-10px] lg:top-[-42px] w-[18px] h-[26px] lg:h-[73px] lg:w-[53px]" />
                                </span>
                                h</h1>
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
                        <CountDown />
                    </header>
                    <figure className="relative overflow-y-hidden">
                        <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] top-[0px] right-[90%] pointer-events-none" />
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