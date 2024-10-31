import leituraActionTypes from "./action-types";

const initiaState = {
    leituraIsOpen : false,
}

const leituraReducer = (state = initiaState, action) => {
        
    switch (action.type){
        case leituraActionTypes.OPENFORM :             
            return {...state, leituraIsOpen : action.payload}
        
        default: 
            return state
    }
}

export default leituraReducer;