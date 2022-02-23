export default function Forecast({temperature, hour, icon}){
    return(
        <div className="shadow-lg rounded-lg px-4 py-3 flex justify-between mt-3 items-center flex-col w-1/5 mr-2 bg-slate-200">
            <p className="h-fit">{temperature + "°C"}</p>
            <img className="h-full scale-150 my-2 mx-3" src={icon} />
            <p className="h-fit text-base font-bold">{hour + "h"}</p>
        </div>
    )
}