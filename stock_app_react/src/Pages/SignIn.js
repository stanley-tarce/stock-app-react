import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInputs from '../Components/LabelInput'
export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {
    loginEmailState,
    setLoginEmailState,
    loginPasswordState,
    setLoginPasswordState,
  } = useContext(CreateContext)
  const inputs = [
    {
      svg: <EmailSVG />,
      label: 'email',
      type: 'email',
      state: loginEmailState,
      setState: setLoginEmailState,
      ref: emailRef
    },
    {
      svg: <PasswordSVG />,
      label: 'password',
      type: 'password',
      state: loginPasswordState,
      setState: setLoginPasswordState,
      ref: passwordRef,
      children: <div className='w-auto h-auto'><p className='text-[11px] text-primary-blue-light font-bold mr-1'>FORGOT</p></div>
    },




  ]
  return (
    <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
      <LogoSVG />
      <form className="w-[80%] h-auto flex flex-col justify-center items-center gap-[25px]" onSubmit={() => console.log('hello')}>
        {inputs.map(({ children, svg, type, state, setState, ref, label }) => {
          return <LabelInputs svg={svg} type={type} state={state} setState={setState} ref={ref} label={label}>{children} </LabelInputs>
        })}
        <div className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><p className='text-[16px] font-bold text-primary-black'>LOGIN</p>
          {/**Miyu, lagay mo dito yung fontawesome */}</div>
      </form >
      <p className='text-[16px] text-white'>Don't have an account? <Link to="/Signup" className="text-primary-green no-underline cursor-pointer">Sign Up</Link></p>
    </div >
  )
}
