import React, { useRef, useContext, useEffect } from 'react'
import DashboardAds from '../../../Assets/dashboardads'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'

function TraderHomeDisplay() {

    return (
        <div className='w-full h-full bg-primary-blue-light flex flex-col items-center justify-start gap-[20px]'>
            {/* Dashboard header */}
            <p className='w-[90%] text-white h-auto text-2xl  mt-10 border-white mb-[20px]'>Dashboard</p>

            <DashboardAds className='w-[90%] h-auto flex justify-between items-center p-1' />


            {/* Deposit and Withdraw */}
            <div className='w-auto h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
                <SearchIcon className='px-5' /><input className='w-[90%] h-[95%] bg-transparent outline-none text-white text-[20px]' placeholder='Search Stock'></input>
            </div>

            {/* Market */}
            <div>
                {/* Header */}
                <div className='w-auto h-[60px] flex justify-start items-center gap-2 p-2'>
                    <h2 className=' text-white text-[20px]'>Market</h2>
                </div>

                {/* Market */}
                <div>

                </div>
            </div>



        </div>
    )
}

export default TraderHomeDisplay