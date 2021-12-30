import React, { useContext, useEffect } from 'react'
import { CreateContext } from '../../Data/DataHooks'
import { apiCall } from '../../Utility/Utility'
import { useNavigate, useLocation } from 'react-router-dom'


function MainDashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const { headers, traderData, setHeaders } = useContext(CreateContext)
  const fetchData = Promise.all([apiCall('get_all_markets', { headers: headers }), apiCall('get_all_stocks', { headers: headers, trader_id: traderData.id }), apiCall('get_all_transaction_histories', { headers: headers, trader_id: traderData.id })])
  useEffect(() => {
    console.log(headers)
    fetchData.then(response => {
      const [markets, stocks, transactionHistories] = response
      console.log(markets.data)
      console.log(stocks.data)
      console.log(transactionHistories.data)
      if ((markets.headers['access-token'] === '') || (stocks.headers['access-token'] === '') || (transactionHistories.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'client': transactionHistories.headers['client'], 'uid': transactionHistories.headers['uid'] })
        console.log("Headers Didnt Change")
      }
      else {
        setHeaders({ ...headers, 'access-token': transactionHistories.headers['access-token'], 'client': transactionHistories.headers['client'], 'uid': transactionHistories.headers['uid'] })
        console.log("Headers Changed")
      }
    })
  }, [location.pathname])

  return (
    <div>

    </div>
  )
}

export default MainDashboard
