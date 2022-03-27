import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import IncExpense from './Components/Inx-Expense/Inc-Expense';
import Transection from './Components/Transection/Transection';
import AddTrans from './Components/AddTrans/AddTrans';
import "./App.css";
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider className="App">
      <Header/>
      <Balance/>
      <IncExpense/>
      <Transection/>
      <AddTrans/>
    </GlobalProvider>
  );
}

export default App;
