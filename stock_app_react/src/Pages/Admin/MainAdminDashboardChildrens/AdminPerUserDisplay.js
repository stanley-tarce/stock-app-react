import React, { useContext, useEffect } from 'react'
import { CreateContext } from '../../../Data/DataHooks'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { apiCall } from '../../../Utility/Utility'
import DeleteButton from '../../../Assets/deletebutton'
import UserIcon from '../../../Assets/usericon'

function AdminPerUserDisplay() {
  const { totalData, setTotalData, headers, setHeaders } = useContext(CreateContext)
  const { id } = useParams()
  const location = useLocation()
  useEffect(() => {
    console.log(id)
    apiCall('traders#show', { trader_id: id, headers: headers })
      .then(response => {
        console.log(response.data)
        setTotalData({ ...totalData, ADMINSHOWTRADER: { ...response.data } })
        if (response.headers['access-token'] === '') {
          console.log("Headers Didnt Change 2")
        }
        else {
          setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
          console.log("Headers Changed for Show Traders")
        }
      })
  }, [location.pathname])
  const { ADMINSHOWTRADER } = totalData
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-[90%] h-auto pb-[10px] border-b-[1px] border-white flex justify-between items-center' >
        <p className='text-white text-[25px]'>{ADMINSHOWTRADER.name}</p>
        <DeleteButton />
      </div>
      <UserIcon className={"w-auto h-auto p-[70px]"} size={'130'} />
      <div className='w-auto h-auto flex text-white text-[20px] gap-2 '>
        <label className=''>Name:</label>
        <input className='' type="text" />
      </div>
    </div>
  )
}

export default AdminPerUserDisplay
