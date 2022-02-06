import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'
import { CreateContext } from '../../../../Data/DataHooks'
import { apiCall } from '../../../../Utility/Utility'
import { updateHeader } from '../../../../Functions/updateHeader'

function TraderSingleStockView() {
    const navigate = useNavigate()
    const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
    const { id } = useParams()
    const [amount, setAmount] = useState(0)    // totalData.MARKETS.forEach(market => console.log(market))
    const marketData = totalData.MARKETS.find(market => {
        return market.id.toString() === id.toString()
    }) || {}
    const stockData = totalData.TRADERSTOCKS.find(stock => stock.market_id.toString() === id.toString()) || { shares: 0, total_price: 0 }
    const buy = (e) => {
        e.preventDefault()
        if (stockData.total_price === 0) {

            let data = { stock: { market_id: id, shares: amount } }
            let obj = { headers: headers, data: data, trader_id: totalData.TRADERINFO.id }
            apiCall('stocks#create', obj).then(response => {
                toast.success('Stock Bought')
                updateHeader(response, headers, setHeaders)
            }).then(r => navigate('/main')).catch(err => {
                updateHeader(err.response, headers, setHeaders)
                if (err.response.data.errors) {
                    toast.error(err.response.data.errors)
                }
                else {
                    toast.error(err.response.data.error)
                }
            })
        }
        else {
            let data = { shares: amount }
            let obj = { headers: headers, data: data, trader_id: totalData.TRADERINFO.id, stock_id: stockData.id }
            apiCall('stocks#buy_update', obj).then(response => {
                updateHeader(response, headers, setHeaders)
                toast.success('Stock Bought')
            }).then(r => navigate('/main')).catch(err => {
                updateHeader(err.response, headers, setHeaders)
                if (err.response.data.errors) {
                    toast.error(err.response.data.errors)
                }
                else {
                    toast.error(err.response.data.error)
                }
            })
        }
    }
    const sell = (e) => {
        e.preventDefault()
        let data = { shares: amount }
        let obj = { headers: headers, data: data, trader_id: totalData.TRADERINFO.id, stock_id: stockData.id }
        apiCall('stocks#sell_update', obj).then(response => {
            // if (!(response.headers['access-token'] === '')) {
            //     setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'] })
            //     console.log("Headers Changed")
            // }
            toast.success('Stock Sold')
            updateHeader(response, headers, setHeaders)

        }).then(r => navigate('/main')).catch(err => {
            if (err.response.data.errors) {
                toast.error(err.response.data.errors)
            }
            else {
                toast.error(err.response.data.error)
            }
        })
    }
    return (
        <section className='w-full h-full flex flex-col text-white items-center overflow-scroll gap-2'>
            <p className='w-[90%] h-auto text-2xl mt-10 mb-[10px]'>Stock</p>

            <div className='stock-details flex mt-5 justify-stretch w-[90%]'>
                <p className='text-xl text-start w-[50%]'>{marketData.symbol}</p>
                <p className='text-xl text-center ml-40 w-[50%]'>${marketData.price_per_unit}</p>
            </div>
            <div className='stock-details flex justify-stretch w-[90%]'>
                <p className='text-[15px] text-start + w-[50%] flex items-center'>{marketData.stock_name}</p>
                <p className='text-xl text-start w-[50%] text-primary-green flex justify-end items-center'>{marketData.percentage_change}</p>
            </div>

            <div className='w-[90%] max-w-[90%] rounded-3xl min-h-max flex items-center bg-primary-blue justify-center overflow-hidden'>
                {marketData.logo && <img width='200' height='250' src={marketData.logo.split('"')[1]} alt="Stock" />}
            </div>
            <div className='w-[90%] min-h-max flex flex-col justify-center items-center gap-3 max-w-[90%]'>
                <div className='w-full h-auto py-3 rounded-[20px] bg-primary-button-blue-dark text-white flex justify-between items-center '>
                    <p className='text-xl text-center'>Balance</p>
                    <p className='text-xl text-center'>{stockData.shares}</p>
                    <p className='text-xl text-center'>${Math.round(stockData.total_price)}</p>
                </div>
                <input className='w-full h-auto py-3 rounded-[20px] bg-primary-button-blue-dark text-white text-center' onChange={(e) => setAmount(e.target.value)} type='text' placeholder='input amount' />
            </div>

            <div className='buttons h-auto w-[90%] flex justify-center items-center gap-5'>
                <button className='bg-primary-green text-[16px] py-2 w-auto mt-4 px-8 rounded-[20px]' onClick={(e) => buy(e)}> Buy</button>
                <button className='bg-primary-red text-[16px] py-2 w-auto mt-4 px-8 rounded-[20px]' onClick={(e) => sell(e)}> Sell</button>
            </div>
        </section>


    )
}

export default TraderSingleStockView;
