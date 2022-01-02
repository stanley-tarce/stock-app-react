import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import UserIcon from '../../../Assets/usericon'
import { apiCall } from '../../../Utility/Utility'

function AdminHomeDisplay() {

  const { headers, setHeaders, userData, totalData } = useContext(CreateContext)
  const loggedInAdmin = userData
  const navigate = useNavigate()
  // let traders = totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending')
  const [ clicked, setClicked ] = useState(false)
  const [traders, setTraders] = useState(totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending'))

  const updateAccountStatus = (e, trader, status) => {
    e.preventDefault()
    apiCall(`traders#${status}_trader_status`, { trader_id: trader.id, headers: headers })
      .then(response => {
        if (response.headers['access-token'] !== '') {
          setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
        }
        setClicked(true)
      }).catch(error => { console.log(error.response) })
  }

  //for re-render
  useEffect(()=> {
    setTraders(totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending'))
    console.log('render')
  }, [clicked]);

  const signOut = (e) => {
    apiCall('signout', { headers: headers })
      .then(response => {
        setHeaders({ 'access-token': '', 'client': '', 'uid': '', 'expiry': '' })
        navigate('/')
      }
    )
  }

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <section className='admin w-[90%] h-auto text-white mt-10 flex flex-col'>
        <div className='text-2xl border-b-2 border-container-light-blue py-2'>Welcome, {loggedInAdmin.name}!</div>
        <div className='admin-details py-4'>
          <p className='py-2'>Email: {loggedInAdmin.email}</p>
          <p className='py-2'>Account: <span className='bg-primary-gray px-2 py-1 rounded-3xl'>{loggedInAdmin.user_type}</span></p>
        </div>
        <button className='sign-out w-2/5 bg-container-light-blue p-2 rounded-3xl self-center' onClick={(e) => signOut(e)}>Sign out</button>
      </section>

      <div className='text-2xl w-[90%] text-white font-[400] border-b-2 py-2 mt-5 border-container-light-blue flex'>Pending</div>
      <section className='admin w-[90%] h-auto text-white mt-2 flex flex-col overflow-y-auto'>
        {traders.length !== 0 ? traders.map((trader, index) => {
          return <div key={index} className='bg-container-light-blue text-white w-full h-36 font-[400] my-4 py-4 flex flex-col rounded-3xl justify-center'>
            <ul>
              <li classname='flex'><UserIcon size={"40"} className='mx-5 inline-block'/><span className='text-xl'>{trader.name}</span></li>
            </ul>
            <div className='buttons flex justify-evenly mt-8'>
              <button onClick={(e) => updateAccountStatus(e, trader, 'update')} className='bg-primary-green w-1/3 p-2 rounded-3xl'>Approve</button>
              <button onClick={(e) => updateAccountStatus(e, trader, 'reject')} className='bg-alert-red w-1/3 p-2 rounded-3xl'>Reject</button>
            </div> 
          </div>
        }): <p className='w-[90%] h-auto text-white text-xl flex self-center'>No pending accounts</p> }
      </section>
    </div>
  )
}

export default AdminHomeDisplay
