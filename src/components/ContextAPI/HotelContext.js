import React, { createContext, useState } from 'react'

export const Hotelcontex=createContext();
function HotelContext(props) {
    const [hotel,setHotel]=useState([])
  return (
    <Hotelcontex.Provider value={[hotel,setHotel]}>
        {props.children}
    </Hotelcontex.Provider>
  )
}

export default HotelContext