
import {initialStat} from "../initialStat.js";
import {
    ANSWER_CORRECT,
    ANSWER_INCORRECT,
    UN_ANSWERED,
    FIFTY_FIFTY,
    EXTEND_TIME,
} from '../actions/_ActionsTypes'


export default function QuizReducer(state = initialStat, action) {
    switch (action.type) {
        
        case ANSWER_CORRECT:
            return Object.assign({}, state, action.payload);

        case ANSWER_INCORRECT:
            return Object.assign({}, state, action.payload);

        case UN_ANSWERED:
            return Object.assign({}, state, action.payload);

        case FIFTY_FIFTY:
            return Object.assign({}, state, action.payload);

        case EXTEND_TIME:
            console.log("Here")
            return Object.assign({}, state, action.payload);

        default :
            return state
    }
}