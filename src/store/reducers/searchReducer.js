import {
    HANDLE_SEARCH
  } from "../constants";
  
  const initialState = {
    handleSearch : {}
  };
  
  export default function searchReducer(state = initialState, action) {
    switch (action.type) {
  
        
      case HANDLE_SEARCH:
        return {
          ...state,
           handleSearch: action.payload,
        };
  
      default:
        return state;
    }
  }
  