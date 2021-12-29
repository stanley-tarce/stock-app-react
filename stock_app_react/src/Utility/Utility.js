import axios from 'axios'

export const apiCall = (method, headers = null, data = null) => {
    const API_DOMAIN = 'https://avionstockapp.herokuapp.com'
    switch (method) {
        case 'signin':
            return axios.post(`${API_DOMAIN}/api/v1/auth/sign_in`, data)
        case 'signup':
            return axios.post(`${API_DOMAIN}/api/v1/traders`, data, headers)
        case 'signout':
            return axios.delete(`${API_DOMAIN}/api/v1/auth/sign_out`, headers)
        case 'create_admin':
            return axios.post(`${API_DOMAIN}/api/v1/admins`, data, headers)
        default:
            console.log(`apiCall: ${method} not found`)
            break;
    }
}
