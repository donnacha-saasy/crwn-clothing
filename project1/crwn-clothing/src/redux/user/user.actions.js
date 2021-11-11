//sets current user to user object, returns object where type is set_current_user, formatted for reducer

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});