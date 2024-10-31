import userActionTypes from "./action-types";

const initiaState = {
    currentUser: JSON.parse(localStorage.getItem("user_monitoramento")) ? JSON.parse(localStorage.getItem("user_monitoramento")) : '',
};

const userReducer = (state = initiaState, action) => {
    if(action.type === userActionTypes.LOGIN){        
        return {...state, currentUser: action.payload}
    }

    if(action.type === userActionTypes.LOGOUT){        
        return {...state, currentUser: null}
    }    

    return state;
}

export default userReducer;