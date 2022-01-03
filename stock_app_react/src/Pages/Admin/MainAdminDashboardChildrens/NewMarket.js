import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import { apiCall } from '../../../Utility/Utility'

function NewMarket() {
    const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
    const location = useLocation()
    const { id } = useParams()

    useEffect(() => {
        apiCall('markets#show', { market_id: id, headers: headers })
          .then(response => {
            console.log(response)
            if (response.headers['access-token'] === '') {
            }
            else {  
              setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
              setTotalData({ ...totalData, MARKETINFO: { ...response.data } })
              
              console.log("Headers Changed for Show Traders")
            }
          })
    }, [location.pathname])

    // console.log(totalData.MARKETINFO.symbol)

    const updateMarket = () => {
      apiCall('markets#update', {market_id: id, headers: headers})
        .then(response => {
          if (response.headers['access-token'] === ''){

          } else {
            setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
            setTotalData({ ...totalData, MARKETINFO: { ...response.data } })
          }
        })
    }

    return (
        <section className='w-full h-full flex flex-col text-white items-center overflow-scroll'>
          <p className='w-[90%] h-auto text-2xl mt-10 mb-[35px]'>Stock</p>

          <div className='stock-details flex mt-5 justify-stretch w-[90%]'>
            <p className='text-3xl text-start ml-3 w-[50%]'>{totalData.MARKETINFO.symbol}</p>
            <p className='text-3xl text-center ml-40 w-[50%]'>${totalData.MARKETINFO.price_per_unit}</p>
          </div>   
          <div className='stock-details flex justify-stretch w-[90%]'>
            <p className='text-2xl text-start ml-3 w-[50%]'>{totalData.MARKETINFO.stock_name}</p>
            <p className='text-2xl text-start ml-3 w-[50%] text-primary-green'>{totalData.MARKETINFO.percentage_change}</p>
          </div>   

          <div className='w-[90%] rounded-3xl min-h-max flex items-center bg-primary-blue justify-center'>
            {totalData.MARKETINFO.logo &&  <img width='300' height='300' src={totalData.MARKETINFO.logo.split('"')[1]}/>}
          </div>
          <div className='buttons w-full h-auto justify-evenly items-center w-[90%] flex flex-col'>
            <button onClick={(e) => updateMarket(e)} className='bg-primary-green text-[20px] py-4 w-full mt-4 p-2 rounded-3xl'> update market</button>
            <button onClick={(e) => updateMarket(e)} className='bg-primary-red text-[20px] py-4 w-full mt-4 p-2 rounded-3xl'> update market</button>
          </div>
        </section>
 
        
    )
} 

export default NewMarket


            // {/* {stock} */}
            // {/* if(stock) {
            //   <p> {stock.symbol} </p>
            //   <p> {stock.stock_name} </p>
            // }
            // {/* <p>{totalData.MARKETINFO.symbol}</p> */}
            // {/* <p>{totalData.MARKETINFO.stock_name}</p> */} */}