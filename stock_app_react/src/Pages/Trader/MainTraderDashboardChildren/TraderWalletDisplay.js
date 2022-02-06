import React, { useContext, useRef } from 'react'
import WalletCard from '../../../Assets/walletcardbg'
import { CreateContext } from '../../../Data/DataHooks'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'


function TraderWalletDisplay() {
  const assetsRef = useRef(null)
  const navigate = useNavigate()
  const transactionRef = useRef(null)
  const location = useLocation()
  const { totalData } = useContext(CreateContext)
  const date = new Date()
  const stringDate = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}/${date.getFullYear() + 2}` : `${(date.getMonth() + 1)}/${date.getFullYear()}`


  const handleButton = {
    assets: () => navigate(''),
    transactions: () => navigate('transactions')
  }
  return (
    <div className='w-screen h-screen bg-primary-blue-light flex flex-col items-center gap-[15px]'>
      <p className='w-[90%] text-white h-full text-2xl mt-5 border-white'>Wallet</p>
      <div className='balance-walletCard w-[90%]'>
        <WalletCard className="w-full flex z-0" />
        <div className='w-[90%] h-auto absolute z-[1] flex flex-col justify-start items-start bottom-[430px]'>
          <div className='w-full h-auto text-[20px] flex justify-between items-center px-5 text-white'>
            <p className='text-white font-thin'>Current Balance</p>
            <p className='date'>{stringDate}</p>
          </div>
          <p className='balance w-full h-auto text-[35px] px-5 text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
        </div>
      </div>
      {/* <div className='w-[90%] h-auto absolute z-[1] flex flex-col justify-start items-center bottom-[350px]'>
        <div className='w-full h-auto text-[20px] flex justify-between items-center px-5 text-white'>
          <p className='text-white font-thin'>Current Balance</p>
          <p>{stringDate}</p>
        </div>
        <p className='w-full h-auto text-[35px] px-5 text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
      </div> */}

      <div className='w-[90%] h-full flex justify-around items-center px-5 text-white relative z-10'>
        <button className='w-auto h-auto px-6 py-3 rounded-[20px] bg-primary-green cursor-pointer' onClick={() => navigate('../deposit')}>Deposit</button>
        <button className='w-auto h-auto px-6 py-3 rounded-[20px] bg-primary-navbar-color-blue cursor-pointer' onClick={() => navigate('../withdraw')}>Withdraw</button>
      </div>

      <div>
        <div className='w-full h-full rounded-[20px] inline-block'>
          <button onClick={handleButton.assets} ref={assetsRef} className={`rounded-[20px] w-[45vw] h-auto py-3  relative left-4 hover:bg-primary-button-blue-dark cursorpointer text-[20px] text-white hover:z-10 ${location.pathname === '/main/wallet' ? 'bg-primary-button-blue-dark z-10' : 'bg-blue-400'}`}>Assets</button>
          <button onClick={handleButton.transactions} ref={transactionRef} className={`rounded-[20px] w-[45vw] h-auto py-3  relative right-4 hover:bg-primary-button-blue-dark cursorpointer text-[20px] text-white hover:z-10 ${location.pathname === '/main/wallet/transactions' ? ' bg-primary-button-blue-dark z-10' : ' bg-blue-400'
            } `} >Transaction</button>
        </div>
      </div>
      {location.pathname === '/main/wallet' ? <div className='w-[90%] h-full flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>STOCK</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>PRICE</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>UNIT</p>
      </div> : <div className='w-[90%] h-full flex justify-center items-center'>
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
