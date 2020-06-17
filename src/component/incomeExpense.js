import React from 'react'

export default function IncomeExpense() {
    return (
        <div>
             <div className="row">
    <div className="col s6 ">
      <div className="card-panel ">
      <h3 className='balance'>Income</h3>
      <p className="flow-text">$</p>
      </div>
    </div>
    <div className="col s6 ">
      <div className="card-panel ">
           <h3 className='expense'>Expense</h3>
            <p className="flow-text">$</p>
        
      </div>
    </div>
  </div>
        </div>
    )
}
