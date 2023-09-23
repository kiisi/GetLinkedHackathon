import { Disclosure, Transition } from "@headlessui/react";
import { faqsData } from "../../data/faqs";
import Container from "../Container";

export default function Faqs (){

    return (
        <div className="border-b-[1px] border-[#ffffff2e]">
            <Container>
                <div className="flex gap-[24px] pb-14 flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[427px] pt-24">
                        <header className="text-white relative pb-14 grid place-items-center lg:block text-center lg:text-left relative">
                            <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute w-[18px] h-[22px] lg:w-[30px] lg:h-[36px] left-[5px] min-[600px]:left-[70px] top-0 lg:left-[-30px] lg:top-[-50px]" />
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
                    <figure className="flex-1 pt-[160px] relative grid place-items-center">
                        <div className="absolute flex gap-12 min-[400px]:gap-20 lg:gap-28 left-0 min-[365px]:left-[10%] min-[600px]:left-[20%] top-[10px]">
                            <img src="/icons/question.svg" alt="Question mark" className="mt-[100px] w-[30px] lg:w-auto" />
                            <img src="/icons/question.svg" alt="Question mark" className="lg:w-[80px]" />
                            <img src="/icons/question.svg" alt="Question mark" className="mt-[100px] w-[30px] lg:w-auto" />
                        </div>
                        <img src="/images/faqs.svg" alt="Faqs" />
                        <img src="/icons/star-white.svg" alt="Star White" className="absolute w-[16px] h-[20px] lg:w-[26px] lg:h-[32px] bottom-0 right-[30%]" />
                        <img src="/icons/star-grey.svg" alt="Star Grey" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] bottom-[36%] left-[10%]" />
                        <img src="/icons/star-dark-purple.svg" alt="Star Dark Purple" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] top-[10%] left-[50%]" />
                        <img src="/icons/star-dark-purple.svg" alt="Star Dark Purple" className="absolute w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] top-[30%] left-[20%]" />
                    </figure>
                </div>
            </Container>
        </div>
    )
}