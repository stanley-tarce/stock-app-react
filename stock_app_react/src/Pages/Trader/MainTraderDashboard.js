import React, { useRef, useContext, useEffect } from 'react'
import { CreateContext } from '../../Data/DataHooks'
import { apiCall } from '../../Utility/Utility'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import HomeButtonTrader from '../../Assets/homebuttontrader'
import UserButtonTrader from '../../Assets/usertraderbutton'
import WalletButtonTrader from '../../Assets/walletbuttontrader'

function MainDashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const homeButtonRef2 = useRef()
  const marketButtonRef2 = useRef()
  const walletButtonRef2 = useRef()
  const userButtonRef2 = useRef()


  const { headers, totalData, setTotalData, setHeaders } = useContext(CreateContext)
  const fetchData = Promise.all([apiCall('markets#index', { headers: headers }), apiCall('stocks#index', { headers: headers, trader_id: totalData.TRADERINFO.id }), apiCall('transactionhistories#index', { headers: headers, trader_id: totalData.TRADERINFO.id })])

  useEffect(() => {
    console.log(headers)
    fetchData.then(response => {
      const [markets, stocks, transactionHistories] = response
      setTotalData({ ...totalData, MARKETS: [...markets.data], TRADERSTOCKS: [...stocks.data], TRADERTRANSACTIONS: [...transactionHistories.data] })

      if (!(markets.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': markets.headers['access-token'], 'client': markets.headers['client'], 'uid': markets.headers['uid'] })
        console.log("Headers Changed")
      }
      if (!(stocks.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': stocks.headers['access-token'], 'client': stocks.headers['client'], 'uid': stocks.headers['uid'] })
        console.log("Headers Changed")
      }
      if (!(transactionHistories.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': transactionHistories.headers['access-token'], 'client': transactionHistories.headers['client'], 'uid': transactionHistories.headers['uid'] })
        console.log("Headers Changed")
      }
    })
  }, [location.pathname])

  console.log(totalData.TRADERINFO.name)
  useEffect(() => {
    location.pathname === '/main' ? homeButtonRef2.current.setAttribute('fill', 'white') : homeButtonRef2.current.setAttribute('fill', '#0F253A')
    location.pathname === '/main/markets' ? marketButtonRef2.current.setAttribute('fill', 'white') : marketButtonRef2.current.setAttribute('fill', '#0F253A')
    location.pathname === '/main/user' ? userButtonRef2.current.setAttribute('fill', 'white') : userButtonRef2.current.setAttribute('fill', '#0F253A')
    location.pathname === '/main/wallet' ? walletButtonRef2.current.setAttribute('fill', 'white') : walletButtonRef2.current.setAttribute('fill', '#0F253A')
  }, [location.pathname])


  return (
    <div className='w-screen h-screen bg-primary-blue-light flex flex-col justify-center'>
      <div className='w-full h-[calc(100%-70px)]'><Outlet /></div>
      <div className='w-full h-[70px] flex justify-between items-center bg-primary-navbar-color-blue '>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('')}><HomeButtonTrader fill={"black"} ref={homeButtonRef2} /></div>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('markets')}><MarketsButtonTrader fill={"black"} ref={marketButtonRef2} /></div>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('wallet')}><WalletButtonTrader fill={"black"} ref={walletButtonRef2} /></div>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('user')}><UserButtonTrader fill={"black"} ref={userButtonRef2} /></div>
      </div>
    </div>
  )
}

export default MainDashboard
