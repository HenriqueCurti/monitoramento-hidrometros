import DataBase from "../../data/DataBase";
import blocoActionTypes from "./action-types";

const initiaState = {
  blocoIsOpen: false,
  blocoList: [
    {
      id: 1,
      buildingName: "Bloco A",
      numberOfUnits: 30,
      createdAt: "2024-09-03T14:53:40Z",
    },
    {
      id: 2,
      buildingName: "Bloco B",
      numberOfUnits: 30,
      createdAt: "2024-09-03T15:04:28Z",
    },
    {
      id: 3,
      buildingName: "Bloco C",
      numberOfUnits: 30,
      createdAt: "2024-09-03T15:04:28Z",
    },
  ],
  //blocoList: [],
  blocoUpdated: [],
};

const blocoReducer = (state = initiaState, action) => {
  if (action.type === blocoActionTypes.OPENFORM) {
    return { ...state, blocoIsOpen: action.payload };
  }

  if (action.type === blocoActionTypes.UPDATEBLOC) {
    return { ...state, blocoUpdated: action.payload };
  }

  if (action.type === blocoActionTypes.LOADBLOC) {
    return { ...state, blocoList: action.payload };
  }

  return state;
};

export default blocoReducer;
