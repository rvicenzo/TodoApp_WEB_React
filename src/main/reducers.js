import { combineReducers } from 'redux'
import loginReducer from '../login/loginReducer'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    todo: todoReducer
})

export default rootReducer