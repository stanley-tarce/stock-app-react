import React, { useState, useContext, useEffect, useRef } from 'react'
import { CreateContext } from '../../../Data/DataHooks'
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { apiCall } from '../../../Utility/Utility'
import DeleteButton from '../../../Assets/deletebutton'
import UserIcon from '../../../Assets/usericon'
import EditButton from '../../../Assets/editbutton'

function AdminPerUserDisplay() {
  const [updateRefButton, updateRefButton2] = [useRef(), useRef()] 
  const [nameRef, emailRef, walletRef] = [useRef(), useRef(), useRef()]
  const navigate = useNavigate()
  const { totalData, setTotalData, headers, setHeaders } = useContext(CreateContext)
  const statRef = useRef()
  const { id } = useParams()
  const location = useLocation()
  const [traderData, setTraderData] = useState({ id: '', name: '', email: '', status: '', wallet: '' })

  const [disabledData, setDisabledData] = useState(true)
  const updateTrader = (e) => {
    e.preventDefault()
    setTraderData({ ...traderData, name: nameRef.current.value, email: emailRef.current.value, wallet: walletRef.current.value })
    console.log(`New Data`)
    console.log({ name: nameRef.current.value, email: emailRef.current.value, wallet: walletRef.current.value })
    apiCall('traders#update', { trader_id: traderData.id, headers: headers, data: { trader: { name: nameRef.current.value, email: emailRef.current.value, wallet: walletRef.current.value } } }).then(response => {
      console.log(response)
      if (response.headers['access-token'] !== '') {
        console.log('Headers changed at trader update')
        setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
      }
      setTotalData({ ...totalData, TRADERINFO: {} })
      setDisabledData(true)
      navigate(-1)
    }).catch(error => console.log(error.response))
  }
  let traderInputs = [
    { label: 'Name:', type: 'text', defaultValue: traderData.name, disabled: disabledData, ref: nameRef },
    { label: 'Email:', type: 'text', defaultValue: traderData.email, disabled: disabledData, ref: emailRef },
    { label: 'Wallet:', type: 'text', defaultValue: traderData.wallet === null ? 0 : traderData.wallet, disabled: disabledData, ref: walletRef }]
  let traderStatus = [
    { name: 'Approve', value: 'update' },
    { name: 'Pending', value: 'pending' },
    { name: 'Reject', value: 'reject' }
  ]
  const cancelTraderUpdate = (e) => {
    e.preventDefault()
    setDisabledData(true)
    nameRef.current.value = traderData.name
    emailRef.current.value = traderData.email
    walletRef.current.value = traderData.wallet

  }
  const updateTraderStatus = (e, status) => {
    e.preventDefault()
    console.log(traderData.id)
    apiCall(`traders#${status}_trader_status`, { trader_id: traderData.id, headers: headers })
      .then(response => {
        console.log(response.headers)
        if (response.headers['access-token'] !== '') {
          console.log('Headers changed at trader status')
          setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
        }
        return navigate(-1)
      }).catch(error => { console.log(error.response) })
  }
  useEffect(() => {
    console.log(id)
    apiCall('traders#show', { trader_id: id, headers: headers })
      .then(response => {
        console.log(response.data)
        setTotalData({ ...totalData, ADMINSHOWTRADER: { ...response.data } })
        setTraderData({ ...traderData, ...response.data })

        if (response.headers['access-token'] === '') {
        }
        else {
          setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
          console.log("Headers Changed for Show Traders")
        }
      })
  }, [location.pathname])
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
  const { ADMINSHOWTRADER } = totalData
  useEffect(() => {
    if (disabledData === false) {
      if (updateRefButton.current.classList.contains('hidden')) {
        console.log('remove ')
        updateRefButton.current.classList.remove('hidden')
      }
      if (updateRefButton2.current.classList.contains('hidden')) {
        console.log('remove ')
        updateRefButton2.current.classList.remove('hidden')
      }
    }
    else {
      if (!updateRefButton.current.classList.contains('hidden')) {
        console.log('add ')
        updateRefButton.current.classList.add('hidden')
      }
      if (!updateRefButton2.current.classList.contains('hidden')) {
        console.log('add ')
        updateRefButton2.current.classList.add('hidden')
      }
    }
  }, [disabledData])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
      <div className='w-[90%] h-auto pb-[10px] border-b-[1px] border-white flex justify-between items-center' >
        <p className='text-white text-[25px]'>{ADMINSHOWTRADER.name}</p>
        <DeleteButton className={"cursor-pointer"} />
        <EditButton onClick={() => {
          console.log("clicked")
          setDisabledData(false)
        }} className={"cursor-pointer"} size={"15"} />
      </div>
      <UserIcon className={"w-auto h-auto p-[50px]"} size={'130'} />
      {traderInputs.map(({ label, ...input }, index) =>
        <div key={index} className='w-[90%] h-auto flex text-white text-[20px]'>
          <label className='w-[24%] h-auto flex justify-center items-center'>{label}</label>
          <input className='h-full text-[15px] bg-transparent outline-none w-[calc(100%-24%)] flex justify-center items-center'{...input} />

        </div>)}
      <div className='w-[90%] h-auto flex text-white text-[20px] gap-1'>
        <label className='w-[24%] h-auto flex justify-center items-center'>Status:</label>
        <p ref={statRef} >{traderData.status}</p>
      </div>
      <div className='w-[calc(100%-24%)] h-auto flex jus  tify-center items-center flex-wrap gap-3'>
        {traderStatus.map(({ name, value }, index) => <button onClick={(e) => updateTraderStatus(e, value)} key={index} className='w-auto h-auto px-4 py-1 bg-button-color-blue-light text-white text-[14px] rounded-[20px]'>{name}</button>)}
      </div>
      <div className='w-[calc(100%-24%)] h-auto flex justify-start items-center gap-3'>
        <button onClick={(e) => updateTrader(e)} ref={updateRefButton} className='w-auto h-auto px-4 py-1 bg-button-color-blue-light text-white text-[14px]  rounded-[20px] hidden'>Update</button>
        <button onClick={(e) => { cancelTraderUpdate(e) }} ref={updateRefButton2} className='w-auto h-auto px-4 py-1 bg-button-color-blue-light text-white text-[14px]  rounded-[20px] hidden'>Cancel</button>
      </div>
    </div>
  )
}

export default AdminPerUserDisplay
