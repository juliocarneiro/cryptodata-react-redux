import {combineReducers} from 'redux'
import getData from './getDataReducer'
import getDataCoin from './getDataCoinReducer'

const rootReducer = combineReducers({
    getData,
    getDataCoin
})

export default rootReducer