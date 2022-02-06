
export const updateHeader = (response, headers, setHeaders) => {
    if (!(response.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'] })
        console.log("Headers Changed")
    }
}