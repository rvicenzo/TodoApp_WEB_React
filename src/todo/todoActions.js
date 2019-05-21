import axios from 'axios'

const URL = 'http://localhost:3003/api/products'

export const changeTitle = e => ({
    type: 'TITLE_CHANGED',
    payload: e.target.value
})

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

export const changePrice = e => ({
    type: 'PRICE_CHANGED',
    payload: e.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const token = localStorage.getItem("userToken")        
        axios.get(URL, { headers: { "Authorization": token }})
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data.data }))
    }
}

export const add = (product) => {
    return dispatch => {
        const token = localStorage.getItem("userToken")        
        axios.post(URL, product, { headers: { "Authorization": token }})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        const token = localStorage.getItem("userToken")
        axios.delete(`${URL}/${todo.id}`, { headers: { "Authorization": token }})
            .then(resp => dispatch({ type: 'TODO_CLEAR', payload: '' }))
            .then(resp => dispatch(search()))            
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}