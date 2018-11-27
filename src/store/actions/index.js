import axios from 'axios'

export const getData = () => {
    return dispatch => {
        axios.get(`https://api.coingecko.com/api/v3/coins`)
        .then(res => {
            dispatch({
                type: 'GET_API_COINS',
                coins: res.data
            })
        })
        .catch(error => {
            dispatch({ type: 'GET_API_ERROR', error })
        })
    }
}

export const getDataCoin = (coin) => {
    return dispatch => {
        dispatch({
            type: 'GET_API_COINS_PAGE',
            coinsPage: ''
        })
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(res => {
            dispatch({
                type: 'GET_API_COINS_PAGE',
                coinsPage: res.data
            })
        })
        .catch(error => {
            dispatch({ type: 'GET_API_ERROR', error })
        })
    }
}