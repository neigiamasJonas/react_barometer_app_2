import React from 'react'
import { UilTemperatureHalf, UilTear, UilWindsock, UilSun, UilSunset, UilTemperatureQuarter, UilTemperature } from '@iconscout/react-unicons'
import formatToLocalTime from '../functions/TimeFormat'
import { iconFromUrl } from '../functions/ImgLinks'

function TempAndOther({weatherData: {pressure, info, description, icon, temp, feels_like, humidity, speed, sunrise, sunset, timezone, temp_min, temp_max}}) {
  return (
    <div>
        <div className="flex flex-row justify-center items-center text-white">
            <img className="w-12 mt-2" src={iconFromUrl(icon)} alt={icon}></img>
            <p className="text-sm font-light pt-2 object-top">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
            
        </div>
        <div className="flex flex-row justify-between items-center text-white mt-2 py-2">
            <div>
                <p>{`Pressure now: ${pressure} hPa`}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center ">
                    <p className="text-6xl mt-2">{temp.toFixed()}°</p>
                    
                </div>
            </div>      
            <div className="flex flex-col space-y-1 pt-3">
                <div className="flex font-extralight text-xs items-center justify-start">
                    <UilTemperatureHalf size="12" className="mr-1" />
                    <p className="mr-1">Feels like: </p>
                    <span className="font-medium">{feels_like.toFixed()}°</span>
                </div>
                <div className="flex font-extralight text-xs items-center justify-start">
                    <UilTear size="12" className="mr-1" />
                    <p className="mr-1">Humidity:</p>
                    <span className="font-medium">{humidity}%</span>
                </div>
                <div className="flex font-extralight text-xs items-center justify-start">
                    <UilWindsock size="12" className="mr-1" />
                    <p className="mr-1">Wind:</p>
                    <span className="font-medium">{speed.toFixed()} km/h</span>
                </div>
            </div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-1 text-white text-xs pt-3">
            <UilSun size="16"/>
            <p className="font-extralight">Rise:</p>
            <span className="font-light ml-1">{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
            <p className="font-light">|</p>

            <UilSunset size="16"/>
            <p className="font-extralight">Set:</p>
            <span className="font-light ml-1">{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
            <p className="font-light">|</p>

            <UilTemperature size="16"/>
            <p className="font-extralight">High:</p>
            <span className="font-light ml-1">{temp_max.toFixed()}°</span>
            <p className="font-light">|</p>

            <UilTemperatureQuarter size="16"/>
            <p className="font-extralight">Low:</p>
            <span className="font-light ml-1">{temp_min.toFixed()}°</span>
        </div>
    </div>
  )
}

export default TempAndOther