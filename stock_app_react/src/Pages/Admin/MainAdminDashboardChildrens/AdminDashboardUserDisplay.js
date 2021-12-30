import React from 'react'

function AdminDashboardUserDisplay() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-4'>
      <div className='w-full h-[90px] bg-primary-navbar-color-blue flex justify-start p-3'>
        <div className='w-[50%] h-full flex justify-start items-end text-[30px] text-white'>Admin</div>
        <div className='w-[50%] h-full flex justify-end items-end gap-3 p-2'>
          <div className='w-[34px] h-[34px] bg-gray-500'></div>
          <div className='w-[34px] h-[34px] bg-gray-500'></div>
        </div>
      </div>
      <p className='w-[90%] h-auto text-white text-[20px] mb-[15px]'>miyu@gmail.com</p>
      <p className='w-[90%] h-auto text-white text-[25px] pb-[2px] border-b-[1px] border-white mb-[35px]'>Identity Verification</p>
      <p className='w-[90%] h-auto text-white text-[25px] pb-[2px] border-b-[1px] border-white'>Account Security</p>
    </div>
  )
}

export default AdminDashboardUserDisplay
