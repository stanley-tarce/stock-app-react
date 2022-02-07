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
        <div className='w-full h-full flex flex-col justify-center items-center'>
            {/* Dashboard header */}
            <p className='w-[90%] h-fit mt-5 text-white text-xl font-primary lg:mt-20 py-[1%]  xl:text-2xl'>Dashboard</p>

            <div className='h-[30%] w-[90%] md:bg-primary-blue rounded-xl flex justify-center'>
                <div className='for-padding md:flex justify-center items-center md:py-4 lg:py-6'>
                    <DashboardAds className='w-[90%] h-full flex justify-between items-center' />
                </div>
            </div>

            {/* Deposit and Withdraw */}
            <div className='w-[90%] h-[10%] mt-4 border-2 border-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2 lg:p-4'>
                <SearchIcon className={"w-[30px] h-[30px]  text-text-gray"} /><input onChange={(e) => setSearch(e.target.value)} className=' xl:text-2xl lg:text-xl bg-transparent outline-none text-white text-base' placeholder='Search Stock'></input>
            </div>

            {/* Market */}
            <div className='w-full h-[60%] flex flex-col items-center mt-2 justify-start'>
                {/* Header */}
                <div className='w-[90%] h-fit flex justify-start items-center my-1 md:my-4'>
                    <h2 className=' text-white text-lg flex font-primary md:text-xl'>Top Markets</h2>
                </div>
                {/* Market */}
                <div className='w-[90%] h-auto overflow-y-auto text-white overflow-scroll flex mt-2 flex-col gap-4'>
                    {totalData?.TOPMARKETS.length !== 0 ? totalData?.TOPMARKETS.filter(data => data.symbol.includes(search)).map((market, index) => {
                        const goToMarket = () => {
                            navigate(`/main/markets/${market.id}`)
                        }
                        return <div key={index} className='w-full min-h-[15%] lg:min-h-[25%] flex text-base xl:text-2xl md:text-xl justify-between items-center bg-container-light-blue rounded-lg hover:bg-blue-400 p-2 cursor-pointer' onClick={goToMarket}>
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
    )
}

export default TraderHomeDisplay