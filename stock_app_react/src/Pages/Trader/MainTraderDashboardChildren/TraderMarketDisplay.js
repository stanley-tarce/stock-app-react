import React, { useContext, useState } from 'react'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'
import { useNavigate, useLocation } from 'react-router-dom'

function TraderMarketDisplay() {
  const navigate = useNavigate()
  const { totalData } = useContext(CreateContext)
  const markets = totalData.MARKETS
  const [search, setSearch] = useState('')
  const goToMarket = (e) => {
    e.preventDefault()
    let symbol = e.target.firstChild.lastChild.innerText
    let id = totalData.MARKETS.find(market => market.symbol.includes(symbol)).id
    console.log(id)


    return navigate(`${id}`)
  }
 
  return (
    <section className='w-full h-full flex flex-col items-center text-white'>
      <h2 className='w-[90%] h-auto text-xl md:text-2xl mt-5 border-white mb-[15px]'>Markets</h2>
      <div className='w-[90%] h-[83%] flex flex-col gap-4'>
        <div className='w-full h-[50px] border-2 border-container-light-blue rounded-lg flex justify-start items-center gap-2 md:py-6 p-2'>
          <SearchIcon className={"w-[30px] h-[30px] text-text-gray"} />
          <input className='w-[90%] h-[95%] bg-transparent md:py-4 outline-none text-white text-base md:text-lg' placeholder='Search Market Here' onChange={(event) => setSearch(event.target.value)} />
        </div>
        <div className='table-head w-full h-auto grid grid-cols-4'>
          <p className='w-full h-full flex col-start-1 col-end-3 justify-start text-xs md:text-base ml-4 md:ml-8 uppercase text-white'>stock</p>
          <p className='w-full h-full flex col-start-3 col-end-4 justify-start text-xs md:text-base uppercase text-white'>price</p>
          <p className='w-full h-full flex col-start-4 col-end-5 justify-start text-xs md:text-base uppercase text-white'>chg%</p>
        </div>
        <div className='w-full h-full overflow-scroll flex flex-col gap-4 '>
          {markets.length !== 0 ? markets.filter(data => data.symbol.includes(search)).map((market, index) => {
            return <div key={index} onClick={(e) => goToMarket(e)} className='w-full grid grid-cols-4 min-h-[55px] lg:min-h-[60px] flex text-base xl:text-2xl md:text-xl justify-center items-center bg-container-light-blue rounded-lg hover:bg-blue-400 p-2 cursor-pointer'>
              <span className='w-[50%] flex md:pl-6 pointer-events-none col-start-1 col-end-3 items-center justify-start text-left'>
                <img className="rounded-full pointer-events-none" width="40" height="40" src={market.logo.split('"')[1]} />
                <p className='text-base pl-4 xl:text-2xl md:text-xl pointer-events-none'>{market.symbol}</p>
              </span>
              <p className='mr-4 col-start-3 col-end-4 flex justify-start pointer-events-none'>${market.price_per_unit}</p> 
              {market.percentage_change && market.percentage_change.includes("+")   
                ? <p className='mr-4 col-start-4 text-primary-green col-end-5 flex justify-end md:justify-start pointer-events-none'>{market.percentage_change}</p>
                : <p className='mr-4 col-start-4 text-primary-red col-end-5 flex justify-end md:justify-start pointer-events-none'>{market.percentage_change}</p>
              }            
            </div>
          }) : <p className='w-[90%] h-auto text-white text-[20px]'>No Market Found</p>}
        </div>
      </div>
    </section>
  )
}

export default TraderMarketDisplay
