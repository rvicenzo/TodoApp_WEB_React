import axios from 'axios'

const URL = 'http://localhost:3003/auth'

export const changeUsername = e => ({
    type: 'USERNAME_CHANGED',
    payload: e.target.value
})

export const changePassword = e => ({
    type: 'PASSWORD_CHANGED',
    payload: e.target.value
})

export const login = (username, password) => {
    return dispatch => {
        axios.get(`${URL}/login?email=${username}&password=${password}`)
            .then(resp => {
                dispatch(authenticate(resp.data.auth, resp.data.token))                
                localStorage.setItem("userToken", resp.data.token)
                axios.get(`${URL}/me/7`, { headers: { "Authorization": resp.data.token }})
                    .then(me => {                        
                        localStorage.setItem("userData", JSON.stringify(me.data.user))                
                        location.href = "#/todos"
                    })
                    .catch(e => {
                        console.log(e)
                    })
            })
            .catch(e => {
                alert("Usuário e/ou senha incorretos.")
            })
    }
}

export const authenticate = (auth, token) => {
    return { 
        type: 'AUTHENTICATE_USER', 
        payload: { auth, token } 
    }
}

export const clear = () => {
    return { type: 'LOGIN_CLEAR' }
}