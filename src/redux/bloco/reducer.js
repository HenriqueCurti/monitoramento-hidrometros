import blocoActionTypes from "./action-types";

const initiaState = {
    blocoIsOpen : false
}

const blocoReducer = (state = initiaState, action) => {
   if(action.type === blocoActionTypes.OPENFORM){       
    return {...state, blocoIsOpen: action.payload}
   }

   return state
}

export default blocoReducer;