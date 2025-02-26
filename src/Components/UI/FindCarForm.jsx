import React from 'react'
import '../../Styles/findcarform.css'
import {Form,FormGroup} from 'reactstrap'

const FindCarForm = () => {
  return <form>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
      
      <FormGroup className='form__group'>
        <input type='text' placeholder='From Address' required/>
      </FormGroup>

      <FormGroup className='form__group'>
        <input type='text' placeholder='To Address' required/>
      </FormGroup>

      <FormGroup className='form__group'>
        <input type='date' placeholder='Journey Date' required/>
      </FormGroup>

      <FormGroup className='form__group'>
        <input type='time' placeholder='Journey time' required/>
      </FormGroup>

      <FormGroup className='select__group'>
        <select>
          <option value=''></option>
        </select>
      </FormGroup>

      <FormGroup className='form__group'>
        <button className='btn find__car-btn'>Find</button>
        </FormGroup>
    </div>
  </form>
  
}

export default FindCarForm
