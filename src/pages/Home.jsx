/* eslint-disable react/prop-types */
import Navbar from "../layout/Navbar";
import SEO from "../components/Seo";
import Footer from "../layout/Footer";
import Hero from "../components/home/Hero";
import BigIdea from "../components/home/BigIdea";
import Rules from "../components/home/Rules";
import Attributes from "../components/home/Attributes";
import Faqs from "../components/home/Faqs";
import Timeline from "../components/home/Timeline";
import Rewards from "../components/home/Rewards";
import Partners from "../components/home/Partners";
import Policy from "../components/home/Policy";

export default function Home() {

    return (
        <>
            <SEO
                title="Home"
                description="GetLinked Pre Hackathon Project"
            />
            <div className="min-h-[100vh] bg-[#150E28] overflow-hidden">
                <div className="border-b-[1px] border-b-[#FFFFFF2E]">
                    <Navbar className="pb-5" />
                </div>
                <Hero />
                <BigIdea />
                <Rules />
                <Attributes />
                <Faqs />
                <Timeline />
                <Rewards />
                <Partners />
                <Policy />
            </div>
            <Footer />
        </>
    )
}