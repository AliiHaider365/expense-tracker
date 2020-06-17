import React from 'react'

export default function NewTransaction({transaction}) {
    
    return (
        <tr>
        <td>{transaction.title}</td>
        <td>{transaction.descrption}</td>
        <td>{transaction.price}</td>
      </tr>
    )
}
