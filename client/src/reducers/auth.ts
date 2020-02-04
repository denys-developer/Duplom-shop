interface Action {
    type: string,
    state: boolean
}
const authReducer = (state = false, action: Action) => {
    switch (action.type) {
        case 'AUTH_STATE':
            return action.state;
        default:
            return state
    }

}
export default authReducer;