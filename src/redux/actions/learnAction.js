import axios from 'axios';
import { LOAD_SUBJECT, LOAD_TOPICS } from './types';

export function loadTopics(id) {
    function getTopic() {
        return axios.get(`http://localhost:9000/api/topic/${id}`);
    }
    return function (dispatch) {

        getTopic()
            .then(response => response.data.Response)
            .then(res => {
                dispatch({
                    type: LOAD_TOPICS,
                    payload: res
                });
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: error })
            })
    };
}

export function loadLearn() {

    function getLearn() {
        return axios.get('http://localhost:9000/api/subject/getSubject');
    }
    // thunk
    return function (dispatch) {

        getLearn()
            .then(response => response.data.Response)
            .then(res => {
                dispatch({
                    type: LOAD_SUBJECT,
                    payload: res
                });
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: error })
            })
    }

}

