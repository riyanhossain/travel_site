import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar/NavBar'
import image from '../../images/Image/Rectangle26.png'
import star from '../../images/Icon/star_1_.png'
import './Sajek.css'
import ImageListSajek from '../ImageList/ILSAJEK'
function SAJEK() {
    return (
        <div >
            <NavBar color={'black'} />
            <h2>Stay in SAJEK</h2>
            <div style={{display:'flex',marginTop:'30px'}}>
                <Col>
                    <div style={{display:'flex'}}>
                        <Col>
                            <img src={image} alt="" srcset="" style={{width:'90%'}} />
                        </Col>
                        <Col>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis.</h4>
                        <p>4 Guests 2 Bedrrom 2 Bath 2 Balcony</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur, ducimus dolore voluptatem consequatur illo?</p>
                        <div style={{display:'flex'}}>
                            <img src={star} alt="" srcset="" style={{width:'6%',height:'55%'}} />
                            <p style={{fontWeight:'bold'}}>4.9(28)</p>
                            <p style={{marginLeft:'50%'}}><span style={{fontWeight:'bold'}}>45$/</span>night</p>
                        </div>
                        </Col>
                    </div>


                </Col>
                <Col>
                <ImageListSajek/>

                </Col>
            </div>
        </div>
    )
}

export default SAJEK