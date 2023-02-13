import formatToLocalTime from '../functions/TimeFormat'
import 'react-toastify/dist/ReactToastify.css';

// Your API KEY
const API_KEY = "1b8bb04b1b223e343e9f05089e88251e";
// Base url
const BASE_URL = "https://api.openweathermap.org/data";


// main fetching
const getData = async (infoType, searchParams) => {

    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return await fetch(url).then((response) => {
        if (response.ok) {
            return response.json()
        } else if (response.status === 404){
            return Promise.reject('error 404') && window.location.reload();
        } else {
          return Promise.reject('some other error: ' + response.status) && window.location.reload();
        }
    })
};


// Data deconstructed from first api directory for getting current weather 
const formatCurrentData = (data) => {
    const {
        coord: {lat, lon},
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        dt,
        sys: {country, sunrise, sunset},
        name,

    } = data

    const {main: info, description, icon} = weather[0];

    return {lat, lon, country, temp, feels_like, temp_min, temp_max, pressure, humidity, speed, sunrise, sunset, dt, name, info, description, icon, day1: dt - 86400, day2: dt - 172800, day3: dt - 259200, day4: dt - 345600, day5: dt - 432000}
}

// 5 day forecast
const formatForcastData = (data) => {
    let {timezone, daily, current: {dt: currentTime}} = data;

// sliced array to reach data in objects
    daily = daily.slice(1, 6).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, daily, currentTime}
}

// HISTORY //

// current date -1
const formatHistoryData = (info) => {
    let {timezone, data} = info

    let data1 = data

    data1 = data1.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data1};
}
// current date -2
const formatHistoryData2 = (info) => {
    let {timezone, data} = info

    let data2 = data

    data2 = data2.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data2};
}
// current date -3
const formatHistoryData3 = (info) => {
    let {timezone, data} = info

    let data3 = data

    data3 = data3.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data3};
}
// current date -4
const formatHistoryData4 = (info) => {
    let {timezone, data} = info

    let data4 = data

    data4 = data4.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data4};
}
// current date -5
const formatHistoryData5 = (info) => {
    let {timezone, data} = info

    let data5 = data

    data5 = data5.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data5};
}



const getFormattedData = async (searchParams) => {
    
    try {
        const formattedCurrentData = await getData("2.5/weather", searchParams).then(formatCurrentData);

        const {lat, lon, day1, day2, day3, day4, day5} = formattedCurrentData;

// FORECAST
        const formattedForecastData = await getData("3.0/onecall", {
            lat,
            lon,
            units: 'metric',
            exclude: 'minutely, hourly, alerts'
        }).then(formatForcastData);

// HISTORY
        // current date -1
        const formatedHistoryData = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day1,
        }).then(formatHistoryData);
        // current date -2
        const formatedHistoryData2 = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day2,
        }).then(formatHistoryData2);
        // current date -3
        const formatedHistoryData3 = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day3,
        }).then(formatHistoryData3);
        // current date -4
        const formatedHistoryData4 = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day4,
        }).then(formatHistoryData4);
        // current date -5
        const formatedHistoryData5 = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day5,
        }).then(formatHistoryData5);


        return {...formattedCurrentData, ...formattedForecastData, ...formatedHistoryData, ...formatedHistoryData2, ...formatedHistoryData3, ...formatedHistoryData4, ...formatedHistoryData5};
    } catch (error) {
        console.error("Error: getFormattedData")
        return error;
    }
}


export default getFormattedData;