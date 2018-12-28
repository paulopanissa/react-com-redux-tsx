import * as ActionTypes from './ActionTypes'

export interface CounterAction {
    type: string,
    payload: {
        value: number
    }
}

const onIncrement = (value: number) => {
    return {
        type: ActionTypes.ON_INCREMENT,
        payload: {
            value
        }
    }
}

const onDecrement = (value: number) => {
    return {
        type: ActionTypes.ON_DECREMENT,
        payload: {
            value
        }
    }
}

export default {
    onIncrement,
    onDecrement,
}