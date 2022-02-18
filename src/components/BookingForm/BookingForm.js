import { Button, FormControl, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Datepicker from '../DatePicker/Datepicker'
import './BookingForm.css'

function BookingForm(props) {
  // const handleClick=(n)=>{
  //   setHotel(n)
  // }
  let navigate=useNavigate();
  return (
    <div className='Form'>
      <FormControl margin={'normal'} variant={'outlined'}>
        <TextField id="outlined-basic" label="Origin" variant="outlined" />
        <TextField
          id="outlined-read-only-input"
          label="Destination"
          defaultValue={props.name}
          InputProps={{
            readOnly: true,
          }}
        />
        <Col className='colx'>
          <Datepicker label={'From'}/>
          <Datepicker label={'To'}/> 
        </Col>
        <Button variant="contained"onClick={()=>navigate(`/${props.name}`)}>Start Booking</Button>
      </FormControl>
    </div>
  )
}
export default BookingForm