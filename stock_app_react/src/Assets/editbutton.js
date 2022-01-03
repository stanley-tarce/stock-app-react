import React from 'react'

function EditButton({ className, size, onClick }) {
  return (
    <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.51787 2.73147L12.2684 6.48211L4.12433 14.6265L0.780474 14.9956C0.332829 15.0451 -0.0453838 14.6666 0.00441962 14.219L0.37648 10.8726L8.51787 2.73147ZM14.588 2.17306L12.827 0.411994C12.2777 -0.137331 11.3868 -0.137331 10.8375 0.411994L9.18084 2.06876L12.9313 5.81941L14.588 4.16264C15.1373 3.61302 15.1373 2.72238 14.588 2.17306Z" fill="white" />
    </svg>

  )
}

export default EditButton
