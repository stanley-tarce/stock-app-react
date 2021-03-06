import React, { useContext } from 'react'
import { CreateContext } from '../../../../Data/DataHooks'
import { useNavigate } from 'react-router-dom'

function TraderStocks() {
    const navigate = useNavigate()
    const { totalData } = useContext(CreateContext)
    const { TRADERSTOCKS } = totalData
    return (
        <div className='w-full h-auto flex flex-col justify-start items-center '>

            <div className='w-full h-auto flex flex-col justify-start items-center gap-3'>
                {TRADERSTOCKS && TRADERSTOCKS?.map((stock, index) => {
                    const { symbol, shares, logo, price_per_unit } = stock
                    var newLogo = logo.split('"')[1]
                    const navigateToStock = (e) => {
                        navigate(`/main/markets/${stock.market_id}`)
                    }
                    return <div onClick={(e) => navigateToStock(e)} key={index} className="w-full h-[50px] rounded-[20px] bg-primary-button-blue-light py-3 flex justify-center items-center">
                        <div className='w-1/3 gap-3 h-auto flex justify-center items-center pointer-events-none'>
                            <img src={newLogo} alt='logo' className='w-[30px] h-[30px] rounded-full pointer-events-none' />
                            <p className='text-[20px] text-white pointer-events-none'>{symbol}</p>
                        </div>
                        <div className='w-1/3 text-gray-300 text-[20px] flex justify-center items-center pointer-events-none'>{shares}</div>
                        <div className='w-1/3 text-gray-300 text-[20px] flex justify-center items-center pointer-events-none'>{`$${price_per_unit}`}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TraderStocks
