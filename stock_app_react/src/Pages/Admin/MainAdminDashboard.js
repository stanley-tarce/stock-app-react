import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { apiCall } from '../../Utility/Utility'
import { CreateContext } from '../../Data/DataHooks'
function MainAdminDashboard() {
  const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
  const location = useLocation()
  const navigate = useNavigate()
  const fetchData = Promise.all([apiCall('markets#index', { headers: headers }), apiCall('traders#index', { headers: headers })])
  useEffect(() => {
    fetchData.then(response => {
      const [markets, traders] = response
      console.log(markets)
      console.log(traders)
      setTotalData({ ...totalData, MARKETS: [...markets.data], ADMINLISTOFTRADERS: [...traders.data] })
      if ((markets.headers['access-token'] === '') || (traders.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'client': traders.headers['client'], 'uid': traders.headers['uid'] })
        console.log("Headers Didnt Change")
      }
      else {
        setHeaders({ ...headers, 'access-token': traders.headers['access-token'], 'client': traders.headers['client'], 'uid': traders.headers['uid'] })
        console.log("Headers Changed")
      }

    })
  }, [location.pathname])
  return (
    <div className='w-screen h-screen bg-primary-blue-light flex flex-col justify-center'>
      <div className='w-full h-[calc(100%-70px)]'><Outlet /></div>
      <div className='w-full h-[70px] flex justify-between items-center bg-primary-navbar-color-blue '>
        <div className='w-[50%] h-full flex justify-center items-center text-white'><p className='mt-3 pointer-events-none'>Home</p></div>
        <div className='w-[50%] h-full flex justify-center items-center text-white'><p className='mt-3 pointer-events-none'>User</p></div>
      </div>
    </div>
  )
}

export default MainAdminDashboard
