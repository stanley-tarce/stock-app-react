import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import { apiCall } from '../../../Utility/Utility'

function AdminMarketsDisplay() {
  const { totalData, userData, headers, setHeaders, } = useContext(CreateContext)
  const navigate = useNavigate()
  const markets = totalData.MARKETS
  const loggedInAdmin = userData

  const updateAllMarkets = (e) => {
    e.preventDefault()
    apiCall('markets#update_global_stocks', { admin_id: loggedInAdmin, headers: headers })
        .then(response => {
            if (response.headers['access-token'] !== '') {
                setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
            }
            console.log('updated')
        }).catch(error => { console.log(error.response) })
    }

  return (
    <section className='w-full h-full flex flex-col items-center text-white'>
        <p className='w-[90%] h-auto text-[25px] mt-10 border-white mb-[35px]'>Markets</p>
        <div className='w-[90%] h-[83%] flex flex-col gap-4'>
            <button onClick={(e) => updateAllMarkets(e)} className='bg-primary-green text-[20px] py-4 w-full p-2 rounded-3xl'>UPDATE ALL MARKETS</button>
            <div className='w-full h-full overflow-scroll flex flex-col gap-4'>
                {markets.length !== 0 ? markets.map((market, index) => {
                    return <div key={index} className='w-full flex text-[20px] justify-between items-center bg-container-light-blue rounded-[20px] hover:bg-blue-400 p-2 cursor-pointer'>
                        <span className='w-[50%] flex items-center justify-start text-left'> 
                            <img className="rounded-[20px] pointer-events-none" width="45" height="45" src={market.logo.split('"')[1]}/>
                            <p className=' text-left pl-4 pointer-events-none'>{market.symbol}</p>
                        </span>
                        <p className='mr-4 pointer-events-none'>${market.price_per_unit}</p>
                    </div>
                    }) : <p className='w-[90%] h-auto text-white text-[20px]'>No Market Found</p>}
            </div>
        </div>
    </section>
  ) 
}

export default AdminMarketsDisplay

