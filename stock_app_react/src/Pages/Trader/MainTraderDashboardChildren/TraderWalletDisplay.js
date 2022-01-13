import React, { useContext, useEffect, useRef } from 'react'
import WalletCard from '../../../Assets/walletcardbg'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'


function TraderWalletDisplay() {
  const assetsRef = useRef(null)
  const transactionRef = useRef(null)
  const location = useLocation()
  const { totalData, setTotalData } = useContext(CreateContext)
  const date = new Date()
  const stringDate = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}/${date.getFullYear() + 2}` : `${(date.getMonth() + 1)}/${date.getFullYear()}`

  useEffect(() => {
    console.log(location.pathname)
    location.pathname === '/main/wallet' ? assetsRef.current.className += ' bg-primary-button-blue-dark z-10' : assetsRef.current.className += ' bg-blue-400'
    location.pathname === '/main/wallet/transactions' ? transactionRef.current.className += ' bg-primary-button-blue-dark z-10' : transactionRef.current.className += ' bg-blue-400'
  }, [location.pathname])
  return (
    <div className='w-full h-full bg-primary-blue-light flex flex-col items-center justify-start gap-[15px]'>
      {/* Wallet header */}
      <p className='w-[90%] text-white h-auto text-2xl  mt-10 border-white '>Wallet</p>
      {/* <div className='w-[90%] h-auto pb-[10px] flex justify-between items-center'>
        {/* <div className='fixed top-[10%] w-[90%] h-auto pb-[10px] border-b-[1px] border-white flex justify-between items-center' >
          <h2 className='text-white text-[25px]'>Wallet </h2>
        </div> */}
      <WalletCard className=" z-0 w-[90%] max-w-[400px] h-[300px]" />
      <div className='w-[90%] h-auto absolute z-[1] flex flex-col justify-start items-center bottom-[351px]'>
        <div className='w-full h-auto text-[20px] flex justify-between items-center px-5 text-white'>
          <p className='text-white font-thin'>Current Balance</p>
          <p>{stringDate}</p>
        </div>
        <p className='w-full h-auto text-[35px] px-5 text-white font-bold'>{`$${totalData.TRADERINFO.wallet ? totalData.TRADERINFO.wallet.toFixed(1) : 0}`}</p>
        <p className='w-full h-auto text-[20px] px-5 text-white font-bold mt-10'>**** {Math.floor((Math.random() * 10000))}</p>
      </div>

      {/* Search Stock */}
      {/* <div className='w-auto h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
        <SearchIcon className='px-5' /><input className='w-[90%] h-[95%] bg-transparent outline-none text-white text-[20px]' placeholder='Search Stock'></input>
      </div> */}
      <div className='w-[90%] h-auto flex justify-around items-center px-5 text-white relative z-10'>
        <button className='w-auto h-auto px-6 py-3 rounded-[20px] bg-primary-green cursor-pointer'>Deposit</button>
        <button className='w-auto h-auto px-6 py-3 rounded-[20px] bg-primary-navbar-color-blue cursor-pointer'>Withdraw</button>
      </div>

      {/* Market */}
      <div>
        {/* Header */}
        <div className='w-full h-auto rounded-[20px] inline-block'>
          <button ref={assetsRef} className='rounded-[20px] w-[45vw] h-auto py-3  relative left-4 hover:bg-primary-button-blue-dark cursorpointer text-[20px] text-white hover:z-10'>Assets</button>
          <button ref={transactionRef} className='rounded-[20px] w-[45vw] h-auto py-3  relative right-4 hover:bg-primary-button-blue-dark cursorpointer text-[20px] text-white hover:z-10' >Transaction</button>
        </div>
        {/* Market */}
      </div>
      {location.pathname === '/main/wallet' ? <div className='w-[90%] h-auto flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>STOCK</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>PRICE</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>UNIT</p>
      </div> : <div className='w-[90%] h-auto flex justify-center items-center'>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>STOCK</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>TYPE</p>
        <p className='w-1/3 h-auto flex items-center  justify-center text-[15px] text-white'>PRICE</p>
      </div>}
      <div className='w-[90%] h-auto overflow-scroll '>
        <Outlet />
      </div>



    </div>

  )
}

export default TraderWalletDisplay
