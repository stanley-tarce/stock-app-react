import React, { useRef, useContext, useEffect } from 'react'
import DashboardAds from '../../../Assets/dashboardads'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'

function TraderHomeDisplay() {

    return (
        <div className='w-full h-full bg-primary-blue-light flex flex-col items-center justify-center gap-[20px]'>
            {/* Dashboard header */}
            <div className='w-[90%] h-auto pb-[10px] flex justify-between items-center'>
                <div className='fixed top-[10%] w-[90%] h-auto pb-[10px] border-b-[1px] border-white flex justify-between items-center' >
                    <h2 className='text-white text-[25px]'>Dashboard </h2>
                </div>
                <div  >
                    <DashboardAds className='p-3' />
                </div>
            </div>

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