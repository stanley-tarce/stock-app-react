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
        case 'create_admin':
            return axios.post(`${API_DOMAIN}/api/v1/admins`, object.data, { headers: object.headers })
        case 'get_single_trader':
            return axios.get(`${API_DOMAIN}/api/v1/traders/${object.id}`, { headers: object.headers })
        case 'get_all_stocks': //Used in Maindashboard.js
            return axios.get(`${API_DOMAIN}/api/v1/traders/${object.trader_id}/stocks`, { headers: object.headers })
        case 'get_all_transaction_histories': //Used in Maindashboard.js
            return axios.get(`${API_DOMAIN}/api/v1/traders/transaction_histories`, { headers: object.headers })
        case 'get_all_markets': //Used in Maindashboard.js
            return axios.get(`${API_DOMAIN}/api/v1/markets`, { headers: object.headers })
        default:
            console.log(`apiCall: ${method} not found`)
            break;
    }



}