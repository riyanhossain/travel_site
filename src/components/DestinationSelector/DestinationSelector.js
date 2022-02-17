import React, { useState } from 'react'
import './DestinationSelector.css'
import ItemsCarousel from 'react-items-carousel';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import ImageCard from '../imageCard/imageCard';
import BookingForm from '../BookingForm/BookingForm';


function DestinationSelector() {
  const [name, setName] = useState('SAJEK')
  const [des, setDes] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur provident quaerat laborum animi tempora sunt error autem a esse quisquam dicta voluptatem, praesentium exercitationem mollitia possimus natus non labore.')
  const name1 = [{ nam: 'SAJEK', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur provident quaerat laborum animi tempora sunt error autem a esse quisquam dicta voluptatem, praesentium exercitationem mollitia possimus natus non labore.' },
  { nam: 'SREEMONGOL', des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tenetur maiores voluptate asperiores quos laudantium amet quasi sunt necessitatibus vitae voluptatem ipsa deserunt nobis quaerat quis, illo, aliquid fugiat. Odio.' },
  { nam: 'SUNDARBON', des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam illum assumenda cum excepturi vero. Optio maxime esse tempore, asperiores, cum ad repudiandae eaque nihil id in quis cupiditate aliquam non.' }
  ]
  const [bookBtn,setBookBtn]=useState(true)
  const handleBookBtn=()=>{
    setBookBtn(false)
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
            {bookBtn && <Button onClick={()=>handleBookBtn()}>Booking</Button>}
          </Col>
          {
            bookBtn ? <ImageCard name1={name1} setName={setName} setDes={setDes} />:
            <Col><BookingForm name={name}/></Col>
          }
        </Row>
      </Container>
    </div>

  )
}

export default DestinationSelector