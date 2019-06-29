import axios from 'axios'

export const FETCHING = 'FETCHING'
export const CREATING = 'CREATING' 
export const DELETING = 'DELETING'
export const UPDATING = 'UPDATING' 
export const DATA_SUCCESS = 'DATA_SUCCESS' 
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS' 

export const DATA_FAIL = 'DATA_FAIL' 

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({type: FETCHING})
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}

export const updateSmurf = (newSmurf) => dispatch => {
  dispatch({type: FETCHING})
  dispatch({type: UPDATING})

  console.log(newSmurf)
  axios
    .put(`http://localhost:3333/smurfs/${newSmurf.id}`, newSmurf)
    .then(response => {
      dispatch({type: UPDATE_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}

export const changeUpdate = () => dispatch => {
  dispatch({type: UPDATING})
}



// export const login = (creds) => dispatch => {
//     dispatch({type: LOGGING_IN})
//     return axios
//         .post('http://localhost:5000/api/login', creds)
//         .then(response => localStorage.setItem('token', response.data.payload))
//         .catch(error => {
//             if(error.response.status === 403) {
//                 localStorage.removeItem('token')
//             dispatch({type: GET_DATA_FAIL})
//             }
//         })
// }

// export const dataActions = () => dispatch => {
//     dispatch({type: GET_DATA_START})
//     axios
//         .get('http://localhost:5000/api/friends', {
//             headers: { authorization: localStorage.getItem('token')}
//         })
//         .then(response => {
//             dispatch({type: GET_DATA_SUCCESS, payload: response.data})
//         })
//         .catch(error => {
//             dispatch({type: GET_DATA_FAIL, payload: error.msg})
//         })
// }

// export const deleteItem = (friend) => dispatch => {
//     dispatch({type: GET_DATA_START})
//     axios
//         .delete(`http://localhost:5000/api/friends/${friend.id}`, { 
//         headers: { authorization: localStorage.getItem('token')}
//             })
//         .then(response => {
//             dispatch({type: GET_DATA_SUCCESS, payload: response.data})
//             })
//         .catch(error => alert(error))
// }

// export const updateItem = (friend) => dispatch => {
//     dispatch({type:UPDATE_START, payload: friend} )

// }

// export const friendSubmit = (friend) => dispatch => {
//     dispatch({type: GET_DATA_START})
//         axios
//         .put(`http://localhost:5000/api/friends/${friend.id}`, friend ,{ 
//             headers: { authorization: localStorage.getItem('token')}
//                 })
//         .then(response => {
//             dispatch({type: GET_DATA_SUCCESS, payload: response.data})
//             })
//         .catch(error => alert(error))
// }

    
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
