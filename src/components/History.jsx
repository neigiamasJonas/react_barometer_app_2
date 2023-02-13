import React from 'react'
import { UilArrowUp, UilArrowDown, UilEqualCircle } from '@iconscout/react-unicons'
import { iconFromUrl } from '../functions/ImgLinks';

function History({hist}) {

let historyArray = [hist.data1[0], hist.data2[0], hist.data3[0], hist.data4[0], hist.data5[0]];
historyArray.reverse();

  return (
    <div>
        <div className="flex justify-start items-center mt-3">
            <p className="text-white font-normal text-sm">DAILY AVERAGE HISTORY</p>
        </div>
        <hr className="my-1"></hr>

        <div className="flex flex-row justify-between items-center text-white text-xs py-1">
          {historyArray.map(day => (

            <div className="flex flex-col justify-center" key={day.time}>
              <div className="flex flex-row justify-center pt-2">
                <p className="font-light text-sm">{day.time}</p>
              </div>
              <div className="flex flex-row justify-center items-center pt-1" key={day.temp}>
                <img className="w-10" src={iconFromUrl(day.icon)} alt={day.icon}/>
                <p className="font-normal text-sm ml-1">{day.temp.toFixed()}°</p>
              </div>
              <div className="flex flex-row justify-center pt-2" key={day.pressure}>
                <p className="font-normal text-sm ml-1">{day.pressure} hPa</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center relative">
          <div className="flex flex-row justify-between items-center text-white w-9/12 pl-4 pr-2 pb-1 absolute -top-6">
            {historyArray[0].pressure < historyArray[1].pressure ? <UilArrowUp /> : historyArray[0].pressure > historyArray[1].pressure ? <UilArrowDown /> : <UilEqualCircle  />}
            {historyArray[1].pressure < historyArray[2].pressure ? <UilArrowUp />: historyArray[1].pressure > historyArray[2].pressure ? <UilArrowDown />: <UilEqualCircle  />}
            {historyArray[2].pressure < historyArray[3].pressure ? <UilArrowUp />: historyArray[2].pressure > historyArray[3].pressure ? <UilArrowDown />: <UilEqualCircle  />}
            {historyArray[3].pressure < historyArray[4].pressure ? <UilArrowUp />: historyArray[3].pressure > historyArray[4].pressure ? <UilArrowDown />: <UilEqualCircle  />}
          </div>
        </div>
        

    </div>
    
  )
}

export default History;