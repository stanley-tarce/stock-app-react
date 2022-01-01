import React, { useContext, useState, useEffect } from 'react'
import { CreateContext } from '../Data/DataHooks'
import AdminHomeDisplay from '../Pages/Admin/MainAdminDashboardChildrens/AdminHomeDisplay'
import { apiCall } from '../Utility/Utility'

function PendingAccounts() {
  const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
  const [ pendingAccts, setPendingAccts ] = useState([])
  
  apiCall('traders#index', { headers: headers } )
    .then(response => {
      setHeaders({ 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
      setTotalData({ ...totalData, ADMINLISTOFTRADERS: [...response.data] })
    })
    .catch(error => console.log(error.response))
    
  useEffect((totalData, pendingAccts) => {
    if (totalData) {
      setPendingAccts(totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending'))
    }
    return pendingAccts
  }, [totalData])

  return (
    <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
        HELLO YASSI
    </div>
  )
}

export default PendingAccounts


