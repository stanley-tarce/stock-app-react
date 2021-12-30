import axios from 'axios'

export const apiCall = (method, object) => {
    const API_DOMAIN = 'https://avionstockapp.herokuapp.com'
    switch (method) {
        case 'signin':
            return axios.post(`${API_DOMAIN}/api/v1/auth/sign_in`, object.data)
        case 'signup':
            return axios.post(`${API_DOMAIN}/api/v1/traders`, object.data, { headers: object.headers })
        case 'signout':
            return axios.delete(`${API_DOMAIN}/api/v1/auth/sign_out`, { headers: object.headers })
        case 'admin#create':
            return axios.post(`${API_DOMAIN}/api/v1/admins`, object.data, { headers: object.headers })
        case 'trader#show':
            return axios.get(`${API_DOMAIN}/api/v1/traders/${object.trader_id}`, { headers: object.headers })
        case 'stocks#index': //Used in Maindashboard.js
            return axios.get(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/stocks`, { headers: object.headers })
        case 'transactionhistories#index': //Used in Maindashboard.js
            return axios.get(`${API_DOMAIN}/api/v1/traders/transaction_histories`, { headers: object.headers })
        case 'markets#index': //Used in Maindashboard.js
            return axios.get(`${API_DOMAIN}/api/v1/markets`, { headers: object.headers })
        case 'stocks#create':
            return axios.post(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/stocks`, object.data, { headers: object.headers })
        case 'stocks#buy_update':
            return axios.patch(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/buy/stocks/${object.stock_id}`, object.data, { headers: object.headers })
        case 'stocks#sell_update':
            return axios.patch(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/sell/stocks/${object.stock_id}`, object.data, { headers: object.headers })
        case 'trader#cash_in':
            return axios.patch(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/cash_in`, object.data, { headers: object.headers })
        case 'trader#cash_out':
            return axios.patch(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/cash_out`, object.data, { headers: object.headers })
        case 'admins#index':
            return axios.get(`${API_DOMAIN}/api/v1/admins`, { headers: object.headers })
        case 'admins#show':
            return axios.get(`${API_DOMAIN}/api/v1/admins/${object.admin_id}`, { headers: object.headers })
        case 'admins#update':
            return axios.patch(`${API_DOMAIN}/api/v1/admins/${object.admin_id}`, object.data, { headers: object.headers })
        case 'admins#destroy':
            return axios.delete(`${API_DOMAIN}/api/v1/admins/${object.admin_id}`, { headers: object.headers })
        case 'admins#update_global_stocks':
            return axios.patch(`${API_DOMAIN}/api/v1/admins/${object.admin_id}/update_global_stocks`, object.data, { headers: object.headers })
        default:
            throw new Error(`${method} is not a valid method`)
    }



}