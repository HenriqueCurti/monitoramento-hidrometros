import leituraActionTypes from "./action-types";

const initiaState = {
  leituraIsOpen: false,
  leituraList: [],
  //   leituraList: [
  //     {
  //       readingId: "00000000-0000-0000-0000-000000000001",
  //       meter: {
  //         id: 1,
  //         installationDate: null,
  //         lastCalibrationDate: null,
  //         building: {
  //           id: 1,
  //           buildingName: "Bloco A",
  //           numberOfUnits: 30,
  //           createdAt: "2024-09-03T14:53:40Z",
  //         },
  //         status: "active",
  //       },
  //       readingValue: 10000000,
  //       readingDate: "2024-08-01T00:00:00Z",
  //       user: {
  //         id: 1,
  //         passwordHash: "hashed_password_1",
  //         username: "admin_user",
  //         userEmail: "admin_user@email.com",
  //         createdAt: "2024-09-03T09:28:19Z",
  //         userRole: 2,
  //         roleName: null,
  //       },
  //     },
  //     {
  //       readingId: "00000000-0000-0000-0000-000000000001",
  //       meter: {
  //         id: 1,
  //         installationDate: null,
  //         lastCalibrationDate: null,
  //         building: {
  //           id: 1,
  //           buildingName: "Bloco B",
  //           numberOfUnits: 30,
  //           createdAt: "2024-09-03T14:53:40Z",
  //         },
  //         status: "active",
  //       },
  //       readingValue: 8000000,
  //       readingDate: "2024-08-01T00:00:00Z",
  //       user: {
  //         id: 1,
  //         passwordHash: "hashed_password_1",
  //         username: "admin_user",
  //         userEmail: "admin_user@email.com",
  //         createdAt: "2024-09-03T09:28:19Z",
  //         userRole: 2,
  //         roleName: null,
  //       },
  //     },
  //     {
  //       readingId: "00000000-0000-0000-0000-000000000002",
  //       meter: {
  //         id: 1,
  //         installationDate: null,
  //         lastCalibrationDate: null,
  //         building: {
  //           id: 1,
  //           buildingName: "Bloco A",
  //           numberOfUnits: 30,
  //           createdAt: "2024-09-03T14:53:40Z",
  //         },
  //         status: "active",
  //       },
  //       readingValue: 12000000,
  //       readingDate: "2024-08-15T00:00:00Z",
  //       user: {
  //         id: 1,
  //         passwordHash: "hashed_password_1",
  //         username: "admin_user",
  //         userEmail: "admin_user@email.com",
  //         createdAt: "2024-09-03T09:28:19Z",
  //         userRole: 2,
  //         roleName: null,
  //       },
  //     },
  //     {
  //       readingId: "00000000-0000-0000-0000-000000000003",
  //       meter: {
  //         id: 2,
  //         installationDate: null,
  //         lastCalibrationDate: null,
  //         building: {
  //           id: 2,
  //           buildingName: "Bloco B",
  //           numberOfUnits: 30,
  //           createdAt: "2024-09-03T15:04:28Z",
  //         },
  //         status: "active",
  //       },
  //       readingValue: 9000000,
  //       readingDate: "2024-08-15T00:00:00Z",
  //       user: {
  //         id: 2,
  //         passwordHash: "hashed_password_2",
  //         username: "regular_user",
  //         userEmail: "regular_user@email.com",
  //         createdAt: "2024-09-03T09:28:19Z",
  //         userRole: 3,
  //         roleName: null,
  //       },
  //     },
  //     {
  //       readingId: "00000000-0000-0000-0000-000000000003",
  //       meter: {
  //         id: 2,
  //         installationDate: null,
  //         lastCalibrationDate: null,
  //         building: {
  //           id: 2,
  //           buildingName: "Bloco B",
  //           numberOfUnits: 30,
  //           createdAt: "2024-09-03T15:04:28Z",
  //         },
  //         status: "active",
  //       },
  //       readingValue: 8000000,
  //       readingDate: "2024-08-05T00:00:00Z",
  //       user: {
  //         id: 2,
  //         passwordHash: "hashed_password_2",
  //         username: "regular_user",
  //         userEmail: "regular_user@email.com",
  //         createdAt: "2024-09-03T09:28:19Z",
  //         userRole: 3,
  //         roleName: null,
  //       },
  //     },
  //     {
  //       readingId: "00000000-0000-0000-0000-000000000004",
  //       meter: {
  //         id: 2,
  //         installationDate: null,
  //         lastCalibrationDate: null,
  //         building: {
  //           id: 2,
  //           buildingName: "Bloco B",
  //           numberOfUnits: 30,
  //           createdAt: "2024-09-03T15:04:28Z",
  //         },
  //         status: "active",
  //       },
  //       readingValue: 10500000,
  //       readingDate: "2024-08-20T00:00:00Z",
  //       user: {
  //         id: 2,
  //         passwordHash: "hashed_password_2",
  //         username: "regular_user",
  //         userEmail: "regular_user@email.com",
  //         createdAt: "2024-09-03T09:28:19Z",
  //         userRole: 3,
  //         roleName: null,
  //       },
  //     },
  //   ],
  leituraUpdated: [],
};

const leituraReducer = (state = initiaState, action) => {
  switch (action.type) {
    case leituraActionTypes.OPENFORM:
      return { ...state, leituraIsOpen: action.payload };

    case leituraActionTypes.LOADLEITURA:
      return { ...state, leituraList: action.payload };

    case leituraActionTypes.UPDATELEITURA:
      return { ...state, leituraUpdated: action.payload };

    default:
      return state;
  }
};

export default leituraReducer;
