import {
    ANSWER_CORRECT,
    ANSWER_INCORRECT,
    UN_ANSWERED,
    FIFTY_FIFTY,
    EXTEND_TIME,
} from './_ActionsTypes'


export const AnswerCorrect = (data) => {
    return {
        type: ANSWER_CORRECT,
        payload: data
    }
}

export const AnswerInCorrect = data => {
    return {
        type: ANSWER_INCORRECT,
        payload: data
    }
}

export const UnAnswered = data => {
    return {
        type: UN_ANSWERED,
        payload: data
    }
}

export const FiftyFifty = data => {
    return {
        type: FIFTY_FIFTY,
        payload: data
    }
}

export const ExtendTime = data => {
    return {
        type: EXTEND_TIME,
        payload: data
    }
}

