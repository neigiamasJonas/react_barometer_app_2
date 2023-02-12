import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Inputs({setQuery}) {

  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city !== '') setQuery({q: city})
  }

  return (

    <div className="flex flex-row justify-center">
        <div className="flex flex-row flex-wrap w=3/4 items-center justify-center space-x-4">

            <input
              type="text"
              placeholder="Search city"
              className="text-400 w-64 font-light p-1 focus:outline-none capitalize"
              value={city}
              onChange={(e => setCity(e.target.value))}
              onKeyDown={e => {
                if (e.key === "Enter") {handleSearch()}
              }}
              >
            </input>
            <UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearch} />

        </div>
    </div>
  )
}

export default Inputs;