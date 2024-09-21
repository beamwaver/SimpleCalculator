import { legacy_createStore} from "redux";
import calcReducer from "../reducers/calcReducer";
import CalcStates from "../types";
const initialState: CalcStates = {
    oprand1: "0",
    oprand2: "",
    operator: '',
    result: "0",
    calculating: false,
    float: false,
}
const store = legacy_createStore(calcReducer,initialState)
export default store;
