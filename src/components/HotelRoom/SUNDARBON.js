import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar/NavBar'
import star from '../../images/Icon/star_1_.png'
import image from '../../images/Image/Rectangle28.png'
import ImageListSundarbon from '../ImageList/ILSundarbon'

function SUNDARBON() {
  return (
    <div >
            <NavBar color={'black'} />
            <h2>Stay in SUNDARBON</h2>
            <div style={{display:'flex',marginTop:'30px'}}>
                <Col>
                    <div style={{display:'flex'}}>
                        <Col>
                            <img src={image} alt="" srcset="" style={{width:'90%'}} />
                        </Col>
                        <Col>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nostrum!</h4>
                        <p>5 Guests 2 Bedrrom 1 Bath 2 Balcony</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat ad esse eveniet quos.</p>
                        <div style={{display:'flex'}}>
                            <img src={star} alt="" srcset="" style={{width:'6%',height:'55%'}} />
                            <p style={{fontWeight:'bold'}}>5.0(8)</p>
                            <p style={{marginLeft:'50%'}}><span style={{fontWeight:'bold'}}>35$/</span>night</p>
                        </div>
                        </Col>
                    </div>


                </Col>
                <Col>
                <ImageListSundarbon/>

                </Col>
            </div>
        </div>
  )
}

export default SUNDARBON