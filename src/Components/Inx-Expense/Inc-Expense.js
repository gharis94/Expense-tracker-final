import React,{useContext} from 'react';
import './InEx.css';
import {GlobalContext} from '../../Context/GlobalState';
function IncExpense() {
    const {transections}=useContext(GlobalContext)

  return (
    <div className='continer'>
        <div className='income'>
            <h4>Income</h4>
            <h4>${transections.reduce((acc,num)=>{
                    if(num.amount>0){
                        acc += num.amount
                    }
                return acc;
            },0)}</h4>
        </div>
        <div className='expense'>
            <h4>Expense</h4>
            <h4>${transections.reduce((acc,num)=>{
                if(num.amount<0){
                    acc -=num.amount;
                }
                return acc;
            },0)}</h4>
        </div>
    </div>
  )
}

export default IncExpense