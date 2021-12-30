import React from 'react'
import { apiCall } from '../Utility/Utility'

function PendingAccounts() {
    const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
    
    const fetchData = apiCall('traders#index', { headers: headers })
   
    useEffect(() => {
        fetchData.then(response => {
          const traders = response
          console.log(traders)
          setTotalData({ ...totalData, ADMINLISTOFTRADERS: [...traders.data] })
          if (traders.data.data.status === 'pending') {
            setHeaders({ ...headers, 'client': traders.headers['client'], 'uid': traders.headers['uid'] })
            console.log("Headers Didnt Change")
          }
          else {
            setHeaders({ ...headers, 'access-token': traders.headers['access-token'], 'client': traders.headers['client'], 'uid': traders.headers['uid'] })
            console.log("Headers Changed")
          }
        })
      }, [])
    return (
        <div>
            
        </div>
    )
}

export default PendingAccounts
