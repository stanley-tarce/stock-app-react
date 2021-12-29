import { useContext } from 'react'
import { CreateContext } from '../Data/DataHooks'
import { axios } from 'axios'

export const userSignIn = (email, password) => {

    // const {
    //     setLoginEmailState,
    //     setLoginPasswordState,
    //     setHeaders,
    // } = useContext(CreateContext)

    const data = {
        email: email,
        password: password,
    }

    const config = {
        method: 'POST',
        // url: 
        headers: {},
        data: data,

    }

    axios(config)
    .then((response) => {
        // setLoginEmailState(true)
        // setLoginPasswordState(true)
        console.log('here')

        // setHeaders({
        //     'access-token': response.headers['access-token'],
        //     'client': response.headers.client,
        //     'expiry': response.headers.expiry,
        //     'uid': response.headers.uid
        // })
    })
    // .catch()

}