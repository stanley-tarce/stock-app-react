import React, { useRef, useContext, useEffect } from 'react'
import DashboardAds from '../../../Assets/dashboardads'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'

function TraderHomeDisplay() {

    return (
        <div className='w-full h-auto mt-10 flex flex-col justify-center items-center gap-2'>
            {/* Dashboard header */}
            <p className='w-[90%] p-2 text-white text-xl md:text-2xl font-primary'>Dashboard</p>
            
            <div className=' w-[90%] md:bg-primary-blue rounded-xl flex justify-center'>
                <div className='for-padding md:py-4'>
                    <DashboardAds className='w-[90%] h-autoflex justify-between items-center' />
                </div>
            </div>

            {/* Deposit and Withdraw */}
            <div className='w-[90%] h-[60px] mt-4 border-2 border-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
                <SearchIcon className={"w-[30px] h-[30px] text-text-gray"} /><input className=' bg-transparent outline-none text-white text-base' placeholder='Search Stock'></input>
            </div>

            {/* Market */}
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                {/* Header */}
                <div className='w-[90%] h-auto flex justify-start items-center gap-2 p-2'>
                    <h2 className=' text-white text-xl flex font-primary md:text-2xl'>Market</h2>
                </div>

                {/* Market */}
                <div className='w-[90%] h-auto bg-primary-green'>

                </div>
            </div>



        </div>
    )
}

export default TraderHomeDisplay