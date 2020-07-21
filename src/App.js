import React from "react";
import "./App.css";
import IncomeExpense from "./component/incomeExpense";
import History from "./component/History";
import Addtransaction from "./component/Addtransaction";
import { GlobalPrvider } from "./Context/GlobalContext";
function App() {
  return (
    <GlobalPrvider>
      <div className="container">
        <div className="card-panel title  teal lighten-2">
          <h3>Expense Tracker</h3>
        </div>
        <IncomeExpense />
        <History />
        <Addtransaction />
      </div>
    </GlobalPrvider>
  );
}

export default App;
