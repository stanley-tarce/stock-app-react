import React, { useRef, useState, useContext } from 'react'
import { CreateContext } from '../../../Data/DataHooks'

function AdminCreateTrader() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const walletRef = useRef()
  const { headers, setHeaders, totalData, setTotalData } = useContext(CreateContext)
  let inputForms = [
    { label: "Name", type: "text", ref: nameRef }, {
      label: "Email",
      type: "email",
      ref: emailRef,
      placeholder: "Juan Dela Cruz"

    }, {
      label: "Password",
      type: "password",
      ref: passwordRef


    }, {
      label: "Confirm Password",
      type: "password",
      ref: passwordConfirmRef
    }, {
      label: "Wallet",
      type: "text",
      ref: walletRef
    }]
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <p className='w-[90%] h-auto flex justify-start items-center pb-[10] border-b-[1px] border-white text-[20px] text-white'>Create Trader</p>
      <form className='w-[90%] h-auto flex flex-col justify-center items-center'>
        {inputForms.map(({ label, ...others }, index) =>
          <div key={index} className='w-full h-auto flex justify-start items center text-white text-[14px]'>
            <label className='w-[30%] h-full flex justify-center items-center'>{label}</label>
            <input className='w-[70%] h-auto py-3 px-2 bg-transparent outline-none' {...others} />
          </div>
        )}
        <button></button>
      </form>
    </div>
  )
}

export default AdminCreateTrader
