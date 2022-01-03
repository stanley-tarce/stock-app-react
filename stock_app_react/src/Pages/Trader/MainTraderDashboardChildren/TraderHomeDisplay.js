import React from 'react'

function TraderHomeDisplay() {


    return (
        <div className='w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[10px]'>
            {/* Dashboard header */}
            <div className=''>
                <h2 className='fixed top-12 left-0 p-2 font-bold text-white text-2xl'>Dashboard </h2>
                <div></div>
            </div>

            {/* Search Stock */}
            <div className='w-auto px-5 py-1 bg-red-700'>
                <input className='w-auto' placeholder='Search Stock'></input>
            </div>

            {/* Watchlist */}


            {/* Ads */}
            <div className='h-[20%] w-[50%] bg-slate-700 border border-white-400 flex flex-wrap items-center justify-center'>
                <h2 className='text-center'>ADS</h2>
            </div>

            {/* Gainers/Losers Market */}
            <div className='h-[20%] border-white-400 border-radius-5'>

                <div className='h-[20%] border-white-400 border-radius-5'> </div>
            </div>



        </div>
    )
}

export default TraderHomeDisplay