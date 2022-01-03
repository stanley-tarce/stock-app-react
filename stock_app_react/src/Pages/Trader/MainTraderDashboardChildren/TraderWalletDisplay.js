import React, { useRef, useContext, useEffect } from 'react'
import WalletCard from '../../../Assets/walletcardbg'
import SearchIcon from '../../../Assets/searchicon'

function TraderWalletDisplay() {
    
  

return(
        <div className='w-full h-full bg-primary-blue-light flex flex-col items-center justify-center gap-[20px]'>
                {/* Wallet header */}
                <div className='w-[90%] h-auto pb-[10px] flex justify-between items-center'>
                    <div className='fixed top-[10%] w-[90%] h-auto pb-[10px] border-b-[1px] border-white flex justify-between items-center' >
                          <h2 className='text-white text-[25px]'>Wallet </h2>
                    </div>
                    <div  className='p-3.5'>
                        <WalletCard/>
                        <h1>Hi</h1>
                    </div>
                </div>

                {/* Deposit and Withdraw */}
                <div className='w-auto h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
                      
                </div>

                {/* Assets and Transactions */}
                <div>
                     {/* Header */}
                    <div className='w-auto h-[60px] flex justify-start items-center gap-2 p-2'>
                        <h2 className=' text-white text-[20px]'> </h2>
                    </div>

                    {/* Market */}
                    <div>
                        
                    </div>
                </div>

                {/* Details Tabs */}
                <div>
                    <p>Stock</p>
                    <p>Unit</p>
                    <p>Price</p>
                </div>

                {/* Asset */}
                <div>

                </div>

        </div>

)
}

export default TraderWalletDisplay