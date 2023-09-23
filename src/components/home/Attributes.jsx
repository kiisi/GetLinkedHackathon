import { attributesData } from "../../data/atrributes";
import Button from "../Button";
import Container from "../Container";

export default function Attributes () {

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container>
                <div className="grid lg:grid-cols-2 gap-[53px] max-w-max mx-auto pt-[100px]">
                    <figure className="relative flex items-center">
                        <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute w-[13px] h-[17px] top-[-12px] left-[50%] lg:w-[30px] lg:h-[36px] translate-x-[-50%] lg:top-[80px] lg:left-[150px]" />
                        <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute w-[12px] h-[14px] left-[55%] top-[50%] lg:w-[26px] lg:h-[32px] translate-y-[-50%]" />
                        <img src="/images/attributes.svg" alt="Judging Criteria Key attributes" className="relative z-2" />
                        <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute w-[1037px] h-[948px] pointer-events-none top-[-150px] lg:top-[150px] left-[-100px] mix-blend-hard-light lg:block" />
                    </figure>
                    <div className="flex items-center pt-[78px] pb-[140px] relative">
                        <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute w-[1037px] h-[948px] pointer-events-none top-[400px] right-[-200px] mix-blend-hard-light" />
                        <div className="w-full max-w-[564px] mx-auto grid place-items-center lg:block text-center lg:text-left relative">
                            <img src="/icons/star-white.svg" alt="Star White" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] right-[5%] bottom-[20px] lg:right-0 lg:bottom-[-5px] lg:left-[-100px]" />
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