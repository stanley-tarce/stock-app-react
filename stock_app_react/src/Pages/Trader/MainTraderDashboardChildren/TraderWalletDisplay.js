import React, { useContext, useEffect, useRef } from 'react'
import WalletCard from '../../../Assets/walletcardbg'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'


function TraderWalletDisplay() {
  const assetsRef = useRef(null)
  const navigate = useNavigate()
  const transactionRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { totalData, setTotalData } = useContext(CreateContext)
  const date = new Date()
  const stringDate = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}/${date.getFullYear() + 2}` : `${(date.getMonth() + 1)}/${date.getFullYear()}`

  useEffect(() => {
    console.log(location.pathname)
    // location.pathname === '/main/wallet' ? assetsRef.current.className += ' bg-primary-button-blue-dark z-10' : assetsRef.current.className += ' bg-blue-400'
    // location.pathname === '/main/wallet/transactions' ? transactionRef.current.className += ' bg-primary-button-blue-dark z-10' : transactionRef.current.className += ' bg-blue-400'
  })

  const handleButton = {
    assets: () => navigate(''),
    transactions: () => navigate('transactions')
  }
  return (
    <div className='w-full h-auto bg-primary-blue-light flex flex-col items-center justify-start gap-[15px]'>

      <p className='w-[90%] text-white h-auto text-2xl  mt-10 border-white '>Wallet</p>
      <WalletCard className="z-0 w-[90%] max-w-[400px] h-[300px]" />
      <div className='w-[90%] h-auto absolute z-[1] flex flex-col justify-start items-center bottom-[350px]'>
        <div className='w-full h-auto text-[20px] flex justify-between items-center px-5 text-white'>
          <p className='text-white font-thin'>Current Balance</p>
          <p>{stringDate}</p>
        </div>
        <p className='w-full h-auto text-[35px] px-5 text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
      </div>

      <div className='w-[90%] h-auto flex justify-around items-center px-5 text-white relative z-10'>
        <button className='w-auto h-auto px-6 py-3 rounded-[20px] bg-primary-green cursor-pointer' onClick={() => navigate('../deposit')}>Deposit</button>
        <button className='w-auto h-auto px-6 py-3 rounded-[20px] bg-primary-navbar-color-blue cursor-pointer'>Withdraw</button>
      </div>

      <div>
        <div className='w-full h-auto rounded-[20px] inline-block'>
          <button onClick={handleButton.assets} ref={assetsRef} className={`rounded-[20px] w-[45vw] h-auto py-3  relative left-4 hover:bg-primary-button-blue-dark cursorpointer text-[20px] text-white hover:z-10 ${location.pathname === '/main/wallet' ? 'bg-primary-button-blue-dark z-10' : 'bg-blue-400'}`}>Assets</button>
          <button onClick={handleButton.transactions} ref={transactionRef} className={`rounded-[20px] w-[45vw] h-auto py-3  relative right-4 hover:bg-primary-button-blue-dark cursorpointer text-[20px] text-white hover:z-10 ${location.pathname === '/main/wallet/transactions' ? ' bg-primary-button-blue-dark z-10' : ' bg-blue-400'
            } `} >Transaction</button>
        </div>
      </div>
      {location.pathname === '/main/wallet' ? <div className='w-[90%] h-auto flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>STOCK</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>PRICE</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>UNIT</p>
      </div> : <div className='w-[90%] h-auto flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>STOCK</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>PRICE</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>TYPE</p>
      </div>}
      <div className='w-[90%] min-h-[300px] max-h-[auto] pb-30 '>
        <Outlet />
      </div>
    </div>

  )
}

export default TraderWalletDisplay
