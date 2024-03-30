
export function counterReducer(state = 0, action){
  switch(action.type){
    case "INCREMENT":
        return state < 25 ? state + 1: state;
        case "DECREMENT":
            return state > -9 ? state - 1: state;
            default:
               return state
  }
}