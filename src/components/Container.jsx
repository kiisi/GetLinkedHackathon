/* eslint-disable react/prop-types */

export default function Container({ className, children }){

    return (
        <div className={`px-8 w-full max-w-[1400px] mx-auto ${className ?? ""}`}>{children}</div>
    )
}