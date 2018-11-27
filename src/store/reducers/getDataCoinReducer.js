const INITIAL_STATE = {
    coinsPage: [],
    error: '',
}
export default function getData(state = INITIAL_STATE, action){
    switch(action.type){
        case 'GET_API_COINS_PAGE':
            return{
                coinsPage: action.coinsPage
            }
        case 'GET_API_ERROR':
            return{
                error: action.error
            }

        default: return state
    }
}