import React, { useContext, useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { apiCall } from '../../Utility/Utility'
import { CreateContext } from '../../Data/DataHooks'
import MarketsButtonAdmin from '../../Assets/marketsbuttonadmin'
import HomeButtonAdmin from '../../Assets/homebuttonadmin'
import UsersButtonAdmin from '../../Assets/usersbuttonadmin'
function MainAdminDashboard() {
  const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
  const location = useLocation()
  const navigate = useNavigate()
  const fetchData = Promise.all([apiCall('markets#index', { headers: headers }), apiCall('traders#index', { headers: headers })])
  const [marketButtonRef, userButtonRef, homeButtonRef] = [useRef(), useRef(), useRef()]
  useEffect(() => {
    location.pathname === '/admin' ? homeButtonRef.current.setAttribute('fill', 'white') : homeButtonRef.current.setAttribute('fill', '#0F253A')
    location.pathname === '/admin/markets' || location.pathname.includes('/admin/markets') ? marketButtonRef.current.setAttribute('fill', 'white') : marketButtonRef.current.setAttribute('fill', '#0F253A')
    location.pathname === '/admin/users' || location.pathname.includes('/admin/users') ? userButtonRef.current.setAttribute('fill', 'white') : userButtonRef.current.setAttribute('fill', '#0F253A')
  }, [location.pathname])
  useEffect(() => {
    fetchData.then(response => {
      const [markets, traders] = response
      setTotalData({ ...totalData, MARKETS: [...markets.data], ADMINLISTOFTRADERS: [...traders.data] })
      if (!(markets.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': markets.headers['access-token'], 'client': markets.headers['client'], 'uid': markets.headers['uid'], 'expiry': markets.headers['expiry'] })
        console.log("Headers Changed for Markets")
      }
      if (!(traders.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': traders.headers['access-token'], 'client': traders.headers['client'], 'uid': traders.headers['uid'], 'expiry': traders.headers['expiry'] })
        console.log("Headers Changed for Traders")
      }
    }).catch(error => {
      console.log(error[0].response)
    })
  }, [location.pathname])
  return (
    <div className='w-screen h-screen bg-primary-blue-light flex flex-col justify-center'>
      <div className='w-full h-[calc(100%-70px)]'><Outlet /></div>
      <div className='w-full h-[70px] flex justify-between items-center bg-primary-navbar-color-blue '>
        <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('')}><HomeButtonAdmin fill={"black"} ref={homeButtonRef} /></div>
        <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('users')}><UsersButtonAdmin fill={"black"} ref={userButtonRef} /></div>
        <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('markets')}><MarketsButtonAdmin fill={"black"} ref={marketButtonRef} /></div>
      </div>
    </div>
  )
}

export default MainAdminDashboard
