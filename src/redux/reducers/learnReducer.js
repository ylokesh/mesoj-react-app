import { LOAD_SUBJECT, LOAD_TOPICS } from "../actions/types";

const initialState = {
    subjectList: [],
    topicList: [],
    loading: true
};
export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_SUBJECT:
            return {
                ...state, subjectList: loadSubjectlist(action.payload), loading: false
            };
        case LOAD_TOPICS:
            return {
                ...state, topicList: loadTopicList(action.payload), loading: false
            }
        default:
            return state;
    }
}

function loadSubjectlist(payload) {
    return payload.map((item) => item);
}

function loadTopicList(payload) {
    return payload.map(item => item);
}