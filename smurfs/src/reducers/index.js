import { FETCHING, CREATING, UPDATING, DELETING, DATA_SUCCESS, DATA_FAIL } from '../actions'


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
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
