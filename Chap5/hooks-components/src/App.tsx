import logo from './logo.svg';
import './App.css';

const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");
  switch(action.type){
    case "enteredName":
      if(state.enteredName === action.payload){
        return state;
      }
      return {...state, enteredName: action.payload}

      case "message":
        return {...state, message: `Hello, ${action.payload}`}
      default:
        throw new Error("Invalid action type " + action.type);
  }
}

const initialState = {
  enteredName: "",
  message: "",
};


