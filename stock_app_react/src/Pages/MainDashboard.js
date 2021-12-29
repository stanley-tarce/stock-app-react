import React, { useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CreateContext } from '../Data/DataHooks'
import { apiCall } from '../Utility/Utility'

function MainDashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const
    {
      headers,
      setHeaders,
      marketData,
      setMarketData
    } = useContext(CreateContext)
  useEffect(
    () => {
      // const [market, stocks, transaction_history, trader_info] = Promise.all(apiCall()) 
    }
  )
  return (
    <div>

    </div>
  )
}

export default MainDashboard
