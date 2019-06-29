import axios from 'axios'

export const FETCHING = 'FETCHING'
export const CREATING = 'CREATING' 
export const DELETING = 'DELETING'
export const UPDATING = 'UPDATING' 
export const NOT_UPDATING = 'NOT_UPDATING' 

export const DATA_SUCCESS = 'DATA_SUCCESS' 

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
  dispatch({type: NOT_UPDATING})

  axios
    .put(`http://localhost:3333/smurfs/${newSmurf.id}`, newSmurf)
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })

    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}

export const changeUpdate = () => dispatch => {
  dispatch({type: UPDATING})

}
export const deleteSmurf = (deleteSmurf) => dispatch => {
  dispatch({type: FETCHING})

  axios
    .delete(`http://localhost:3333/smurfs/${deleteSmurf.id}`, deleteSmurf)
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })

    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}
