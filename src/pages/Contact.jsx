import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import { socialLinks } from "../data/links";
import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";

export default function Contact() {

    return (
        <>
            <SEO
                title="Contact"
                description="Contact Page for GetLinked Pre Hackathon Project"
            />
            <div className="bg-bgdark min-h-[100vh] overflow-hidden">
                <div className="hidden lg:block">
                    <Navbar />
                </div>
                <Container className="pt-10 lg:hidden">
                    <div className="max-w-[437px] w-full mx-auto">
                        <button className="bg-primary-gradient h-[23px] w-[23px] rounded-[50%] block p-[2px] overflow-hidden">
                            <span className="w-full h-full bg-bgdark grid place-items-center rounded-[50%]">
                                <img src="/icons/chevron-left.svg" alt="Chevron left" />
                            </span>
                        </button>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 lg:py-20 lg:px-12 flex gap-10 justify-between">
                        <div className="pt-10 hidden lg:block">
                            <h1 className="font-[ClashDisplay] text-primary text-[32px] font-semibold mb-5">Get in touch</h1>
                            <div className="flex flex-col gap-5 text-white">
                                <h2>
                                    Contact <br />Information
                                </h2>
                                <p>
                                    27, Alara Street<br /> Yaba 100012<br />Lagos State
                                </p>
                                <p>
                                    Call Us : <a href="tel:07067981819">07067981819</a>
                                </p>
                                <p className="max-w-[272px]">
                                    we are open from Monday-Friday
                                    08:00am - 05:00pm
                                </p>
                                <div className="pt-2">
                                    <h1 className="font-semibold text-primary mb-4">Share on</h1>
                                    <div className="flex gap-4 items-center">
                                        {
                                            socialLinks.map(data => (
                                                <a key={data.id} href={data.link}>
                                                    {data.icon}
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </Container>
            </div>
        </>
    )
}

const ContactForm = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        mail: "",
        message: "",
    })

    const formDataHandler = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="w-full lg:max-w-[617px] w-full py-10 py-0 lg:py-16 lg:px-6 rounded-lg lg:bg-[#ffffff08] lg:shadow-[0px_4px_4px_0px] #00000040] relative">
            <div className="w-full max-w-[437px] mx-auto">
                <header className="text-primary text-[20px] font-semibold mb-5 lg:mb-10">
                    <h1>Questions or need assistance?</h1>
                    <h1>Let us know  about it!</h1>
                </header>
                <p className="lg:hidden text-white mb-8 text-[12px]">Email us below to any question related to our event</p>
                <form className="flex flex-col gap-8 lg:gap-10">
                    <fieldset>
                        <Input
                            placeholder="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={formDataHandler}
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            placeholder="Mail"
                            name="mail"
                            value={formData.mail}
                            onChange={formDataHandler}
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={formDataHandler}
                        />
                    </fieldset>
                    <Button className="mx-auto">Submit</Button>
                    <div className="pt-2 lg:hidden max-w-max grid place-items-center mx-auto">
                        <h1 className="font-semibold text-primary mb-4">Share on</h1>
                        <div className="flex gap-4 items-center">
                            {
                                socialLinks.map(data => (
                                    <a key={data.id} href={data.link}>
                                        {data.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </form>
            </div>
            <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none top-[-25%] left-[-135%] mix-blend-hard-light" />
            <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute pointer-events-none lg:bottom-[-50%] lg:right-[-60%] mix-blend-hard-light" />
        </div>
    )
}