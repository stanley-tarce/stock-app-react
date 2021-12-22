import React, { useState, useRef, useContext, useEffect } from 'react'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import SignInFuncsVar from '../Data/PagesVariables/SignInFuncsVar'
import LabelInput from '../Components/LabelInput'
export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { active, setActive } = useContext(CreateContext)
  const { emailStateChange, passwordStateChange, clickOutside } = SignInFuncsVar()
  // useEffect(() => {
  //   document.addEventListener("mousedown", clickOutside(active, emailRef, setActive, 'email'))
  //   return () => {
  //     document.addEventListener("mousedown", clickOutside(active, emailRef, setActive, 'email'))
  //   }
  // }, [active.email])
  // useEffect(() => {
  //   document.addEventListener("mousedown", clickOutside(active, passwordRef, setActive, 'password'))
  //   return () => {
  //     document.addEventListener("mousedown", clickOutside(active, passwordRef, setActive, 'password'))
  //   }
  // }, [active.password])
  let inputs = [
    { svg: <EmailSVG />, type: 'email', state: active, setState: setActive, },
    { svg: <PasswordSVG />, type: 'password', state: active, setState: setActive, }
  ]

  return (
    <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center">
      <LogoSVG />
      <form className="flex flex-col justify-center items-center gap-[10px]" onSubmit={() => console.log('hello')}>
        {/* <div className='bg-[#ECF0F1] w-[330px] h-[50px] flex justify-start items-center gap-[5px] font-bold text-primary-gray'>
          <div className="w-[10%] flex justify-center items-center">
            <EmailSVG />
          </div>
          <div className="flex flex-col align-center justify-center h-full text-[13px] overflow-hidden w-[90%]">
            <label className={`absolute ${emailStateChange} transition`}>{"Email".toUpperCase()}</label>
            <input ref={emailRef} onClick={() => setActive({ ...active, email: true })} className='bg-transparent w-full relative outline-none text-black' type="email" />
          </div>
        </div> */}
        {/* {LabelInput(<EmailSVG />, active, setActive, 'email')} */}
        {/* <div className='bg-[#ECF0F1] w-[330px] h-[50px] flex justify-start items-center text-[13px]  gap-[5px] font-bold text-primary-gray'>
          <div className="w-[10%] flex justify-center items-center">
            <PasswordSVG />
          </div>
          <div className="flex flex-col align-center justify-center h-full overflow-hidden w-[90%]">
            <label className={`absolute ${passwordStateChange} transition`}>{"Password".toUpperCase()}</label>
            <input ref={passwordRef} onClick={() => setActive({ ...active, password: true })} className='bg-transparent w-full relative outline-none text-black' type="password" />
          </div>
          <p className='text-[12px] mr-1 text-primary-blue-light'>FORGOT</p>
        </div> */}
        {inputs.map(({ svg, type, state, setState }) =>
          LabelInput(svg, state, setState, type)
        )}
        {/* {LabelInput(<PasswordSVG />, active, setActive, 'password')} */}
      </form >
    </div >
  )
}
