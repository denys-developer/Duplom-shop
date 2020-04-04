interface Action {
    type: string,
    state: boolean
};

export default (state = false, action: Action) => {
    switch (action.type) {
        case 'AUTH_STATE':
            return action.state;
        default:
            return state
    }
};


