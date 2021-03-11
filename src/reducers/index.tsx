import { loginReducer } from "./LoginReducer";
import {transactionReducer} from "./TransactionReducer"


let allReducers = {
  ChildApp2_transaction:transactionReducer,
  ChildApp2_login:loginReducer
}
//allReducers["gasabbs"] = transactionReducer;
export default allReducers