import React, { useContext } from "react";
import NewTransaction from "./NewTransaction";
//  import Globalcontext
import { Globalcontext } from "../Context/GlobalContext";

export default function History() {
  const { transaction } = useContext(Globalcontext);
  return (
    <div>
      <div className="heading">
        <p className="pl-4 flow-text txt-ali">History</p>
      </div>
      <table className="pl-4 striped centered highlight">
        <thead>
          <tr>
            <th>Title</th>
            <th>descrption</th>
            <th>Price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((transaction) => {
            return (
              <NewTransaction key={transaction.id} transaction={transaction} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
