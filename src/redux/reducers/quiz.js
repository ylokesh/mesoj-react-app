



import { LOAD_QUIZ_LIST,LOAD_QUIZ_RESPONSE,LOAD_WEEK_QUIZ_LIST, LOAD_WEEK_QUIZ_RESPONSE,
    UPDATE_TOTAL_QUIZ_CORRECT, UPDATE_TOTAL_QUIZ_INCORRECT ,
    UPDATE_TOTAL_QUIZ_PERCENT, UPDATE_TOTAL_QUIZ_COUNT } from '../constants'


export function quizReducer(state = [], action) {
    // console.log("-quiz-reducer-");
    switch (action.type) {
        case LOAD_QUIZ_LIST: {
            let { quizList } = action
            return [...quizList]
        }
        default:
            return state;
    }
}
export function weekQuizReducer(state = [], action) {
    // console.log("-quiz-reducer-");
    switch (action.type) {
        case LOAD_WEEK_QUIZ_LIST: {
            let { weekQuizList } = action;
            return [...weekQuizList]
        }
        default:
            return state;
    }
}
export function totalQuizCorrectReducer(state = 0, action) {
    switch (action.type) {
        case UPDATE_TOTAL_QUIZ_CORRECT: {
            let { value } = action;
            return state+value;
        }
        default:
            return state;
    }
}
export function totalQuizInCorrectReducer(state = 0, action) {
    switch (action.type) {
        case UPDATE_TOTAL_QUIZ_INCORRECT: {
            let { value } = action;
            return state+value;
        }
        default:
            return state;
    }
}
export function totalQuizPercentReducer(state = 0, action) {
    switch (action.type) {
        case UPDATE_TOTAL_QUIZ_PERCENT: {
            let { value } = action;
            return state + value;
        }
        default:
            return state;
    }
}
export function totalQuizCountReducer(state = 0, action) {
    switch (action.type) {
        case UPDATE_TOTAL_QUIZ_COUNT: {
            return state+=1;
        }
        default:
            return state;
    }
}

export function quizResponseReducer(state = {}, action) {
    // console.log("-quiz-Response-reducer-");
    switch (action.type) {
        case LOAD_QUIZ_RESPONSE: {
            let { quizid, quizResponse } = action;
            //let existingResponse = state[quizid] || [];
            quizResponse = [...quizResponse]
            return Object.assign({}, state, { [quizid]: quizResponse })
        }
        default:
            return state;
    }
}
export function weekQuizResponseReducer(state = {}, action) {
    // console.log("-quiz-Response-reducer-");
    switch (action.type) {
        case LOAD_WEEK_QUIZ_RESPONSE: {
            let { weekQuizid, weekQuizResponse } = action;
            let existingResponse = state[weekQuizid] || [];
            weekQuizResponse = [...existingResponse, ...weekQuizResponse]
            return Object.assign({}, state, { [weekQuizid]: weekQuizResponse })
        }
        default:
            return state;
    }
}