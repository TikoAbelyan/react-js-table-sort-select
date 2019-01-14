import * as actionTypes from '../action-types';

export default ( state = {} , action ) => {
  switch(action.type){
    case actionTypes.getData:
      return {
          ...state,
          items: [...action.payload]
      };
    default: 
      return state;
  }
}