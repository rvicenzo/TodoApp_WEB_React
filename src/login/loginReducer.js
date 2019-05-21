const INITIAL_STATE = { auth: false, token: null }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USERNAME_CHANGED': 
            return { ...state, username: action.payload }
        case 'PASSWORD_CHANGED': 
            return { ...state, password: action.payload }
        case 'AUTHENTICATE_USER': 
            return { ...state, auth: action.payload.auth, token: action.payload.token }        
        case 'LOGIN_CLEAR': 
            return { ...state, username: '', password: '' }
        default:
            return state
    }
}