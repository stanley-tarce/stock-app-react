import React, { useContext } from 'react'
import { CreateContext } from '../../../../Data/DataHooks'

function TraderTransactions() {
    const { totalData } = useContext(CreateContext)
    const { TRADERTRANSACTIONS } = totalData
    return (
        <div className='w-auto h-full flex flex-col justify-start items-center  '>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-3'>
                {TRADERTRANSACTIONS && TRADERTRANSACTIONS?.map((transaction, index) => {
                    const { symbol, transaction_type, total_price } = transaction
                    // var newLogo = logo.split('"')[1] 
                    return <div key={index} className="w-full min-h-[55px] lg:min-h-[60px] grid grid-cols-3 rounded-lg bg-primary-button-blue-light py-3 flex justify-center items-center">
                        <div className='w-full col-start-1 col-end-2 gap-3 h-auto flex justify-center items-center'>
                            {/* <img src={newLogo} alt='logo' className='w-[30px] h-[30px] rounded-full' /> */}
                            <p className='text-base text-white'>{symbol}</p>
                        </div>
                        <div className='w-full col-start-2 col-end-3 text-gray-300 text-base flex justify-center items-center'>${Math.floor(total_price)}</div>
                        <div className='w-full col-start-3 col-end-4 text-gray-300 text-base flex justify-center uppercase items-center'>{transaction_type}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TraderTransactions
