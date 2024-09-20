import React from 'react'
import { Weather } from './Weather'

export const Japan = () => {
  return (
    <>
        <h3>Japan</h3>
        <Weather render={(isRain, handleClick)=>{
        return(
            <div>
                <p>{isRain ? "☔️": "☀️"}</p>
                <p>{isRain ? "Don't forget your umbrella!": "It's Sunny in Japan"}</p>
                <button onClick={()=>handleClick('sunny')}>Sunny Japan</button>
                <button onClick={()=>handleClick('rainy')}>Raining Japan</button>
            </div>
        )}
    }/>
    </>
  )
}
