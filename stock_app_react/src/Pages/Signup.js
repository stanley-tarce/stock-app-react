import { useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInput from '../Components/LabelInput'
import { useForm } from 'react-hook-form'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const { handleSubmit, register, watch, errors } = useForm()

    const {
        signUpNameState,
        setSignUpNameState,
        signUpEmailState,
        setSignUpEmailState,
        signUpPasswordState,
        setSignUpPasswordState,
        signUpConfirmPasswordState,
        setConfirmSignUpPasswordState,
    } = useContext(CreateContext)

    const navigate = useNavigate

    const inputs = [
        {
            svg: <EmailSVG />,
            label: 'name',
            type: 'name',
            state: signUpNameState,
            setState: setSignUpNameState,
            ref: {...register("name", {required: "Name is required", message: "Please enter a valid email address."})}
        },
        {
            svg: <EmailSVG />,
            label: 'email',
            type: 'email',
            state: signUpEmailState,
            setState: setSignUpEmailState,
            ref: {...register("email", {required: "Email is required", pattern: /^\S+@\S+$/i, message: "Please enter a valid email address."})}
        },
        {
            svg: <PasswordSVG />,
            label: 'password',
            type: 'password',
            state: signUpPasswordState,
            setState: setSignUpPasswordState,
            ref: {...register("password", {required: "You must specify a password",  value: 8, message: "Password must have at least 8 characters."})} 
        },

        {
            svg: <PasswordSVG />,
            label: 'confirm password',
            type: 'password',
            state: signUpConfirmPasswordState,
            setState: setConfirmSignUpPasswordState,
            ref: {...register("confirmPassword", {required: "Confirm your password", validate: value => value === watch('password'), message: "Passwords do not match."})}
        }
      
    ]

    const onSubmit = (e) => {
        e.preventDefault()


        navigate('/main')
    }
    return (
        <div  className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
             <LogoSVG />
             <form className="w-[80%] h-auto flex flex-col justify-center items-center gap-[25px]" onSubmit={handleSubmit(onSubmit)}>
                {inputs.map(({ children, svg, type, state, setState, ref, label }) => {
                return <LabelInput svg={svg} type={type} state={state} setState={setState} ref={ref} label={label}>{children} </LabelInput>
                })}
                {/* {errors? } email && <ErrorMessage message={errors.email.message} /> */}
                {/* {errors? } passsword && <ErrorMessage message={errors.password.message} /> */}
                {/* {errors? } confirmPassword && <ErrorMessage message={errors.confirmPassword.message} /> */}
            
            
            <button className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><p className='text-[16px] font-bold text-primary-black'>SIGN UP</p></button>
      </form >
      <p className='text-[16px] text-white'>Already have an account? <Link to="/" className="text-primary-green no-underline cursor-pointer">Login</Link></p>
        </div>
    )
}

export default Signup
