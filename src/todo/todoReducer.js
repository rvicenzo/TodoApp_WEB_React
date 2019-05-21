const INITIAL_STATE = { title: '', description: '', price: 0, list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TITLE_CHANGED': 
            return { ...state, title: action.payload }
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description: action.payload }
        case 'PRICE_CHANGED': 
            return { ...state, price: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }        
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}