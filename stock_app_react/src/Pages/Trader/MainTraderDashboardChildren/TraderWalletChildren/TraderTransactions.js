import React, { useContext } from 'react'
import { CreateContext } from '../../../../Data/DataHooks'

function TraderTransactions() {
    const { totalData } = useContext(CreateContext)
    const { TRADERTRANSACTIONS } = totalData
    console.log(TRADERTRANSACTIONS)
    console.log('THATS IT')
    return (
        <div className='w-auto h-auto flex flex-col justify-start items-center  '>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-3'>
                {TRADERTRANSACTIONS && TRADERTRANSACTIONS?.map((transaction, index) => {
                    const { symbol, transaction_type, total_price } = transaction
                    // var newLogo = logo.split('"')[1] 
                    return <div key={index} className="w-full h-[50px] rounded-[20px] bg-primary-button-blue-light py-3 flex justify-center items-center">
                        <div className='w-1/3 gap-3 h-auto flex justify-center items-center'>
                            {/* <img src={newLogo} alt='logo' className='w-[30px] h-[30px] rounded-full' /> */}
                            <p className='text-[20px] text-white'>{symbol}</p>
                        </div>
                        <div className='w-1/3 text-gray-300 text-[20px] flex justify-center items-center'>{Math.floor(total_price)}</div>
                        <div className='w-1/3 text-gray-300 text-[20px] flex justify-center items-center'>{transaction_type}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TraderTransactions
