const INITIAL_STATE = {
    currentUser: null
}

//reducers get all actions even if they are not related
//function that gets state object and an action
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //if case is SET_CURRENT_USER sets new state that it will transform into
        //checks if case is = SET_CURRENT_USER
        case 'SET_CURRENT_USER':
            return {
                ...state,
                //returns new current user
                currentUser: action.payload
            }

        default:
            return state;
    }
}
export default userReducer;