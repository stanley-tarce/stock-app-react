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
    <div className='w-full h-screen flex flex-col items-center justify-center gap-[15px]'>
      <p className='w-[90%] text-white h-auto text-xl md:text-2xl mt-5 border-white font-primary'>Wallet</p>
      <div className='desktop-view w-[90%] h-[90%] lg:flex items-center justify-around lg:relative'>
        <div className='balance-walletCard flex justify-center relative w-[320px]'>
          <WalletCard className="w-full h-[200px] flex z-0" /> 
          <div className='w-full h-auto absolute z-[1] flex flex-col justify-start items-start top-[50px]'>
            <div className='w-full h-auto text-base flex justify-between items-center px-5 text-white'>
              <p className='text-white font-thin font-primary'>Current Balance</p>
              <p className='date'>{stringDate}</p>
            </div>
            <p className='balance w-full h-auto text-3xl mx-5 my-2 font-bold text-white'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
          </div>
        </div>

        <div className='deposit-withdraw-btns w-full mt-4 lg:w-[50%] lg:h-full h-auto flex justify-center text-white'>
          <div className='h-full w-full flex lg:flex-col items-center justify-around'>
            <span className='w-full flex justify-start'>
              <button className='min-w-fit h-fit lg:w-full flex justify-center py-3 px-8 rounded-lg bg-primary-green cursor-pointer font-primary' onClick={() => navigate('../deposit')}>Deposit</button>
            </span>
            <span className='w-full flex justify-end'>
              <button className='min-w-fit h-min-fit lg:w-full py-3 px-8 rounded-lg bg-container-light-blue cursor-pointer font-primary' onClick={() => navigate('../withdraw')}>Withdraw</button>          
            </span>
          </div>    
        </div>
      </div>
     

      <div className='mt-2 w-[90%]'>
        <div className='max-w-full h-full text-base flex justify-center grid grid-cols-2 rounded-lg'>
          <button onClick={handleButton.assets} ref={assetsRef} 
            className={`rounded-lg bg-primary-navbar-color-blue h-fit col-start-1 col-end-2 py-3 px-8 relative left-4 hover:bg-container-light-blue cursorpointer text-white font-primary hover:z-10 
            ${location.pathname === '/main/wallet' ? 'bg-container-light-blue z-10' : 'bg-primary-navbar-color-blue'}`}>Assets
          </button>
          
          <button onClick={handleButton.transactions} ref={transactionRef} 
            className={` bg-primary-navbar-color-blue rounded-lg h-fit col-start-2 col-end-3 py-3 px-8 relative right-4 hover:bg-container-light-blue cursorpointer text-white font-primary hover:z-10 
            ${location.pathname === '/main/wallet/transactions' ? ' bg-container-light-blue z-10' : ' bg-primary-navbar-color-blue'} `} >Transactions
          </button>
        </div>
      </div>
      {location.pathname === '/main/wallet' ? <div className='w-auto h-auto flex justify-center items-center'>
        <p className='w-full h-auto flex items-center justify-center text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>stock</p>
        <p className='w-full h-auto flex items-center justify-center text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>price</p>
        <p className='w-full h-auto flex items-center justify-center text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>unit</p>
      </div> : <div className='w-[90%] mr-6 rounded-lg grid grid-cols-3 h-auto '>
        <p className='w-full h-auto flex col-start-1 col-end-2 items-center text-xs md:text-base ml-4 md:ml-8 uppercase  justify-center text-white'>stock</p>
        <p className='w-full h-auto flex col-center-2 col-end-3 items-center text-xs md:text-base ml-4 md:ml-8 uppercase justify-center text-white'>price</p>
        <p className='w-full h-auto flex col-center-3 col-end-4 items-center text-xs md:text-base ml-4 md:ml-8 uppercase justify-center text-white'>type</p>
      </div>}
      <div className='w-[90%] h-full overflow-y-scroll '>
        <Outlet />
      </div>
    </div>

  )
}

export default TraderWalletDisplay
