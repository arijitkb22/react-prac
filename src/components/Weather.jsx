import React, { useEffect, useMemo, useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const temp = useMemo(() => Math.round(weather - 273.15) , [weather])

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=53cbf6b7bd02a2df9591c91dca9a2b85`)
        .then((res) => res.json())
        .then((data) => setWeather(data.main.temp))
      })
    }
  },[])
  return (
    <div>
      {weather ? (<div>
        Current temprature: {temp} degree celcious
        </div>) : (
          <p> Loading Data......</p>
        )}
    </div>
    
    
  )
}
