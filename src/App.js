import { useEffect, useState } from 'react';
import './App.css';
import CityButtons from './components/CityButtons';
import Forecast from './components/Forecast';
import History from './components/History';
import Inputs from './components/Inputs';
import TempAndOther from './components/TempAndOther';
import TimeLocation from './components/TimeLocation';
import getFormattedData from './services/ApiService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

// use states
const [query, setQuery] = useState({q: "Vilnius"});
const [weatherData, setWeatherData] = useState(null);
const units = "metric"


// use effect

useEffect(() => {
  const fetchData = async () => {

    const message = query.q ? query.q : "Current Location"

    toast.info("Featching weather data for " + message)

      await getFormattedData({...query, units}).then((data) => {   
        setWeatherData(data)
        console.log(data);
    });

  };
  
  fetchData();
}, [query, units])




  return (
    
    <div className="mx-auto max-w-screen-md mt-4 py-2 px-24 bg-blue-400">
      <CityButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery}/>

      {weatherData
      && 
        <div>
          <TimeLocation weatherData={weatherData}/>
          <TempAndOther weatherData={weatherData}/>
          <Forecast daily={weatherData.daily}/>
          <History hist={weatherData}/>
        </div>
      }

    <ToastContainer autoClose={2000} newestOnTop={true}/>
    </div>
  
  );
}

export default App;