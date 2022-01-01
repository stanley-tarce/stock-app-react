import React from 'react'

function DeleteButton({ className }) {
  return (
    <svg className={className} width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.1786 1.62501H16.0179L15.5353 0.6754C15.433 0.472383 15.2756 0.30161 15.0806 0.182293C14.8856 0.0629747 14.6608 -0.000153764 14.4315 8.90334e-06H8.56339C8.33461 -0.000861007 8.11022 0.0620321 7.9159 0.181483C7.72159 0.300933 7.56523 0.472109 7.46473 0.6754L6.98214 1.62501H0.821429C0.603572 1.62501 0.394639 1.71061 0.240591 1.86298C0.0865431 2.01536 0 2.22202 0 2.43751L0 4.06251C0 4.278 0.0865431 4.48466 0.240591 4.63703C0.394639 4.78941 0.603572 4.87501 0.821429 4.87501H22.1786C22.3964 4.87501 22.6054 4.78941 22.7594 4.63703C22.9135 4.48466 23 4.278 23 4.06251V2.43751C23 2.22202 22.9135 2.01536 22.7594 1.86298C22.6054 1.71061 22.3964 1.62501 22.1786 1.62501ZM2.73125 23.7149C2.77043 24.3337 3.04656 24.9145 3.50342 25.339C3.96029 25.7636 4.56355 25.9999 5.1904 26H17.8096C18.4365 25.9999 19.0397 25.7636 19.4966 25.339C19.9534 24.9145 20.2296 24.3337 20.2687 23.7149L21.3571 6.50001H1.64286L2.73125 23.7149Z" fill="white" />
    </svg>

  )
}

export default DeleteButton
