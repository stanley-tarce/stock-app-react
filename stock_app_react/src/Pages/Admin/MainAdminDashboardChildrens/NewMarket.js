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
        console.log(response.data)
        if (response.headers['access-token'] === '') {
        }
        else {
          setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
          console.log("Headers Changed for Show Traders")
        }
        setTotalData({ ...totalData, MARKETINFO: { ...response.data } })
      })
  }, [location.pathname])

  console.log(totalData.MARKETINFO.symbol)

  return (
    <section className='w-full h-full flex flex-col items-center text-white'>
      <p className='w-[90%] h-auto text-2xl  mt-10 border-white mb-[35px]'>Stock</p>

      <p>{totalData.MARKETINFO.symbol}</p>
      <p>{totalData.MARKETINFO.stock_name}</p>
      {totalData.MARKETINFO.logo && <img src={totalData.MARKETINFO.logo.split('"')[1]} />}
      {/* <img src={totalData.MARKETINFO.logo.split('"')[1]}/> */}
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