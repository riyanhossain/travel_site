import React from 'react'
import { Col } from 'react-bootstrap'
import '../DestinationSelector/DestinationSelector.css'
import image1 from '../../images/Image/Sajek.png'
import image2 from '../../images/Image/Sreemongol.png'
import image3 from '../../images/Image/sundorbon.png'

function ImageCard(props) {
    const handleClick = (n) => {
        props.setName(n.nam)
        props.setDes(n.des)
      }
  return (
    <Col className='col2' xxl={8}>
    <div className='CON'>
      <div className='textCON'>SAJEK</div>
      <img src={image1} alt="" className='imgCON' onClick={() => handleClick(props.name1[0])} />
    </div>

    <div className='CON'>
      <div className='textCON'>SREEMONGOL</div>
      <img src={image2} alt="" className='imgCON' onClick={() => handleClick(props.name1[1])} />
    </div>
    <div className='CON'>
      <div className='textCON'>SUNDARBON</div>
      <img src={image3} alt="" className='imgCON' onClick={() => handleClick(props.name1[2])} />
    </div>
  </Col>
  )
}

export default ImageCard