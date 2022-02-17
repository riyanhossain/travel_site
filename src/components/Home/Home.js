import React from 'react'
import DestinationSelector from '../DestinationSelector/DestinationSelector'
import NavBar from '../Navbar/NavBar'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <NavBar color={'white'}/>
        <DestinationSelector/>
    </div>
  )
}

export default Home