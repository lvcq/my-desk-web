import React from 'react'
import {WeatherPanel} from "@zly/weather";

function App() {

  return (
    <>
    <span className="text-red-500">weather</span>
    <WeatherPanel cityId="101040100"/>
    </>
  )
}

export default App
