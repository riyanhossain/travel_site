import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { Col } from 'react-bootstrap'
import Datepicker from '../DatePicker/Datepicker'
import './BookingForm.css'

function BookingForm(props) {
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
        <Button variant="contained" href='/HotelList'>Start Booking</Button>
      </FormControl>
    </div>
  )
}
export default BookingForm