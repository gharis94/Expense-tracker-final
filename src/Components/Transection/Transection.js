import React,{useContext} from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import './Transection.css';

import { List } from '@mui/material';
import { ListItem } from '@mui/material';

function Transection() {
    const {transections}=useContext(GlobalContext)
  return (
    <div>
        <h4>Transection History</h4>
        <List sx={{width:'100%', maxWidth:360, bgcolor:'background.paper'}}>
            {transections.map(trans=>(
                <ListItem key={trans.id} id='container'>
                    <span>{trans.description}</span>
                    <span className={trans.amount>0?'green':'red'}>{Math.abs(trans.amount)}</span>
                </ListItem>
        ))}
        </List>
    </div>
  )
}

export default Transection