import React,{useState,useContext} from 'react';
import Button from '@mui/material/Button';
import { GlobalContext } from '../../Context/GlobalState';

function AddTrans() {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');
    const add_trans=useContext(GlobalContext);
    const onsubmit=(e)=>{
        e.preventDefault();
        const data ={
            id: new Date().getDay().toString(),
            description:text,
            amount:Number(amount)
        }
        add_trans(data);
    }
  return (
    <div>
        <form onSubmit={(e)=>onsubmit(e)}>
            <input 
                type='text'
                value={text}
                placeholder='Enter the description'
                onChange={(e)=>setText(e.target.value)}
            />
            <input 
                type='number'
                value={amount}
                placeholder='Enter amount'
                onChange={(e)=>setAmount(e.target.value)}
            />
            <Button variant ='contained'>Add</Button>
        </form>
    </div>

  )
}

export default AddTrans;