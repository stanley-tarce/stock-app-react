import { useRef, useContext } from 'react'
import { CreateContext } from '../Data/DataHooks'
import LogoSVG from '../Assets/logosvg'
import EmailSVG from '../Assets/emailsvg'
import PasswordSVG from '../Assets/passwordsvg'
import LabelInputs from '../Components/LabelInput'
import { useForm } from 'react-hook-form'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const { handleSubmit, register, watch, errors } = useForm()

    const {
        signUpEmailState,
        setSignUpEmailState,
        signUpPasswordState,
        setSignUpPasswordState,
        signUpConfirmPasswordState,
        setConfirmSignUpPasswordState,
    } = useContext(CreateContext)

    const inputs = [
        {
            svg: <EmailSVG />,
            label: 'email',
            type: 'email',
            state: signUpEmailState,
            setState: setSignUpEmailState,
            form: {required: "Email is required", pattern: /^\S+@\S+$/i, message: "Please enter a valid email address."},
            formName: 'email',
            ref: emailRef
        },
        {
            svg: <PasswordSVG />,
            label: 'password',
            type: 'password',
            state: signUpPasswordState,
            setState: setSignUpPasswordState,
            form: {required: "You must specify a password",  value: 8, message: "Password must have at least 8 characters."}, 
            formName: 'password',
            ref: passwordRef
        },

        {
            svg: <PasswordSVG />,
            label: 'confirm password',
            type: 'password',
            state: signUpConfirmPasswordState,
            setState: setConfirmSignUpPasswordState,
            form: {required: "Confirm your password", validate: value => value === watch('password'), message: "Passwords do not match."},
            formName: "confirmPassword",
            ref: confirmPasswordRef
        }
      
    ]

    const onSubmit = (data) => console.log({data}) 

    return (
        <div  className="w-screen h-screen bg-primary-blue-light flex flex-col items-center justify-center gap-[40px]">
             <LogoSVG />
             <form className="w-[80%] h-auto flex flex-col justify-center items-center gap-[25px]" onSubmit={handleSubmit(onSubmit)}>
                {inputs.map(({ children, svg, type, state, setState, formName, form, ref, label }) => {
                return <LabelInputs svg={svg} type={type} state={state} setState={setState} formName={formName} form={form} registerHandler={register} ref={ref} label={label}>{children} </LabelInputs>
                })}
                {/* {errors? } email && <ErrorMessage message={errors.email.message} /> */}
                {/* {errors? } passsword && <ErrorMessage message={errors.password.message} /> */}
                {/* {errors? } confirmPassword && <ErrorMessage message={errors.confirmPassword.message} /> */}
            <button className='w-[200px] h-[40px] rounded-[20px] bg-primary-green flex justify-center items-center gap-[15px]'><p className='text-[16px] font-bold text-primary-black'>SIGN UP</p></button>
      </form >
        </div>
    )
}

export default Signup
// onSubmit={handleSubmit(onSubmit)}