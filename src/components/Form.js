import React, {useState} from 'react';
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Form = ({saveExpense, saveCreateExpense}) => {

const [nameCost, saveNameCost] = useState('')
const [cost, saveCost] = useState(0)
const [error , saveError] = useState(false)

// When user adds a Cost

const addCost = e => {
e.preventDefault()

//Validate
if(cost < 1 || isNaN(cost) || nameCost.trim() === ''){
  saveError(true)
  return;
}

saveError(false);

//Create Cost
const expense ={
  nameCost,
  cost,
  id: shortid.generate()
} 

console.log(expense)

//Send to the main component

saveExpense(expense)
saveCreateExpense(true)


//Reset Form
saveNameCost('')
saveCost(0)
}


  return (
<form
onSubmit={addCost}
>
  <h2>Add your costs here</h2>
    {error ? <Error message='Both fiels are required or invalid cost' /> : null }

  <div className='campo'>
    <label>Name cost</label>
    <input 
    type='text'
    className='u-full-width'
    placeholder='eg: Transport'
    value={nameCost}
    onChange={(e) => saveNameCost(e.target.value) }
    />
  </div>


  <div className='campo'>
    <label>Cost</label>
    <input 
    type='number'
    className='u-full-width'
    placeholder='Insert Cost'
    value={cost}
    onChange={(e) => saveCost(parseInt(e.target.value))}
    />
  </div>

  <input 
  type='submit'
  className='button-primary u-full-width'
  value='Add Cost'
  />
</form>

    );
}
 
Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired
}

export default Form;