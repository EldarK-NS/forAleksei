export {}

// import {SmthActionType} from '../action-types';
// import {ISmth, SmthActions} from '../actions/smth-actions/i-actions';

// export interface ISmthState {
//   smths: ISmth[];
//   smth: ISmth;
//   error: string | null;
//   loading: boolean;
// }

// const initialState={
//     smths:[],
//     smth:{},
//     error:null,
//     loading:false
// }


// export const smthReducer = (
//   state: ISmthState = initialState,
//   action: SmthActions,
// ): ISmthState => {
//   switch (action.type) {
//     case SmthActionType.GET_SMTH:
//       return {
//         ...state,
//         users: action.payload,
//         loading: false,
//         error: null,
//       }
//     default:
//       return state;
//   }
// };
