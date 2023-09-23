import Container from "../Container";

export default function Partners(){

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
                <div className="w-full max-w-[1255px] mx-auto py-20 lg:py-32 rounded-[2px] lg:rounded-[2px] border-[1px] border-primary relative">
                    <img src="/icons/star-purple.svg" alt="Star Purple" className="w-[8px] h-[10px] lg:w-[30px] lg:h-[36px] top-[4%] lg:top-[-40px] left-[4%] lg:left-[40px] absolute" />
                    <img src="/icons/star-white.svg" alt="Star White" className="w-[8px] h-[10px] lg:w-[30px] lg:h-[36px] bottom-[5%] lg:bottom-[35px] right-[20%] lg:right-[40%] absolute" />
                    <img src="/icons/star-dark-purple.svg" alt="Star Dark Purple" className="w-[8px] h-[10px] lg:w-[30px] lg:h-[36px] top-[100px] lg:top-[75px] right-[40%] absolute" />
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