import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'
import UserIcon from '../../../Assets/usericon'

function AdminMarketsDisplay() {
  const { totalData, setTotalData } = useContext(CreateContext)
  const navigate = useNavigate()

  //UPDATE MARKETS FUNC 

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <p className='w-[90%] h-auto text-white text-[25px] pb-[10px] border-b-[1px] border-white mb-[35px]'>Markets</p>
        <div className='w-[90%] h-[80%] max-h-[80%] flex flex-col gap-5 '>
            <div className='w-full h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
                {/* <SearchIcon /> */}
                <button className='w-[90%] h-[95%] bg-transparent outline-none text-white text-[20px]'>UPDATE ALL MARKETS</button>
            </div>
            <div className='w-full h-auto overflow-scroll flex flex-col gap-4'>
                {totalData.MARKETS.length !== 0 ? totalData.MARKETS.map((market, index) => {
                return <div key={index} className='w-full h-[60px] bg-container-light-blue rounded-[20px] hover:bg-blue-400 flex justify-start items-center gap-2 p-2 cursor-pointer'>
                    <UserIcon size={"30"} />
                    <p className='w-[90%] max-w-[90%] h-auto text-white text-[20px] pointer-events-none'>{market.symbol} {market.price_per_unit}</p>
                </div>
                }) : <p className='w-[90%] h-auto text-white text-[20px]'>No Market Found</p>}
            </div>
        </div>
    </div>  
  )
}

export default AdminMarketsDisplay

