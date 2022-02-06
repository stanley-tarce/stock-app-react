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
      <p className='w-[90%] h-auto text-2xl  mt-10 border-white mb-[35px]'>Markets</p>
      <div className='w-[90%] h-[83%] flex flex-col gap-4'>
        <div className='w-full h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
          <SearchIcon />
          <input className='w-[90%] h-[95%] bg-transparent outline-none text-white text-[20px]' placeholder='Search Market Here' onChange={(event) => setSearch(event.target.value)} />
        </div>
        <div className='w-full h-full overflow-scroll flex flex-col gap-4'>
          {markets.length !== 0 ? markets.filter(data => data.symbol.includes(search)).map((market, index) => {
            return <div key={index} onClick={(e) => goToMarket(e)} className='w-full flex text-[20px] justify-between items-center bg-container-light-blue rounded-[20px] hover:bg-blue-400 p-2 cursor-pointer'>
              <span className='w-[50%] flex pointer-events-none items-center justify-start text-left'>
                <img className="rounded-[20px] pointer-events-none" width="45" height="45" src={market.logo.split('"')[1]} />
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

export default TraderMarketDisplay
