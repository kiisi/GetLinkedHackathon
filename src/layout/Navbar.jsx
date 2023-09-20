/* eslint-disable react/prop-types */

export default function Navbar({ className }){

    return (
        <nav className={`${className ?? "w-full"} py-5 flex justify-between py-4`}>
            <figure>
                <img src="/getlinked.svg" alt="GetLinked logo" />
            </figure>
            <div>

            </div>
        </nav>
    )
}