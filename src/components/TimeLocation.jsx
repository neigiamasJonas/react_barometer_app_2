import React from 'react'
import formatToLocalTime from '../functions/TimeFormat';

function TimeLocation({weatherData: {currentTime, timezone, country, name}}) {
  return (
    <div>
        <div className="flex flex-row justify-center my-4">
            <p className="text-white text-sm font-extralight">
                {formatToLocalTime(currentTime, timezone)}
            </p>
        </div>
        <div className="flex flex-row justify-center">
            <p className="text-white text-4xl font-medium">
                {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeLocation;