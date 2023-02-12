import React from 'react'
import { UilArrowUp, UilArrowDown, UilEqualCircle } from '@iconscout/react-unicons'
import { iconFromUrl } from '../functions/ImgLinks';

function Forecast({daily}) {
  return (
    <div>
        <div className="flex justify-start items-center mt-4">
            <p className="text-white text-sm font-normal">DAILY FORECAST</p>
        </div>
        <hr className="my-1"></hr>

        <div className="flex flex-row justify-between items-center text-white text-xs py-1 relative">
          {daily.map(day => (
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center pt-1">
                <p className="font-light text-sm">{day.time}</p>
              </div>
              <div className="flex flex-row justify-center items-center pt-1">
                <img className="w-10" src={iconFromUrl(day.icon)} alt={day.icon}/>
                <p className="font-normal text-sm ml-1">{day.temp.toFixed()}°</p>
              </div>
              <div className="flex flex-row justify-center pt-1">
                <p className="font-normal text-sm ml-1">{day.pressure} hPa</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center relative">
          <div className="flex flex-row justify-between items-center text-white w-9/12 pl-4 pr-2 pb-1 absolute -top-6">
            {daily[0].pressure < daily[1].pressure ? <UilArrowUp /> : daily[0].pressure > daily[1].pressure ? <UilArrowDown /> : <UilEqualCircle  />}
            {daily[1].pressure < daily[2].pressure ? <UilArrowUp />: daily[1].pressure > daily[2].pressure ? <UilArrowDown />: <UilEqualCircle  />}
            {daily[2].pressure < daily[3].pressure ? <UilArrowUp />: daily[2].pressure > daily[3].pressure ? <UilArrowDown />: <UilEqualCircle  />}
            {daily[3].pressure < daily[4].pressure ? <UilArrowUp />: daily[3].pressure > daily[4].pressure ? <UilArrowDown />: <UilEqualCircle  />}
          </div>
        </div>

        
    </div>
    
  )
}

export default Forecast;