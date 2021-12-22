import React, { useEffect, forwardRef } from 'react'
const LabelInput = forwardRef(({ svg = null, state, setState, type, children = null }, ref) => { // Pass ref to this component
  const activeStatus = state[type] ? "translate-y-[-13px]" : "translate-y-0"
  const clickOutside = (state, ref, setState, type) => {
    return e => {
      if (state[type] && !ref.current.contains(e.target) && ref.current && ref.current.value.length === 0) {
        setState({ ...state, [type]: false })
      }
    }
  }
  useEffect(
    () => {
      document.addEventListener("mousedown", clickOutside(state, ref, setState, type))
      return () => {
        document.removeEventListener("mousedown", clickOutside(state, ref, setState, type))
      }
    }
    , [state[type]]
  )
  return (
    <div className='bg-[#ECF0F1] w-full h-[50px] flex justify-start items-center gap-[5px] font-bold text-primary-gray'>
      <div className="w-[10%] flex justify-center items-center">
        {svg}
      </div>
      <div className="flex flex-col align-center justify-center h-full text-[13px] overflow-hidden w-[90%]">
        <label className={`absolute ${activeStatus} transition pointer-events-none`}>{type.toUpperCase()}</label>
        <input ref={ref} onClick={() => setState({ ...state, [type]: true })} className='text-black bg-transparent w-full relative outline-none' type={type} />
      </div>
      {children}
    </div>
  )
})


export default LabelInput
