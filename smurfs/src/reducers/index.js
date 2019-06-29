import { FETCHING, CREATING, UPDATING, NOT_UPDATING, DELETING, DATA_SUCCESS, DATA_FAIL } from '../actions'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCHING: {
          return {
            ...state,
          }
        }
        case DATA_SUCCESS: {
          return {
            ...state,
            smurfs: action.payload,
          }
        }
        case DATA_FAIL: {
          return {
            ...state,
          }
        }
        case CREATING: {
          return {
              ...state,
          }
        }
        case UPDATING: {
          return {
              ...state,
              updatingSmurf: true,

          }
        }
        case NOT_UPDATING: {
          return {
            ...state,
            updatingSmurf: false,
          }
        }
        case DELETING: {
          return {
            ...state,
          }
        }
        default: 
            return state;
        }
}

export default reducer
