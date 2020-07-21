import React, { useContext } from "react";
import { Globalcontext } from "../Context/GlobalContext";

export default function NewTransaction({ transaction }) {
  const { deleteTransaction } = useContext(Globalcontext);

  const Deletehandler = (id) => {
    deleteTransaction(id);
  };
  return (
    <tr>
      <td>{transaction.title}</td>
      <td>{transaction.descrption}</td>
      <td>{transaction.price}</td>
      <td>
        <i
          onClick={() => {
            let id = transaction.id;
            Deletehandler(id);
          }}
          class="material-icons center"
        >
          delete
        </i>
      </td>
    </tr>
  );
}
