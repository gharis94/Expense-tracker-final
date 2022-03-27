import React,{useContext} from 'react';
import { GlobalContext } from '../../Context/GlobalState';

function Balance() {
    const {transections}=useContext(GlobalContext);
  return (
    <div className='container'>
        <h2>Balance   ${
            transections.reduce((total,num)=>{
                total +=num.amount;
                return total;
            },0)
        }</h2>
        
    </div>
  )
}

export default Balance