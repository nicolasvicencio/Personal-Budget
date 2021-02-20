import React, {Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const AskBudget = ({saveBudget, saveRemaining, updateShowAsk}) => {

// State Define

const [amount, saveAmount] = useState(0)
const [error, saveError] = useState(false)

// Function for read budget

const defineBudget = e => {
  saveAmount(parseInt(e.target.value, 10))
}

// Submit to define Buget
const addBudget = e => {
  e.preventDefault()

  //Validate
if(amount < 1 || isNaN(amount)) {
  saveError(true)
  return;
}

// If is valid
saveError(false);
saveBudget(amount);
saveRemaining(amount);
updateShowAsk(false)


}


  return (  
    <Fragment>
      <h2>Insert your Budget</h2>
      
      {error ?<Error message='Is not a valid Budget'/> :null
      }

      <form
      onSubmit={addBudget}
      >
       <input 
       type='number'
       className='u-full-width'
       placeholder='Insert your budget'
       onChange={defineBudget}
       />

        <input 
          type='submit'
          className='button-primary u-full-width'
          value='Define Budget'
        />
      </form>

    </Fragment>
  );
}
 

AskBudget.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  updateShowAsk: PropTypes.func.isRequired
}
export default AskBudget;