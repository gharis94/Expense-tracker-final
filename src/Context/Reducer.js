const Reducer =(state,action)=>{
    switch(action.type){
        case 'delete':
            return{
                ...state,
                transections:state.transections.filter(transection=>transection.id !== action.payload)
            }
        default:
            return state;
    }
}
export default Reducer;