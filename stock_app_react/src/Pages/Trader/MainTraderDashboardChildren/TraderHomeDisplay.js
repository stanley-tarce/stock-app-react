import React from 'react'

function TraderHomeDisplay() {



return(
        <div className='w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[10px]'>
                {/* Welcome */}
                <div>
                    <h2 className='fixed top-12 left-0 p-2 font-bold text-white text-2xl'>Welcome back, </h2>
                </div>

                {/* Search Stock */}
                <div className='w-auto px-5 py-1 bg-red-700'>
                    <input className='w-auto' placeholder='Search Stock'></input>
                </div>

                {/* Home features */}
                <div className='h-[25%] w-auto py-2 px-6 flex flex-wrap justify-evenly items-center '>
                        <div>
                            <h4 className='w-1/3 h-1/2 py-2 px-4 text-white text-center '>Deposit</h4>
                        </div> 
                        <div>
                            <h4 className='w-1/3 h-1/2 py-2 px-4 text-white text-center'>Withdraw</h4>
                        </div> 
                        <div>
                        <h4 className='w-1/3 h-1/2 py-2 px-4 text-white text-center '>Transfer</h4>
                        </div> 
                        <div>
                            <h4 className='w-1/3 h-1/2 py-2 px-4 text-white text-center'>Referral</h4>
                        </div> 
                        <div>
                            <h4 className='w-1/3 h-1/2 py-2 px-4 text-white text-center' >History</h4>
                        </div> 
                        <div>
                            <h4 className='w-1/3 h-1/2 py-2 px-3 text-white text-center '>Support</h4>
                        </div> 
                </div>

                {/* Ads */}
                <div className='h-[20%] w-[50%] bg-slate-700 border border-white-400 flex flex-wrap items-center justify-center'>
                        <h2 className='text-center'>ADS</h2>
                </div>

                {/* Gainers/Losers Market */}
                <div className='h-[20%] border-white-400 border-radius-5'>
                    
                    <div className='h-[20%] border-white-400 border-radius-5'> </div>
                </div>



        </div>
)}

export default TraderHomeDisplay