import axios from 'axios';
import { LOAD_QUIZ, LAUNCH_QUIZ } from './types';


export function loadQuiz(type, size) {
    function getQuiz(type, size) {
        return axios.get('http://localhost:9000/api/quiz/list');
    }
    // thunk
    return function (dispatch) {
        dispatch({ type: 'QUIZ_REQUEST_BEGIN', message: 'Loading quiz list..' })
        getQuiz(type, size)
            .then(response => response.data.Response)
            .then(quizList => {
                dispatch({ 
                    type: LOAD_QUIZ,
                    quizList 
                });
            })
            .catch(error => {
                dispatch({ type: 'QUIZ_REQUEST_ERROR', message: 'Error while loading quiz list' })
            })
    }

}

export function launchQuiz(id) {
    function getQuizQuestions(id) {
        // return axios.get('http://localhost:9000/api/quiz/list');
        return axios.get('http://localhost:9000/api/quizQuestions/list?quiz_id='+id);
    }
    // thunk
    return function (dispatch) {
        dispatch({ type: 'QUIZ_REQUEST_BEGIN', message: 'Loading quiz list..' })
        getQuizQuestions(id)
            .then(response => response.data.Response)
            .then(quiz => {
                dispatch({ 
                    type: LAUNCH_QUIZ, 
                    quiz 
                });
            })
            .catch(error => {
                dispatch({ type: 'QUIZ_REQUEST_ERROR', message: 'Error while loading quiz' })
            })
    }

}