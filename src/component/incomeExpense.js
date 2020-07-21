import React, { useContext } from "react";
import { Globalcontext } from "../Context/GlobalContext";

export default function IncomeExpense() {
  let total = 0;
  let income = 0;
  const { transaction } = useContext(Globalcontext);
  transaction.forEach((trans) => {
    if (trans.descrption == "expense") {
      total += parseInt(trans.price, 10);
    } else {
      income += parseInt(trans.price);
    }
  });
  return (
    <>
      <div className="balanceContainer">
        <h3 className="balance value ">Balance </h3>{" "}
        <p className=" value flow-text bal">$ {income}</p>
      </div>
      <div>
        <div className="row">
          <div className="col s6 ">
            <div className="card-panel ">
              <h3 className="color">Income</h3>
              <p className="flow-text">$ {income}</p>
            </div>
          </div>
          <div className="col s6 ">
            <div className="card-panel ">
              <h3 className="expense">Expense</h3>
              <p className="flow-text">$ {total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
