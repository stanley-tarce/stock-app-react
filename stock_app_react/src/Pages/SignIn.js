import React, { useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInputs from '../Components/LabelInput'
import { apiCall } from '../Utility/Utility'
import { toast } from 'react-hot-toast'
import axios from 'axios'
export default function SignIn() {
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()

  const {
    loginEmailState,
    setLoginEmailState,
    loginPasswordState,
    setLoginPasswordState,
    setHeaders,
    setUserData,
    totalData,
    setTotalData,
  } = useContext(CreateContext)
  const yahooLogin = () => {
    return axios.get("https://wyt-rails.herokuapp.com/users").then(res => console.log(res)).catch(err => console.log(err))
  }
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

  const handleSubmit = (e) => {
    e.preventDefault()
    var data =
    {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    let object = { data: data }
    apiCall('signin', object)
      .then(response => {
        console.log(response)
        setHeaders({ 'access-token': response.headers['access-token'], 'client': response.headers['client'], 'uid': response.headers['uid'], 'expiry': response.headers['expiry'] })
        setUserData({ id: response.data.data.id, email: response.data.data.email, user_type: response.data.data.user_type, name: response.data.data.name })
        if (response.data.data.user_type === 'trader') {
          setTotalData({ ...totalData, TRADERINFO: { ...response.data.data.trader } })
          setLoginEmailState(false)
          setLoginPasswordState(false)
          toast(`Welcome ${response.data.data.name}`, { type: 'success' })
          navigate('/main')
        }
        else {
          setTotalData({ ...totalData, ADMININFO: { ...response.data.data.admin } })
          toast(`Welcome ${response.data.data.name}`, { type: 'success' })
          setLoginEmailState(false)
          setLoginPasswordState(false)
          navigate('/admin')
        }

      })
      .catch(error => {
        // console.log(error.response.data.errors)
        const errors = error.response?.data.errors
        errors.forEach(error => toast(error, { type: 'error' }))
      })
  }
  return (
    <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
      <LogoSVG />
      <form className="w-[80%] h-auto flex flex-col justify-center items-center gap-[25px]" onSubmit={(e) => handleSubmit(e)}>
        {inputs.map(({ children, svg, type, state, setState, ref, label }, index) => {
          return <LabelInputs key={index} svg={svg} type={type} state={state} setState={setState} ref={ref} label={label}>{children} </LabelInputs>
        })}
        <button className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><div className='text-[16px] font-bold text-primary-black'>LOGIN</div>
          { }</button>
      </form >
      <p className='text-[16px] text-white'>Don't have an account? <Link to="/Signup" className="text-primary-green no-underline cursor-pointer">Sign Up</Link></p>
      <button onClick={() => yahooLogin()} className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><div className='text-[16px] font-bold text-primary-black'>LOGIN WITH YAHOO</div></button>

      You can simply use a tag to redirect.

      <a href={'https://wyt-rails.herokuapp.com/auth/yahoo_auth'}>
        Link to yahoo
      </a>
    </div >
  )
}
