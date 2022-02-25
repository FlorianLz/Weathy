export default function ForecastNextDays({temperature, date, icon}){
    return(
        <div className="snap-start shadow-lg rounded-lg px-4 py-3 flex justify-between mt-3 items-center flex-col w-[58px] mr-2 bg-slate-200">
            <p className="h-fit">{temperature + "°C"}</p>
            <img className="h-[30px] my-2 " src={icon} />
            <p className="h-fit text-base font-bold">{date}</p>
        </div>
    )
}