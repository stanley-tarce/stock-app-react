import React, { useRef, useContext } from 'react'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInputs from '../Components/LabelInput'
export default function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { active, setActive } = useContext(CreateContext)
  const inputs = [
    { svg: <EmailSVG />, type: 'email', state: active, setState: setActive, ref: emailRef },
    { svg: <PasswordSVG />, type: 'password', state: active, setState: setActive, ref: passwordRef }
  ]
  return (
    <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center">
      <LogoSVG />
      <form className="w-[80%] h-auto flex flex-col justify-center items-center gap-[10px]" onSubmit={() => console.log('hello')}>
        {inputs.map(({ svg, type, state, setState, ref }) => {
          return <LabelInputs svg={svg} type={type} state={state} setState={setState} ref={ref} />
        })}
      </form>
    </div>
  )
}
