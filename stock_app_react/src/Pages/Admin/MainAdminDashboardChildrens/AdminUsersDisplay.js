import React, { useContext } from 'react'
import SearchIcon from '../../../Assets/searchicon'
import { CreateContext } from '../../../Data/DataHooks'
import { useNavigate } from 'react-router-dom'
import UserIcon from '../../../Assets/usericon'
function AdminUsersDisplay() {
  const { totalData, setTotalData } = useContext(CreateContext)
  const navigate = useNavigate()
  const goToUser = (e) => {
    e.preventDefault()
    let name = e.target.innerText
    let id = totalData.ADMINLISTOFTRADERS.find(user => user.name === name).id
    console.log(id)
    return navigate(`${id}`)
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <p className='w-[90%] h-auto text-white text-[25px] pb-[10px] border-b-[1px] border-white mb-[35px]'>Traders</p>
      <div className='w-[90%] h-[80%] max-h-[80%] flex flex-col gap-5 '>
        <div className='w-full h-[60px] bg-container-light-blue rounded-[20px] flex justify-start items-center gap-2 p-2'>
          <SearchIcon />
          <input className='w-[90%] h-[95%] bg-transparent outline-none text-white text-[20px]' placeholder='Search User Here' />
        </div>
        <div className='w-full h-auto overflow-scroll flex flex-col gap-4'>
          {totalData.ADMINLISTOFTRADERS.length !== 0 ? totalData.ADMINLISTOFTRADERS.map((trader, index) => {
            return <div key={index} onClick={(e) => goToUser(e)} className='w-full h-[60px] bg-container-light-blue rounded-[20px] hover:bg-blue-400 flex justify-start items-center gap-2 p-2 cursor-pointer'>
              <UserIcon size={"30"} />
              <p className='w-[90%] max-w-[90%] h-auto text-white text-[20px] pointer-events-none'>{trader.name}</p>
            </div>
          }) : <p className='w-[90%] h-auto text-white text-[20px]'>No Trader Found</p>}
        </div>
      </div>
    </div>
  )
}

export default AdminUsersDisplay
