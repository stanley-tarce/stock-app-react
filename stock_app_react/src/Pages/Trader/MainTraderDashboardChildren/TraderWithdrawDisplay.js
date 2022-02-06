import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import WalletCard from '../../../Assets/walletcardbg'
import { apiCall } from '../../../Utility/Utility'
import { toast } from 'react-hot-toast'
import { updateHeader } from '../../../Functions/updateHeader'

function TraderWithdrawDisplay() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState(0)
  const date = new Date()
  const stringDate = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}/${date.getFullYear() + 2}` : `${(date.getMonth() + 1)}/${date.getFullYear()}`
  const { totalData, setTotalData, headers, setHeaders } = useContext(CreateContext)
  const denominations = [50, 100, 200, 500, 1000, 2000]


  const deposit = (amount) => {
    console.log(amount)
    let data = { trader: { wallet: amount } }
    apiCall('traders#cash_out', { headers: headers, data: data }).then(response => {
      console.log(response)
      if (response.headers['access-token'] !== '') {
        console.log('Headers changed at trader update')
        setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
      }
      // console.log(data)
      toast(response.data.message, { type: 'success' })
    }).then(r => {
      let obj = { headers: headers, trader_id: totalData.TRADERINFO.id }
      apiCall('traders#show', obj).then(response => {
        console.log(response)
        setTotalData({ ...totalData, TRADERINFO: response.data })
        updateHeader(response, headers, setHeaders)
      }).then(r => navigate(-1))
    }).catch(error => {
      toast(error.response.data.error, { type: 'error' })
      if (error.response.headers['access-token'] !== '') {
        console.log('Headers changed at trader update')
        setHeaders({ ...headers, 'access-token': error.response.headers['access-token'], 'client': error.response.headers['client'], 'uid': error.response.headers['uid'], 'expiry': error.response.headers['expiry'] })
      }
    })
  }

  //once denomination is selected it will be input's value
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
      <ul className='text-white grid grid-cols-3 gap-4 mt-2'>
        {denominations.map(denomination => (
          <li className='bg-container-light-blue p-4 flex justify-center rounded-lg'>
            <button value={denomination} onClick={() => deposit(denomination)}>${denomination}</button>
          </li>
        ))}
      </ul>
      <input className=' w-[90%] bg-container-light-blue p-2 mt-1 text-center rounded-lg' onChange={(e) => setAmount(e.target.value)} placeholder='input amount'></input>
      <button className='text-white w-[90%] bg-primary-green mt-1 p-2 rounded-lg' onClick={(e) => deposit(amount)}>Withdraw</button>
    </div>
  )
}

export default TraderWithdrawDisplay

