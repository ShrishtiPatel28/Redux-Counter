
export function counterReducer(state = 0, action){
  switch(action.type){
    case "INCREMENT":
        return state < 40 ? state + 1: state;
        case "DECREMENT":
            return state > 0 ? state - 1: state;
            default:
               return state
  }
}