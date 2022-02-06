import React, { useRef, useContext, useEffect } from 'react'
import { CreateContext } from '../../Data/DataHooks'
import { apiCall } from '../../Utility/Utility'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import HomeButtonTrader from '../../Assets/homebuttontrader'
import UserButtonTrader from '../../Assets/usertraderbutton'
import WalletButtonTrader from '../../Assets/walletbuttontrader'
import MarketsButtonTrader from '../../Assets/marketsbuttontrader'
import { updateHeader } from '../../Functions/updateHeader'

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
    fetchData.then(response => {
      const [markets, stocks, transactionHistories] = response
      setTotalData({ ...totalData, MARKETS: [...markets.data], TRADERSTOCKS: [...stocks.data], TRADERTRANSACTIONS: [...transactionHistories.data] })
      updateHeader(markets, headers, setHeaders)
      updateHeader(stocks, headers, setHeaders)
      updateHeader(transactionHistories, headers, setHeaders)
    })
  }, [location.pathname])

  useEffect(() => {
    location.pathname === '/main' ? homeButtonRef2.current.setAttribute('fill', 'white') : homeButtonRef2.current.setAttribute('fill', '#0F253A')
    location.pathname === '/main/markets' ? marketButtonRef2.current.setAttribute('fill', 'white') : marketButtonRef2.current.setAttribute('fill', '#0F253A')
    location.pathname === '/main/user' ? userButtonRef2.current.setAttribute('fill', 'white') : userButtonRef2.current.setAttribute('fill', '#0F253A')
    location.pathname === '/main/wallet' ? walletButtonRef2.current.setAttribute('fill', 'white') : walletButtonRef2.current.setAttribute('fill', '#0F253A')
  }, [location.pathname])


  return (
    <div className='w-screen h-screen bg-primary-blue-light flex flex-col justify-center'>
      <div className='w-full h-full'><Outlet /></div>
      <div className='fixed bottom-0 z-10 w-full h-[calc(100%-90%)] flex justify-between items-center bg-container-light-blue '>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('')}><HomeButtonTrader fill={"black"} ref={homeButtonRef2} /></div>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('markets')}><MarketsButtonTrader fill={"black"} ref={marketButtonRef2} /></div>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('wallet')}><WalletButtonTrader fill={"black"} ref={walletButtonRef2} /></div>
        <div className='w-1/4 h-full flex justify-center items-center text-white' onClick={() => navigate('user')}><UserButtonTrader fill={"black"} ref={userButtonRef2} /></div>
      </div>
    </div>
  )
}

export default MainDashboard
