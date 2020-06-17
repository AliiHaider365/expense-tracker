import React, { Children } from 'react';
import './App.css';
import Balance from './component/Balance'
import IncomeExpense from './component/incomeExpense'
import History from './component/History'
import Addtransaction from './component/Addtransaction'
import { GlobalPrvider } from './Context/GlobalContext';
function App() {
  return (
    <GlobalPrvider>
      <div className="container">
        <div className="card-panel title  teal lighten-2"><h3>Expense Tracker</h3></div>
        <Balance />
        <IncomeExpense />
        <History />
        <Addtransaction />
      </div>
    </GlobalPrvider>

  );
}

export default App;
