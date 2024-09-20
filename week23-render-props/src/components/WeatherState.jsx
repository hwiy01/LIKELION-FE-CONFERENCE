import React from 'react'
import { Weather } from './Weather'

export const WeatherState = () => {
  return (
    <Weather render={(isRain, handleClick)=>{
        return(
            <div>
                <p>{isRain ? "☔️": "☀️"}</p>
                <p>{isRain ? "Don't forget your umbrella!": "It's Sunny today"}</p>
                <button onClick={()=>handleClick('sunny')}>it's sunny outside</button>
                <button onClick={()=>handleClick('rainy')}>it's raining outside</button>
            </div>
        )}
    }/>

  )
}
