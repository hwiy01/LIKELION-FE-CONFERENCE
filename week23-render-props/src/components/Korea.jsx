import React from 'react'
import { Weather } from './Weather'

export const Korea = () => {
  return (
    <>
        <h3>Korea</h3>
        <Weather render={(isRain, handleClick)=>{
        return(
            <div>
                <p>{isRain ? "☔️": "☀️"}</p>
                <p>{isRain ? "Don't forget your umbrella!": "It's Sunny in Korea"}</p>
                <button onClick={()=>handleClick('sunny')}>Sunny Korea</button>
                <button onClick={()=>handleClick('rainy')}>Raining Korea</button>
            </div>
        )}
    }/>
    </>
  )
}
