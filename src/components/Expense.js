import React from 'react';
import PropTypes from "prop-types";

const Expense = ({expense}) => (
  <li className='gastos'>
    <p>
      {expense.nameCost}
      <span className='gasto'>$ {expense.cost}</span>
      </p>
    
  </li>

)

Expense.propTypes = {
  expense: PropTypes.object.isRequired
} 
export default Expense;