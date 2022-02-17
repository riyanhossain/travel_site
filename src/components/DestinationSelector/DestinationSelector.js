import React, { useState } from 'react'
import './DestinationSelector.css'
import ItemsCarousel from 'react-items-carousel';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../images/Image/Sajek.png'
import image2 from '../../images/Image/Sreemongol.png'
import image3 from '../../images/Image/sundorbon.png'


function DestinationSelector() {
  const [name, setName] = useState('SAJEK')
  const [des, setDes] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur provident quaerat laborum animi tempora sunt error autem a esse quisquam dicta voluptatem, praesentium exercitationem mollitia possimus natus non labore.')
  const name1 = [{ nam: 'SAJEK', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur provident quaerat laborum animi tempora sunt error autem a esse quisquam dicta voluptatem, praesentium exercitationem mollitia possimus natus non labore.' },
  { nam: 'SREEMONGOL', des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tenetur maiores voluptate asperiores quos laudantium amet quasi sunt necessitatibus vitae voluptatem ipsa deserunt nobis quaerat quis, illo, aliquid fugiat. Odio.' },
  { nam: 'SUDARBON', des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam illum assumenda cum excepturi vero. Optio maxime esse tempore, asperiores, cum ad repudiandae eaque nihil id in quis cupiditate aliquam non.' }
  ]
  const handleClick = (n) => {
    setName(n.nam)
    setDes(n.des)
  }

  return (
    <div className='homeCON'>
      <Container>

        <Row>
          <Col className='col1' xxl={4}>
            <h1 style={{ fontWeight: 'bold', fontSize: '60px' }}>{name}</h1>
            <p>
              {des}
            </p>
            <Button>Booking</Button>
          </Col>
          <Col className='col2' xxl={8}>
            <div className='CON'>
              <div className='textCON'>SAJEK</div>
              <img src={image1} alt="" className='imgCON' onClick={() => handleClick(name1[0])} />
            </div>

            <div className='CON'>
              <div className='textCON'>SREEMONGOL</div>
              <img src={image2} alt="" className='imgCON' onClick={() => handleClick(name1[1])} />
            </div>
            <div className='CON'>
              <div className='textCON'>SUNDARBON</div>
              <img src={image3} alt="" className='imgCON' onClick={() => handleClick(name1[2])} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default DestinationSelector