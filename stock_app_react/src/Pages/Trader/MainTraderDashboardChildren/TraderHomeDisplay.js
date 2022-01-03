import React from 'react'
import DashboardAds from '../../../Assets/dashboardads'
import SearchIcon from '../../../Assets/searchicon'
import WatchlistIcon from '../../../Assets/watchlisticon'
function TraderHomeDisplay() {

return(
        <div className='w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[10px]'>
                {/* Dashboard header */}
                <div className=''>
                    <h2 className='fixed top-12 left-0 p-2 font-bold text-white text-2xl'>Dashboard </h2>
                    <div><DashboardAds className='p-10'/></div>
                </div>

                {/* Search Stock */}
                <div className='w-auto h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
                    <SearchIcon className='px-5'/><input className='w-[90%] h-[95%] bg-transparent outline-none text-white text-[20px]' placeholder='Search Stock'></input>
                </div>

                {/* Watchlist */}
                <div>
                     {/* Header */}
                    <div className='w-auto h-[60px] flex justify-start items-center gap-2 p-2'>
                        <WatchlistIcon className='px-5'/>
                        <h2>Watchlist</h2>
                    </div>

                    {/* Market */}
                    <div>

                    </div>
                </div>



        </div>
)}

export default TraderHomeDisplay