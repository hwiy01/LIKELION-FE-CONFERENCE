import React, { useState } from 'react'

export const Weather = ({ render }) => {
    const [isRain, setIsRain] = useState(false);

    const handleClick = (weather) => {
        if (weather === 'rainy'){
            setIsRain(true);
        }
        else{
            setIsRain(false);
        }
    }

  return (
    <>
        {render(isRain, handleClick)}
    </>
  )
}
