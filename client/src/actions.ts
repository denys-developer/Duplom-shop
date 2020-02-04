export const setAuthState = (state: boolean) => {
    console.log(state);
    return {
        type: 'AUTH_STATE',
        state:state
    }
}