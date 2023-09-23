import { timelineData } from "../../data/timeline";
import Container from "../Container";
import { TimelineLeft, TimelineMobile, TimelineRight } from "../Timeline";

export default function Timeline (){

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container className="py-20 relative">
                <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute top-[250px] left-[30%] w-[14px] h-[16px] lg:w-[30px] lg:h-[36px]" />
                <img src="/icons/star-white.svg" alt="Star White" className="absolute top-[50%] right-[15%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px]" />
                <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute bottom-[40px] lg:bottom-[110px] left-[20px] lg:left-[15%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px]" />
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