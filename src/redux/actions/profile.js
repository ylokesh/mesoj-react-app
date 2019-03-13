
import { LOAD_USER_PROFILE, UPDATE_USER_PROFILE } from '../constants'
import Api from '../../api/Api'


export function loadUserProfile(userid, size) {
    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading User profile..' })
        Api.loadUserProfile(userid, size)
            .then(response => response.data)
            .then(userProfile => {
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: LOAD_USER_PROFILE, userProfile }) // async action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading user' })
            })
    }
}
export function updateUserProfile(userProfile, size) {
    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Updating User profile..' })
        Api.updateUserProfile(userProfile)
            .then(response => response.data)
            .then(userProfile => {
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: UPDATE_USER_PROFILE, userProfile }) // async action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while updating user' })
            })
    }
}