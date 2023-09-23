import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import { socialLinks } from "../data/links";
import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import toast from "react-hot-toast";
import appService from "../services/app";
import HttpErrorException from "../utlis/HttpErrrorException";
import validator from 'validator';
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const navigate = useNavigate()

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
                        <button onClick={() => navigate(-1)} className="bg-primary-gradient h-[23px] w-[23px] rounded-[50%] block p-[2px] overflow-hidden">
                            <span className="w-full h-full bg-bgdark grid place-items-center rounded-[50%]">
                                <img src="/icons/chevron-left.svg" alt="Chevron left" />
                            </span>
                        </button>
                    </div>
                </Container>
                <Container className="relative">
                    <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none left-[-20%] top-[0%] min-[500px]:top-[-20%] mix-blend-hard-light" />
                    <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute left-[50%] lg:left-[110px] top-[2%] lg:top-[5%] w-[11px] h-[13px] lg:w-[21px] lg:h-[25px] pointer-events-none" />
                    <div className="py-10 lg:py-28 lg:px-12 flex gap-10 justify-between">
                        <div className="pt-10 hidden lg:block relative z-2">
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

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        first_name: "",
        email: "",
        phone_number: "",
        message: "",
    })

    const formDataHandler = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submit = (e) => {
        e.preventDefault()

        if (!formData.first_name || !formData.email || !formData.phone_number || !formData.message) {
            return toast.error("All form fields are required!")
        }

        if (!validator.isEmail(formData.email)) {
            return toast.error("Invalid email!")
        }

        setLoading(true)

        appService.sendContactForm(formData)
            .then(data => {
                console.log(data)
                toast.success("Submitted Successfully!")
                setFormData({
                    first_name: "",
                    email: "",
                    phone_number: "",
                    message: "",
                })
            })
            .catch(error => {
                console.log(error)
                new HttpErrorException(error).trigger()
            })
            .finally(() => setLoading(false))

    }

    return (
        <div className="w-full lg:max-w-[617px] w-full py-10 py-0 lg:py-16 lg:px-6 rounded-lg lg:bg-[#ffffff08] lg:shadow-[0px_4px_4px_0px] #00000040] relative">
            <img src="/icons/star-purple.svg" alt="Star Purple" className="absolute w-[12px] h-[14px] lg:w-auto lg:h-auto left-[-14px] bottom-[22%] pointer-events-none" />
            <img src="/icons/star-white.svg" alt="Star White" className="absolute w-[12px] h-[14px] lg:w-auto lg:h-auto right-[-15px] lg:right-[-80px] bottom-[32%] lg:bottom-[0px] pointer-events-none" />
            <img src="/icons/star-grey.svg" alt="Star Grey" className="w-[16px] h-[20px] lg:w-auto lg:h-auto absolute top-[8%] right-[5%] lg:right-[10px] lg:top-[-80px] pointer-events-none" />
            <div className="w-full max-w-[437px] mx-auto">
                <header className="text-primary text-[20px] font-semibold mb-5 lg:mb-10">
                    <h1>Questions or need assistance?</h1>
                    <h1>Let us know  about it!</h1>
                </header>
                <p className="lg:hidden text-white mb-8 text-[12px]">Email us below to any question related to our event</p>
                <form className="flex flex-col gap-8 lg:gap-10" onSubmit={submit}>
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
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={formDataHandler}
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            placeholder="Phone number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={formDataHandler}
                        />
                    </fieldset>
                    <fieldset>
                        <textarea
                            className="w-full bg-transparent text-white border-[1px] border-white placeholder-white outline-primary shadow-md rounded-md px-3 lg:px-5 py-2 h-[119px] custom-scroll-bar resize-none"
                            rows={5}
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={formDataHandler}
                        />
                    </fieldset>
                    <Button
                        className="mx-auto"
                        type="submit"
                        loading={loading}
                    >
                        Submit
                    </Button>
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
            <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute pointer-events-none lg:bottom-[-50%] lg:right-[-60%] mix-blend-hard-light" />
        </div>
    )
}