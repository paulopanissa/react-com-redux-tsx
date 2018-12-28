export default (state: any = {}, action: any) => {
    switch (action.type) {
        case 'SAY_HELLO':
            return Object.assign({}, state, { message: 'Hello World' })
        default:
            return state;
    }
}