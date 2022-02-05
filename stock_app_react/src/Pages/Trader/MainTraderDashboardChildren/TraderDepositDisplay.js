import React, { useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import WalletCard from '../../../Assets/walletcardbg'
import { apiCall } from '../../../Utility/Utility'
import { toast } from 'react-hot-toast'

function TraderDepositDisplay() {
  const navigate = useNavigate()
  const [disabledData, setDisabledData] = useState(true)

  const date = new Date()
  const stringDate = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}/${date.getFullYear() + 2}` : `${(date.getMonth() + 1)}/${date.getFullYear()}`

  const { totalData, setTotalData, headers, setHeaders } = useContext(CreateContext)
  const [traderData, setTraderData] = useState({ id: '', name: '', email: '', status: '', wallet: '' })
  const [nameRef, emailRef, walletRef] = [useRef(), useRef(), useRef()]
  const [balance, setBalance] = useState(null)

  const denominations = [50, 100, 200, 500, 1000, 2000]
  const deposit = (amount) => {
    let data = { trader: { wallet: walletRef.current.value + amount } }
    apiCall('traders#cash_in', { trader_id: traderData.id, headers: headers, data: data }).then(response => {
      console.log(response)
      if (response.headers['access-token'] !== '') {
        console.log('Headers changed at trader update')
        setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
      }
      setTotalData({ ...totalData, TRADERINFO: {} })

      toast(response.data.message, { type: 'success' })
      setDisabledData(true)
      navigate(-1)
    }).catch(error => {
      toast(error.response.data.error, { type: 'error' })
      if (error.response.headers['access-token'] !== '') {
        console.log('Headers changed at trader update')
        setHeaders({ ...headers, 'access-token': error.response.headers['access-token'], 'client': error.response.headers['client'], 'uid': error.response.headers['uid'], 'expiry': error.response.headers['expiry'] })
      }
    })
  }

  // handleSubmit function for deposit btn, traders update

  return (
    <div className='w-screen h-full bg-primary-blue-light flex flex-col items-center gap-[15px]'>
        <p className='w-[90%] text-white h-auto text-2xl mt-10 border-white'>Wallet</p>
        <div className='balance-walletCard w-[90%]'>
          <WalletCard className="w-full flex z-0 max-w-[400px]" />
          <div className='w-[90%] h-auto absolute z-[1] flex flex-col justify-start items-start bottom-[430px]'>
            <p className='w-full h-auto text-[35px] px-5 text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
            <div className='w-full h-auto text-[20px] flex justify-between items-center px-5 text-white'>
              <p className='text-white font-thin'>Current Balance</p>
              <p>{stringDate}</p>
            </div>
          </div>
        </div>
      <ul className='text-white flex grid grid-cols-3 gap-4 mt-4'>        
        {denominations.map(denomination => {
          const deposit = () => {
            data: {amount: denomination}
          }
          return (
            <li className='bg-container-light-blue p-4 flex justify-center'>
              <button onClick={() => deposit(amount)}>{denomination}</button>
          </li>
          )
        })}
      </ul>
      <button className='text-white' onClick={(e) => handleSubmit(e)}>Deposit</button>
    </div>
  )
}

export default TraderDepositDisplay

