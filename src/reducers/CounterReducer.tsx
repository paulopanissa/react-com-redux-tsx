import * as ActionTypes from '../actions/ActionTypes'
import {CounterAction} from '../actions/CounterActions';

export default function counter(state: any = { value: 0 }, action: CounterAction) {
    switch (action.type) {
        case ActionTypes.ON_INCREMENT:
            let valueInc = action.payload.value

            if (valueInc === undefined) {
                valueInc = 0
            }
            return Object.assign({}, state, { value: (valueInc + 1) })
        break;

        case ActionTypes.ON_DECREMENT:
            let valueDec = action.payload.value
            if (valueDec === undefined) {
                valueDec = 0
            }
            return Object.assign({}, state, { value: (valueDec - 1) })
        break;

        default:
            return state
    }
}