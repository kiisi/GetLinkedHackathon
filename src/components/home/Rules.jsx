import Container from "../Container";

export default function Rules (){

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container className="relative">
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none mix-blend-hard-light left-[-100px] min-[525px]:left-[-150px] top-[-100px] min-[525px]:top-[-200px] lg:top-[-280px]" />
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none top-[250px] min-[600px]:top-[300px] lg:top-[20px] right-[-200px] min-[600px]:right-[-400px] lg:right-[-600px] mix-blend-hard-light" />
                <div className="grid lg:grid-cols-2 gap-[48px] max-w-max mx-auto">
                    <figure className="col-start-1 lg:col-start-2 relative">
                        <img src="/icons/star-white.svg" alt="Star Purple" className="absolute pointer-events-none w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] left-[10px] top-[50%] lg:top-[80%] lg:left-[-20px] translate-y-[-50%]" />
                        <img src="/images/rules.svg" alt="Rules and Guidelines" className="relative z-2" />
                    </figure>
                    <div className="flex items-center lg:row-start-1 py-[78px]">
                        <div className="w-full max-w-[535px] mx-auto grid place-items-center lg:block text-center lg:text-left">
                            <header className="text-white text-[32px] w-full font-clashdisplay font-bold relative ">
                                <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute top-[80px] right-[0px] lg:right-0 lg:top-[-15px] lg:left-[280px] w-[12px] h-[14px] lg:w-[26px] lg:h-[32px]pointer-events-none" />
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