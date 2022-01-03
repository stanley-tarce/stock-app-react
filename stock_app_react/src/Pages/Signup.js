import { useRef, useContext } from 'react'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInputs from '../Components/LabelInput'
import { apiCall } from '../Utility/Utility.js'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const nameRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')

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
            svg: null,
            label: 'name',
            type: 'text',
            state: signUpNameState,
            setState: setSignUpNameState,

            ref: nameRef,

        },
        {
            svg: <EmailSVG />,
            label: 'email',
            type: 'email',
            state: signUpEmailState,
            setState: setSignUpEmailState,

            ref: emailRef,

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

        }

    ]

    const onSubmits = (e) => {
        let data = { trader: { email: emailRef.current.value, name: nameRef.current.value, password: passwordRef.current.value, password_confirmation: confirmPasswordRef.current.value } }
        e.preventDefault()
        apiCall('traders#create', { data: data }).then(response => {
            console.log(response)
            toast('Successfully signed up!', { type: 'success' })
            return navigate(-1)
        }).catch(error => {
            const errors = error.response.data.errors
            errors.forEach(error => toast(error, { type: 'error' }))
        })
    }

    return (
        <div className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
            <LogoSVG />
            <form onSubmit={(e) => onSubmits(e)} className="w-[80%] h-auto flex flex-col justify-center items-center gap-[25px]" >
                {inputs.map(({ children, svg, type, state, setState, formName, form, ref, label }) => {
                    return <LabelInputs svg={svg} type={type} state={state} setState={setState} ref={ref} label={label}>{children} </LabelInputs>
                })}
                {/* {errors? } email && <ErrorMessage message={errors.email.message} /> */}
                {/* {errors? } passsword && <ErrorMessage message={errors.password.message} /> */}
                {/* {errors? } confirmPassword && <ErrorMessage message={errors.confirmPassword.message} /> */}
                <input type="submit" className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px] text-[16px] font-bold text-primary-black' name='Sign Up' />
                {/* <button onClick={handleSubmit(e)=> onSubmit(e)} className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><p className='text-[16px] font-bold text-primary-black'>SIGN UP</p></button> */}
            </form >
        </div>
    )
}

export default Signup
// onSubmit={handleSubmit(onSubmit)}