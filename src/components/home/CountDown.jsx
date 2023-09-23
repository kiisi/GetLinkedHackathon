import { useEffect, useState } from "react";

export default function CountDown() {

    const [textHr, setTextHr] = useState(0);
    const [textMin, setTextMin] = useState(0);
    const [textSec, setTextSec] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const futureDate = new Date("September 26, 2023 00:00:00").getTime()
            const presentDate = new Date()
            const timeRemaining = futureDate - presentDate

            if (timeRemaining <= 0) {
                clearInterval(interval); 
                console.log("Countdown has ended!");
                return;
            }

            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTextHr(hours)
            setTextMin(minutes)
            setTextSec(seconds)
        }, 1000)
    }, [])

    return (
        <div className="pt-5 text-white flex gap-4 lg:gap-6 relative z-2">
            <div className="flex">
                <h1 className="font-unicaone text-[48px] lg:text-[64px]">{textHr < 10 ? `0${textHr}` : textHr}</h1>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">H</span>
            </div>
            <div className="flex">
                <h1 className="font-unicaone text-[48px] lg:text-[64px]">{textMin < 10 ? `0${textMin}` : textMin}</h1>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">M</span>
            </div>
            <div className="flex">
                <h1 className="font-unicaone text-[48px] lg:text-[64px]">{textSec < 10 ? `0${textSec}` : textSec}</h1>
                <span className="text-[14px] font-primary pb-2 lg:pb-4 inline-block self-end mb-2">S</span>
            </div>
        </div>
    )
}