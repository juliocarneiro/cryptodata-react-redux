const INITIAL_STATE = {
    coins: [],
    error: '',
}
export default function getData(state = INITIAL_STATE, action){
    switch(action.type){
        case 'GET_API_COINS':
            return{
                coins: action.coins
            }
        case 'GET_API_ERROR':
            return{
                error: action.error
            }

        default: return state
    }
}