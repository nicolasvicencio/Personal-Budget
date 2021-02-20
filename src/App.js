import React, {useState, useEffect} from "react";
import AskBudget from "./components/AskBudget";
import Form from './components/Form'
import List from './components/List'
import BudgetControl from "./components/BudgetControl";

function App() {

  // State define

  const [budget , saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showAsk, updateShowAsk] = useState(true)
  const [expenses, saveExpenses] = useState([])
  const [expense, saveExpense] = useState({})
  const [createExpense, saveCreateExpense] = useState(false)

  //UseEffect update the remainig

  useEffect(( ) => {
    if(createExpense){

      //Add new Budget

      saveExpenses([
        ...expenses,
        expense
      ])


      //Substract current budget
      const remainingBudget = remaining -expense.cost
      saveRemaining(remainingBudget)

      // Reset to false

      saveCreateExpense(false)

    }
  }, [expense, createExpense, expenses, remaining ])


  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
      </header>

      <div className="contenido-principal contenido">
        {showAsk
        ? (
          <AskBudget 
            saveBudget={saveBudget}
            saveRemaining={saveRemaining}
            updateShowAsk={updateShowAsk}
          />
          )
        : (
          <div className='row'>
          <div className='one-half column'>
            <Form 
            saveExpense={saveExpense}
            saveCreateExpense={saveCreateExpense}
            />
            </div>
          <div className='one-half column'>
            <List 
            expenses={expenses}
            
            
            />
            <BudgetControl 
            budget={budget}
            remaining={remaining}
            />
            </div>
        </div>

        )

        }

        
      </div>
    </div>
  );
}

export default App;
