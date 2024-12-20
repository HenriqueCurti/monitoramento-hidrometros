import userActionTypes from "./action-types";

const initiaState = {
    currentUser: JSON.parse(localStorage.getItem("user_monitoramento")) ? JSON.parse(localStorage.getItem("user_monitoramento")) : '',
};

const userReducer = (state = initiaState, action) => {
    if(action.type === userActionTypes.LOGIN){        
        localStorage.setItem("user-monitoramento", JSON.stringify(action.payload))
        return {...state, currentUser: action.payload}
    }

    if(action.type === userActionTypes.LOGOUT){        
        localStorage.removeItem("user-monitoramento");
        return {...state, currentUser: null}
    }    

    return state;
}

export default userReducer;