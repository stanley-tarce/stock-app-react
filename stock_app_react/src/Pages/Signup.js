import { useRef, useContext } from 'react'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInputs from '../Components/LabelInput'
import { apiCall } from '../Utility/Utility'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()

    const {
        signUpEmailState,
        setSignUpEmailState,
        signUpPasswordState,
        setSignUpPasswordState,
        signUpConfirmPasswordState,
        setConfirmSignUpPasswordState,
        signUpNameState,
        setSignUpNameState
    } = useContext(CreateContext)

    const inputs = [
        {
            svg: <EmailSVG />,
            label: 'email',
            type: 'email',
            state: signUpEmailState,
            setState: setSignUpEmailState,
            ref: emailRef
        },
        {
            svg: null,
            label: 'full name',
            type: 'text',
            state: signUpNameState,
            setState: setSignUpNameState,
            ref: nameRef
        },
        {
            svg: <PasswordSVG />,
            label: 'password',
            type: 'password',
            state: signUpPasswordState,
            setState: setSignUpPasswordState,
            ref: passwordRef,
        },


        {
            svg: <PasswordSVG />,
            label: 'confirm password',
            type: 'password',
            state: signUpConfirmPasswordState,
            setState: setConfirmSignUpPasswordState,
            ref: confirmPasswordRef,
        },

    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        var data = {
            trader: {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                name: nameRef.current.value,
                password_confirmation: confirmPasswordRef.current.value
            }
        }
        apiCall('signup', null, data)
            .then(response => console.log(response))
            .catch(error => console.log(error.response))
    }

    return (
        <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
            <LogoSVG />
            <form className="w-[80%] h-auto flex flex-col justify-center items-center gap-[25px]" onSubmit={(e) => handleSubmit(e)}>
                {inputs.map(({ children, svg, type, state, setState, ref, label }) => {
                    return <LabelInputs svg={svg} type={type} state={state} setState={setState} ref={ref} label={label}>{children} </LabelInputs>
                })}
                <div className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><p className='text-[16px] font-bold text-primary-black'>SIGN UP</p></div>
            </form >
        </div>
    )
}

export default Signup
