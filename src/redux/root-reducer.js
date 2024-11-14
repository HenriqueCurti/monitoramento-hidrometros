import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import blocoReducer from "./bloco/reducer";
import leituraReducer from "./leitura/reducer";
import themeReducer from "./theme/reducer";
import hidrometroReducer from "./hidrometro/reducer";

const rootReducer = combineReducers({ userReducer, blocoReducer, themeReducer, leituraReducer, hidrometroReducer });

export default rootReducer;