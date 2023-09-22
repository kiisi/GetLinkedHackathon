/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function MobileNavbar({ visible, closeHandler }) {

    return (
        <>
            <div
                onClick={closeHandler}
                className={`bg-[#00000066] h-[100vh] w-full fixed z-[8888] top-0 left-0 ${visible ? "block" : "hidden"}`}
            >
            </div>
            <nav className={`w-full max-w-[348px] min-h-[492px] pl-[47px] pr-[51px] py-[47px] rounded-[8px] bg-[#150E28] fixed top-0 transition-all z-[9999] ${visible ? "right-0" : "right-[-348px]"}`}>
                <div className="flex justify-end mb-12">
                    <div
                        onClick={closeHandler}
                        className="w-[23px] h-[23px] rounded-[50%] grid place-items-center close-btn-gradient">
                        <div className="grid place-items-center h-[21px] w-[21px] bg-[#150E28] rounded-[50%]">
                            <img src='/icons/close.svg' alt='Close' className="h-[11px] w-[11px]" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-white">
                        <a href="/#timeline" className="hover:text-primary">Timeline</a>
                    </span>
                    <span className="text-white">
                        <a href="/#overview" className="hover:text-primary">Overview</a>
                    </span>
                    <span className="text-white">
                        <a href="/#faqs" className="hover:text-primary">Faqs</a>
                    </span>
                    <Link to='/contact' className="text-white hover:text-primary">Contact</Link>
                    <div className="pt-4">
                        <Link to="/register">
                            <Button>Register</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}