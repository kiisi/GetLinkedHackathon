import Container from "../Container";

export default function BigIdea (){

    return (
        <div className="border-b-[1px] border-[#ffffff2e]" id="overview">
            <Container className="pt-[62px] pb-[78px]">
                <div className="grid lg:grid-cols-2 gap-[109px] max-w-max mx-auto">
                    <figure className="relative">
                        <img src="/images/bigidea.svg" alt="Big Idea" />
                        <img src="/icons/arrow.svg" alt="Arrow" className="absolute w-[19px] h-[22px] lg:w-[49px] lg:h-[57px] bottom-[-15px] translate-x-[-50%] right-[50%] lg:right-[0px] lg:bottom-[0px] pointer-events-none" />
                        <img src="/icons/star-dark-purple.svg" alt="Star Purple" className="absolute pointer-events-none w-[8px] h-[10px] lg:w-[21px] lg:h-[25px] left-[-20px] top-[35%] translate-y-[-50%]" />
                    </figure>
                    <div className="flex items-center">
                        <div className="w-full max-w-[535px] grid place-items-center lg:block text-center lg:text-left">
                            <header className="text-white text-[32px] font-clashdisplay font-bold relative">
                                <h1>Introduction to getlinked</h1>
                                <h1 className="text-primary">tech Hackathon 1.0</h1>
                                <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute pointer-events-none w-[8px] h-[10px] lg:w-[30px] lg:h-[36px] right-0 top-[50%] translate-y-[-50%]" />
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
        </div>
    )
}