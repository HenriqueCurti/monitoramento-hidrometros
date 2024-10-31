import themeActionTypes from "./action-types";
const initialState = {
    themeWeb : "defaultAlgorithm"
}

const themeReducer = (state = initialState, action) => {    
    switch (action.type) {               
        case themeActionTypes.CHANGE:         
        console.log("Caiu themeReducer");
        console.log(action.payload); 
        return {...state, themeWeb : state.themeWeb === "defaultAlgorithm"?"darkAlgorithm":"defaultAlgorithm"}; 
            //return {...state, themeWeb : action.payload === 'D'?dark:light};
    
        default:
            return state;
    }
}

export default themeReducer;