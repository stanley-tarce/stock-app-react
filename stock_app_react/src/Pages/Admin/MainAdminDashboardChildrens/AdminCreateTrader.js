import React, { useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateContext } from '../../../Data/DataHooks'
import { apiCall } from '../../../Utility/Utility'
function AdminCreateTrader() {
  const navigate = useNavigate()
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const walletRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { trader: { name: nameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value, password_confirmation: passwordConfirmRef.current.value, wallet: walletRef.current.value } }
    apiCall('admins#create_trader', { headers: headers, data: data, admin_id: totalData.ADMININFO.id }).then(response => {
      if (!(response.headers['access-token'] === '')) {
        setHeaders({ ...headers, 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
        console.log('headers change at create traders admin side')
      }
      console.log(response)
      return navigate(-1)
    }).catch(error => console.log(error.response))
  }
  const handleCancel = (e) => {
    e.preventDefault()
    nameRef.current.value = ''
    emailRef.current.value = ''
    passwordRef.current.value = ''
    passwordConfirmRef.current.value = ''
    walletRef.current.value = ''
    navigate(-1)
  }
  const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
  let inputForms = [
    { label: "Name:", type: "text", ref: nameRef, placeholder: "Juan Dela Cruz" }, {
      label: "Email:",
      type: "email",
      ref: emailRef,
      placeholder: "juandelacruz@gmail.com"

    }, {
      label: "Password:",
      type: "password",
      ref: passwordRef,


    }, {
      label: "Confirm Password:",
      type: "password",
      ref: passwordConfirmRef
    }, {
      label: "Wallet:",
      type: "text",
      ref: walletRef,
      placeholder: "0"
    }]
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <p className='w-[90%] h-auto flex justify-start items-center pb-[10] border-b-[1px] border-white text-[20px] text-white'>Create Trader</p>
      <form className='w-[90%] h-auto flex flex-col justify-center items-center'>
        {inputForms.map(({ label, ...others }, index) =>
          <div key={index} className='w-full h-auto flex justify-start items center text-white text-[14px]'>
            <label className='w-[30%] h-full flex justify-start items-center'>{label}</label>
            <input className='w-[70%] h-auto py-3 px-2 bg-transparent outline-none border-b-[1px] border-white' {...others} />
          </div>
        )}
        <div className='w-[90%] h-auto flex justify-around items-center gap-10 mt-3'>
          <button onClick={(e) => handleCancel(e)} className='w-auto h-auto px-4 py-1 bg-button-color-blue-light text-white text-[14px]  rounded-[20px] hover:bg-blue-400'>Cancel</button>
          <button onClick={(e) => handleSubmit(e)} className='w-auto h-auto px-4 py-1 bg-button-color-blue-light text-white text-[14px]  rounded-[20px] hover:bg-blue-400'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AdminCreateTrader
