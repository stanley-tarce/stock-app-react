import React from 'react'

function AdminDashboardMainDisplay() {
  let adminNavigations = [{ title: 'Client' }, { title: 'Listings' }, { title: 'Support' }]
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <p className='text-[30px] text-white font-[400] py-7 w-[90%] h-auto border-b-2 border-white flex justify-center items-center'>Welcome back, Miyu</p>
      <div className='w-[90%] h-[70px] flex justify-between items-center border-b-2 border-white gap-3'>
        {adminNavigations.map((navigation, index) => {
          const { title } = navigation
          return (<div key={index} className='w-[50%] h-full flex justify-center items-center text-white'><p className='mt-3'>{title}</p></div>)
        })}
      </div>
      <div className='w-[90%] h-[120px] flex flex-col justify-start items-start border-b-2 border-white gap-3'>
        <p className='text-white text-[15px]'>Announcement</p>
      </div>

    </div>
  )
}

export default AdminDashboardMainDisplay
