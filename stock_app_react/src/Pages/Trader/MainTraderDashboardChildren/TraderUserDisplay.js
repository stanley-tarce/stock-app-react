import React, { useState, useContext, useEffect, useRef } from 'react'
import { CreateContext } from '../../../Data/DataHooks'
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { apiCall } from '../../../Utility/Utility'
import UserIcon from '../../../Assets/usericon'
import SignOutIcon from '../../../Assets/signouticon'


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
    { label: 'Wallet:', type: 'text', defaultValue: TRADERINFO.wallet === null ? 0 : TRADERINFO.wallet, ref: walletRef }
  ]

  useEffect(() => {
    console.log(statRef.current.innerText)
    if (statRef.current.innerText === 'pending') {
      statRef.current.setAttribute('class', 'py-1 px-4 bg-yellow-400 flex justify-center items-center col-span-2 ml-2 max-w-fit rounded-[20px]')
    }
    else if (statRef.current.innerText === 'approved') {
      statRef.current.setAttribute('class', 'py-1 px-4 bg-green-400 flex justify-center items-center col-span-2 ml-2 max-w-fit rounded-[20px]')
    }
    else if (statRef.current.innerText === 'rejected') {
      statRef.current.setAttribute('class', 'py-1 px-4 bg-red-400 flex justify-center items-center col-span-2 ml-2 max-w-fit rounded-[20px]')
    }
    else {
      console.log("No Status")
    }
  }, [traderData, setTraderData])

  const signOut = (e) => {
    apiCall('signout', { headers: headers })
      .then(response => {
        console.log(response)
        setTotalData({
          TRADERINFO: {},
          TRADERSTOCKS: [],
          TRADERTRANSACTIONS: [],
          ADMININFO: {},
          ADMINLISTOFTRADERS: [],
          ADMINLISTS: [],
          ADMINSHOWTRADER: {},
          MARKETS: [],
          MARKETINFO: {},
          TOPMARKETS: []
        })
        setHeaders({ 'access-token': '', 'client': '', 'uid': '', 'expiry': '' })
        navigate('/')
      }
      )
  }

  return (
    <div className='w-full h-auto mt-3 flex flex-col justify-center items-center'>
      {/* Profile header */}
      <div className='w-[90%] h-full border-b-[1px] border-button-color-blue-light p-2 flex justify-between items-center' >
        <h2 className='text-white text-xl md:text-2xl font-primary'>Profile</h2>
        <button onClick={(e) => signOut(e)}><SignOutIcon /></button>
      </div>

      <UserIcon className={"md:w-[250px] md:h-[250px] w-[200px] h-[200px] p-[40px]"} />
      <div className='w-[90%] h-auto'>
        {traderInfo.map(({ label, ...input }, index) =>
          <div key={index} className='flex text-white mb-5 grid grid-cols-6 font-primary md:text-2xl text-base'>
            <label className='h-auto flex col-start-1 col-end-2 justify-center items-center'>{label}</label>
            <input className='h-full w-full col-start-2 col-end-7 bg-transparent outline-none flex justify-center items-center'{...input} />
          </div>
        )}
        <div className='w-full h-auto grid grid-cols-6 text-white md:text-2xl text-base'>
          <label className='w-full flex justify-center ml-1 items-center h-auto font-primary col-start-1 col-end-2'>Status:</label>
          <p className='w-full bg-rose-500 ' ref={statRef} >{TRADERINFO.status}</p>
        </div>
      </div>
    </div>
  )
}

export default TraderUserDisplay
