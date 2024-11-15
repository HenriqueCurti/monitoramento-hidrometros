import hidrometroActionTypes from "./action-types";

const initiaState = {
  hidrometroIsOpen: false,
  //hidrometroList: [],
  hidrometroList: [
    {
      id: 1,
      installationDate: null,
      lastCalibrationDate: null,
      building: {
        id: 1,
        buildingName: "Bloco A",
        numberOfUnits: 30,
        createdAt: "2024-09-03T14:53:40Z",
      },
      status: "active",
    },
    {
      id: 2,
      installationDate: null,
      lastCalibrationDate: null,
      building: {
        id: 2,
        buildingName: "Bloco B",
        numberOfUnits: 30,
        createdAt: "2024-09-03T15:04:28Z",
      },
      status: "active",
    },
    {
      id: 3,
      installationDate: null,
      lastCalibrationDate: null,
      building: {
        id: 3,
        buildingName: "Bloco C",
        numberOfUnits: 30,
        createdAt: "2024-09-03T15:04:28Z",
      },
      status: "active",
    },
  ],
  hidrometroUpdated: [],
};

const hidrometroReducer = (state = initiaState, action) => {
  console.log(action.payload);

  if (action.type === hidrometroActionTypes.OPENFORM) {
    return { ...state, hidrometroIsOpen: action.payload };
  }

  if (action.type === hidrometroActionTypes.UPDATEHIDRO) {
    return { ...state, hidrometroUpdated: action.payload };
  }

  if (action.type === hidrometroActionTypes.LOADHIDRO) {
    return { ...state, hidrometroList: action.payload };
  }

  return state;
};

export default hidrometroReducer;
