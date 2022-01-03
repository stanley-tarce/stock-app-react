import React, { forwardRef } from 'react'

const WalletButtonTrader = forwardRef(({ className, fill }, ref) =>

  <svg className={className} width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3289 9.25H5.78125C5.14242 9.25 4.625 8.73258 4.625 8.09375C4.625 7.45492 5.14242 6.9375 5.78125 6.9375H33.5312C34.1701 6.9375 34.6875 6.42008 34.6875 5.78125C34.6875 3.86549 33.1345 2.3125 31.2188 2.3125H4.625C2.07041 2.3125 0 4.38291 0 6.9375V30.0625C0 32.6171 2.07041 34.6875 4.625 34.6875H33.3289C35.3538 34.6875 37 33.1316 37 31.2188V12.7188C37 10.8059 35.3538 9.25 33.3289 9.25ZM30.0625 24.2812C28.7856 24.2812 27.75 23.2457 27.75 21.9688C27.75 20.6918 28.7856 19.6562 30.0625 19.6562C31.3394 19.6562 32.375 20.6918 32.375 21.9688C32.375 23.2457 31.3394 24.2812 30.0625 24.2812Z" ref={ref} fill={fill} />
  </svg>

)

export default WalletButtonTrader
