import React, { useState, useContext, useEffect, useRef } from 'react'
import { CreateContext } from '../../../Data/DataHooks'
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { apiCall } from '../../../Utility/Utility'
import UserIcon from '../../../Assets/usericon'


function TraderUserDisplay() {
  const [updateRefButton, updateRefButton2] = [useRef(), useRef()]
  const [nameRef, emailRef, walletRef] = [useRef(), useRef(), useRef()]
  const navigate = useNavigate()
  const statRef = useRef()
  const { id } = useParams()
  const location = useLocation()
  const [traderData, setTraderData] = useState({ id: '', name: '', email: '', status: '', wallet: '' })
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

  const { TRADERINFO } = totalData
  console.log(totalData)

  let traderInfo = [
    { label: 'Name:', type: 'text', defaultValue: TRADERINFO.name, ref: nameRef },
    { label: 'Email:', type: 'text', defaultValue: TRADERINFO.email, ref: emailRef },
    { label: 'Wallet:', type: 'text', defaultValue: TRADERINFO.wallet === null ? 0 : TRADERINFO.wallet, ref: walletRef }]

  useEffect(() => {
    console.log(statRef.current.innerText)
    if (statRef.current.innerText === 'pending') {
      statRef.current.setAttribute('class', 'py-1 px-4 bg-yellow-400 flex justify-center items-center rounded-[20px] text-[14px]')
    }
    else if (statRef.current.innerText === 'approved') {
      statRef.current.setAttribute('class', 'py-1 px-4 bg-green-400 flex justify-center items-center rounded-[20px] text-[14px]')
    }
    else if (statRef.current.innerText === 'rejected') {
      statRef.current.setAttribute('class', 'py-1 px-4 bg-red-400 flex justify-center items-center rounded-[20px] text-[14px]')
    }
    else {
      console.log("No Status")
    }
  }, [traderData, setTraderData])


  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
        {/* Profile header */}
        <div className='fixed top-[10%] w-[90%] h-auto pb-[10px] border-b-[1px] border-white flex justify-between items-center' >
            <p className='text-white text-[25px]'>Profile</p>
        </div>
        
        <UserIcon className={"w-auto h-auto p-[40px]"} size={'130'} />
            {traderInfo.map(({ label, ...input }, index) =>
                <div key={index} className='w-[90%] h-auto flex text-white text-[20px]'>
                <label className='w-[24%] h-auto flex justify-center items-center'>{label}</label>
                <input className='h-full text-[15px] bg-transparent outline-none w-[calc(100%-24%)] flex justify-center items-center'{...input} />

                </div>)}
        
        <div className='w-[90%] h-auto flex text-white text-[20px] gap-1'>
            <label className='w-[24%] h-auto flex justify-center items-center'>Status:</label>
            <p ref={statRef} >{TRADERINFO.status}</p>
        </div>

      
    </div>
  )
}

export default TraderUserDisplay
