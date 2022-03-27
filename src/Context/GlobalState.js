import { createContext,useReducer } from "react";
import Reducer from './Reducer'

//defining initial state
const initialState = {
    transections: [
        {id: 1,description: 'salary',amount: 200},
        {id: 2,description: 'milk',amount: -20},
        {id: 3,description: 'bread',amount: -10}
    ]
};

//creating context

export const GlobalContext = createContext(initialState);

//initializing provider

export const GlobalProvider =({children})=>{
    const [state,dispatch]=useReducer(Reducer,initialState);
    
    const add_trans =(data)=>{
        console.log({data})
    }
    return(
        <GlobalContext.Provider value={{
            transections:state.transections,
            add_trans
            }}>
            {children}
        </GlobalContext.Provider>
    )
}