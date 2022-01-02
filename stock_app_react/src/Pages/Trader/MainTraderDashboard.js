import React, { useRef, useContext, useEffect } from 'react'
import { CreateContext } from '../../Data/DataHooks'
import { apiCall } from '../../Utility/Utility'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import HomeButtonTrader from '../../Assets/homebuttontrader'
import MarketsButtonTrader from '../../Assets/marketsbuttontrader'
import UserButtonTrader from '../../Assets/usertraderbutton'
import WalletButtonTrader from '../../Assets/walletbuttontrader'

function MainDashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const homeButtonRef = useRef()
  const marketButtonRef = useRef()
  const walletButtonRef = useRef()
  const userButtonRef = useRef()
  
/*   const routes = useRoutes([
    { path: '/main', element: <TraderHomeDisplay />, exact: true }])
 */

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

console.log(totalData.TRADERINFO.name)
/*   useEffect(() => {
    location.pathname === '/main' ? homeButtonRef.current.setAttribute('fill', 'white') : homeButtonRef.current.setAttribute('fill', 'black')
    location.pathname === '/trader/markets' ? marketButtonRef.current.setAttribute('fill', 'white') : marketButtonRef.current.setAttribute('fill', 'black')
    location.pathname === '/trader/wallet' ? walletButtonRef.current.setAttribute('fill', 'white') : marketButtonRef.current.setAttribute('fill', 'black')
    location.pathname === '/trader/user' || location.pathname.includes('/admin/users') ? userButtonRef.current.setAttribute('fill', 'white') : userButtonRef.current.setAttribute('fill', 'black')
  }, [location.pathname]) */
  

  return (
    <div className='w-screen h-screen bg-primary-blue-light flex flex-col justify-center'>
    <div className='w-full h-[calc(100%-70px)]'><Outlet /></div>
    <div className='w-full h-[70px] flex justify-between items-center bg-primary-navbar-color-blue '>
      <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('')}><HomeButtonTrader fill={"black"} ref={homeButtonRef} /></div>
      <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('/tradermarkets')}><MarketsButtonTrader fill={"black"} ref={marketButtonRef} /></div>
      <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('/traderwallet')}><WalletButtonTrader fill={"black"} ref={walletButtonRef} /></div>
      <div className='w-1/3 h-full flex justify-center items-center text-white' onClick={() => navigate('/traderuser')}><UserButtonTrader fill={"black"} ref={userButtonRef} /></div>
    </div>
  </div>
  )
}

export default MainDashboard
