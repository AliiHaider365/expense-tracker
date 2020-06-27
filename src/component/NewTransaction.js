import React,{useContext} from 'react'
import {Globalcontext} from  '../Context/GlobalContext'

export default function NewTransaction({transaction}) {
  const { deleteTransaction } = useContext(Globalcontext);
  const sign = transaction.price < 0 ? '-' : '+';

    return (
        <tr>
        <td>{transaction.title}</td>
        <td>{transaction.descrption}</td>
        <td>{`${sign}${transaction.price}`}</td>
      </tr>
    )
}
