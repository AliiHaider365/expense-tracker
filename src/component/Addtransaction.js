import React, {useState ,useContext} from 'react'

import {Globalcontext} from  '../Context/GlobalContext'
export default function Addtransaction() {
  const {Addtransactions} = useContext(Globalcontext);
  const [title, settitle] = useState("")
  const [price, setprice] = useState("")

  const  handlerIncome=()=>{
  
    Addtransactions({
      id : Math.random(1 *10000),
      price:price,
      title :title,
      descrption: "expense"
    })
  }
    return (
        <div>
        <div className='heading mt-1'>
        <p className=' txt-ali pl-4 flow-text mt-1'>Addtransaction</p>
            </div>
        <div className="row input">
        <form className="col s12">
          <div className="row">
            <div className=" col s12 mt-1">
              <label >Title</label>
            <input id="email"   required onChange={(evt)=>{settitle(evt.target.value) }}  type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className=" col s12">
              <label >Price</label>
            <input id="email" type="text"  required onChange={(evt)=>{setprice(evt.target.value) }}  className="validate"/>
            </div>
          </div>
        </form>
        <div className='mb3'>
        <a className="waves-effect waves-light btn defualt light-green accent-3  " onClick={handlerIncome}>Income</a>
        <a className="waves-effect waves-light btn defualt deep-orange darken-4 ml-2">Expense</a>
        </div>
      </div>
      </div>
    )
}
