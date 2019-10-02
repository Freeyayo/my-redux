import initialState from '../initialState';

export function calculator(state = initialState, action){
  switch(action.type){
    case "ADD":
      return {
      	...state,
      	number: state.number + 1
      };
    case "MINUS":
      return {
      	...state,
      	number: state.number - 1
      };
    default:
      return state;
  }
}
