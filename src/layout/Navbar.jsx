/* eslint-disable react/prop-types */

import Button from "../components/Button";
import Container from "../components/Container";

export default function Navbar({ className, buttonType }) {

    return (
        <Container>
            <nav className={`${className ?? ""} w-full py-10 flex items-center justify-between`}>
                <figure>
                    <img src="/getlinked.svg" alt="GetLinked logo" />
                </figure>
                <div className="flex items-center gap-20">
                    <div className="flex items-center gap-10">
                        <span className="text-white">Timeline</span>
                        <span className="text-white">Overview</span>
                        <span className="text-white">Faqs</span>
                        <span className="text-transparent bg-clip-text bg-primary-gradient">Contact</span>
                    </div>
                    {
                        buttonType === "gradient" ?
                            <button className="h-[53px] w-[172px] p-[2px] bg-primary-gradient rounded-[4px]">
                                <div className="bg-bgdark w-full h-full grid place-items-center text-white">
                                    Register
                                </div>
                            </button>
                            :
                            <Button>Register</Button>
                    }
                </div>
            </nav>
        </Container>
    )
}