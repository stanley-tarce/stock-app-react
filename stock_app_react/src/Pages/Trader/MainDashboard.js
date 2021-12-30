import React, { useContext, useEffect } from 'react'
import { CreateContext } from '../../Data/DataHooks'
import { apiCall } from '../../Utility/Utility'
import { useNavigate, useLocation } from 'react-router-dom'


function MainDashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const { headers, totalData, setTotalData, setHeaders } = useContext(CreateContext)
  const fetchData = Promise.all([apiCall('markets#index', { headers: headers }), apiCall('stocks#index', { headers: headers, trader_id: totalData.TRADERINFO.id }), apiCall('transactionhistories#index', { headers: headers, trader_id: totalData.TRADERINFO.id })])
  useEffect(() => {
    console.log(headers)
    fetchData.then(response => {
      const [markets, stocks, transactionHistories] = response
      console.log(markets.data)
      console.log(stocks.data)
      console.log(transactionHistories.data)
      setTotalData({ ...totalData, MARKETS: [...markets.data], TRADERSTOCKS: [...stocks.data], TRADERTRANSACTIONS: [...transactionHistories.data] })
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
