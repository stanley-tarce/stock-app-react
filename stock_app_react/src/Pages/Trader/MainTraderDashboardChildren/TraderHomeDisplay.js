import React, { useContext, useState } from 'react'
import DashboardAds from '../../../Assets/dashboardads'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'
import { useNavigate } from 'react-router-dom'

function TraderHomeDisplay() {
    const { totalData } = useContext(CreateContext)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    return (
        <div className='w-full h-auto  flex flex-col justify-center items-center'>
            {/* Dashboard header */}
            <p className='w-[90%] h-auto mt-5 text-white text-xl md:text-2xl font-primary mb-[15px]'>Dashboard</p>

            <div className=' w-[90%] md:bg-primary-blue rounded-xl flex justify-center'>
                <div className='for-padding md:py-4'>
                    <DashboardAds className='w-[90%] h-autoflex justify-between items-center' />
                </div>
            </div>

            {/* Deposit and Withdraw */}
            <div className='w-[90%] h-[60px] mt-4 border-2 border-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
                <SearchIcon className={"w-[30px] h-[30px] text-text-gray"} /><input onChange={(e) => setSearch(e.target.value)} className=' bg-transparent outline-none text-white text-base' placeholder='Search Stock'></input>
            </div>

            {/* Market */}
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                {/* Header */}
                <div className='w-[90%] h-auto flex justify-start items-center gap-2 p-2'>
                    <h2 className=' text-white text-xl flex font-primary md:text-2xl'>Top Markets</h2>
                </div>

                {/* Market */}
                <div className='w-[90%] h-[250px] text-white'>
                    <div className='w-full h-full overflow-scroll flex flex-col gap-4'>
                        {totalData?.TOPMARKETS.length !== 0 ? totalData?.TOPMARKETS.filter(data => data.symbol.includes(search)).map((market, index) => {
                            const goToMarket = () => {
                                navigate(`/main/markets/${market.id}`)
                            }
                            return <div key={index} className='w-full flex text-[20px] justify-between items-center bg-container-light-blue rounded-[20px] hover:bg-blue-400 p-2 cursor-pointer' onClick={goToMarket}>
                                <span className='w-[50%] flex pointer-events-none items-center justify-start text-left'>
                                    <img className="rounded-[20px] pointer-events-none" width="45" height="45" src={market.logo.split('"')[1]} />
                                    <p className=' text-left pl-4 pointer-events-none'>{market.symbol}</p>
                                </span>
                                <p className='mr-4 pointer-events-none'>${market.price_per_unit}</p>
                            </div>
                        }) : <p className='w-[90%] h-auto text-white text-[20px]'>No Market Found</p>}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TraderHomeDisplay