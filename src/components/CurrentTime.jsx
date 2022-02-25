import {useEffect, useState} from "react";

export default function CurrentTime(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <p className="font-semibold pb-4 text-center text-2xl">{time.toLocaleTimeString()}</p>
    );
}