import React, { useContext, useState, useEffect } from 'react'
import { CreateContext } from '../Data/DataHooks'
import { apiCall } from '../Utility/Utility'

function PendingAccounts() {
  const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
  const [ pending, setPending ] = useState([])
  
  const fetchData = apiCall('traders#index', { headers: headers })

  fetchData.then(response => {
    setHeaders({ 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
    // setUserData({ id: response.data.data.id, email: response.data.data.email, user_type: response.data.data.user_type, name: response.data.data.name })
    setTotalData({ ...totalData, ADMINLISTOFTRADERS: [...response.data] })
  })

  useEffect((totalData, pending) => {
    if (totalData) {
      setPending(totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending'))
    }
    return pending
  }, [fetchData])

  return (
    <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
      {
        pending.map((acct) => <ul><li>{acct}</li></ul>)
      }
    </div>
  )
}

export default PendingAccounts

// const displayPending = (totalData) => {
//   if (totalData) {
//     setPending(totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending'))
//   }
//   return pending
// }
