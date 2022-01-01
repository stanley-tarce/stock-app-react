import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import UserIcon from '../../../Assets/usericon'
import { apiCall } from '../../../Utility/Utility'

function AdminHomeDisplay() {
  let adminNavigations = [{ title: 'Client' }, { title: 'Listings' }, { title: 'Support' }]

  const { headers, setheaders, userData, setUserData, totalData } = useContext(CreateContext)
  const traders = totalData.ADMINLISTOFTRADERS.filter(trader => trader.status === 'pending')
  const loggedInAdmin = userData
  const navigate = useNavigate()

  const approveAccount = (e) => {
    e.preventDefault()
    // let approve = 
  }

  const signOut = (e) => {
    apiCall('signout', { headers: headers })
      .then(response => {
        console.log(response.data.data)
        setheaders({ 'access-token': '', 'client': '', 'uid': '', 'expiry': '' })
        // setUserData({ id: response.data.data.id, email: response.data.data.email, user_type: response.data.data.user_type, name: response.data.data.name })
        navigate('/')
      }
    )
  }

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <section className='admin w-[90%] h-auto text-white mt-10 flex flex-col'>
        <div className='text-2xl border-b-2 py-2'>Welcome, {loggedInAdmin.name}!</div>
        <div className='admin-details py-4'>
          <p className='py-2'>Email: {loggedInAdmin.email}</p>
          <p className='py-2'>Account: <span className='bg-primary-gray px-2 py-1 rounded-3xl'>{loggedInAdmin.user_type}</span></p>
        </div>
        <button className='sign-out w-2/5 bg-container-light-blue p-2 rounded-3xl self-center' onClick={(e) => signOut(e)}>Sign out</button>
      </section>

      <div className='text-2xl w-[90%] text-white font-[400] border-b-2 py-2 mt-5 border-white flex'>Pending</div>
      <section className='admin w-[90%] h-auto text-white mt-2 flex flex-col overflow-y-auto'>
        {traders.length !== 0 ? traders.map(trader => {
          return <div className='bg-container-light-blue text-white w-full h-36 font-[400] my-4 py-4 flex flex-col rounded-3xl justify-center'>
            <ul>
              <li classname='flex'><UserIcon size={"40"} className='mx-5 inline-block'/><span className='text-xl'>{trader.name}</span></li>
            </ul>
            <div className='buttons flex justify-evenly mt-8'>
              <button className='bg-alert-green w-1/3 p-2 rounded-3xl'>Approve</button>
              <button className='bg-alert-red w-1/3 p-2 rounded-3xl'>Reject</button>
            </div> 
          </div>
        }): <p className='w-[90%] h-auto text-white text-xl flex self-center'>No pending accounts</p> }
      </section>
    </div>
  )
}

export default AdminHomeDisplay
