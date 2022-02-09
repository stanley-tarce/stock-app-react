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
      <p className='w-[90%] text-white h-auto text-xl md:text-2xl mt-5 border-white font-primary'>Wallet</p>
      <div className='balance-walletCard relative w-[300px]'>
        <WalletCard className="w-full h-[200px] flex z-0" /> 
        <div className='w-full h-auto absolute z-[1] flex flex-col justify-start items-start top-[50px]'>
          <div className='w-full h-auto text-base flex justify-between items-center px-5 text-white'>
            <p className='text-white font-thin'>Current Balance</p>
            <p className='date'>{stringDate}</p>
          </div>
          <p className='balance w-full h-auto text-3xl mx-5 my-2  text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
        </div>
      </div>
      {/* <div className='w-[90%] h-auto absolute z-[1] flex flex-col justify-start items-center bottom-[350px]'>
        <div className='w-full h-auto text-[20px] flex justify-between items-center px-5 text-white'>
          <p className='text-white font-thin'>Current Balance</p>
          <p>{stringDate}</p>
        </div>
        <p className='w-full h-auto text-[35px] px-5 text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
      </div> */}

      <div className='w-[90%] h-auto grid grid-cols-2 items-center px-5 text-white relative z-10 '>
        <span className='w-full flex justify-start col-start-1 col-end-2'>
          <button className='w-fit h-fit flex justify-center py-3 px-8 rounded-lg bg-primary-green cursor-pointer' onClick={() => navigate('../deposit')}>Deposit</button>
        </span>
        <span className='w-full flex justify-start col-start-2 col-end-3'>
          <button className='w-fit h-fit flex justify-center  mx-2 py-3 px-8 rounded-lg bg-container-light-blue cursor-pointer' onClick={() => navigate('../withdraw')}>Withdraw</button>          
        </span>
      </div>

      <div className='mt-2 w-[90%]'>
        <div className='w-full h-full text-base flex justify-center grid grid-cols-2 rounded-lg'>
          {/* <button onClick={handleButton.assets} ref={assetsRef} 
            className={`rounded-lg bg-primary-navbar-color-blue h-fit col-start-1 col-end-2 py-3 px-8 relative left-4 hover:bg-container-light-blue cursorpointer text-white hover:z-10 
            ${location.pathname === '/main/wallet' ? 'bg-container-light-blue z-10' : 'bg-primary-navbar-color-blue'}`}>Assets
          </button> */}
          <button onClick={handleButton.assets} ref={assetsRef} 
            className={`rounded-lg bg-primary-navbar-color-blue h-fit col-start-1 col-end-2 py-3 px-8 relative left-4 hover:bg-container-light-blue cursorpointer text-white hover:z-10 
            ${location.pathname === '/main/wallet' ? 'bg-container-light-blue z-10' : 'bg-primary-navbar-color-blue'}`}>Assets
          </button>
          
          <button onClick={handleButton.transactions} ref={transactionRef} 
            className={` bg-primary-navbar-color-blue rounded-lg h-fit col-start-2 col-end-3 py-3 px-8 relative right-4 hover:bg-container-light-blue cursorpointer text-white hover:z-10 
            ${location.pathname === '/main/wallet/transactions' ? ' bg-container-light-blue z-10' : ' bg-primary-navbar-color-blue'} `} >Transactions
          </button>
        </div>
      </div>
      {location.pathname === '/main/wallet' ? <div className='w-[90%] h-auto flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center justify-center text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>stock</p>
        <p className='w-1/3 h-auto flex items-center justify-center text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>price</p>
        <p className='w-1/3 h-auto flex items-center justify-center text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>unit</p>
      </div> : <div className='w-[90%] h-auto flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>STOCK</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>PRICE</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>TYPE</p>
      </div>}
      <div className='w-[90%] h-[150px] max-h-[130px] pb-30 overflow-y-scroll '>
        <Outlet />
      </div>
    </div>

  )
}

export default TraderWalletDisplay
