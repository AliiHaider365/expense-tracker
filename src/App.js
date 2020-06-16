import React from 'react';
import './App.css';
import Balance from './component/Balance'
import IncomeExpense from './component/incomeExpense'
import History from './component/History'
import Addtransaction from './component/Addtransaction'
function App() {
  return (
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <History/>
      <Addtransaction/>
    </div>
  );
}

export default App;
