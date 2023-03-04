import React from 'react'
import ImgLogo from './assets/img/logo3.png'

const LandingPage = () => {
  return (
    <>
    <div className='min-h-screen px-40'>
        <div className='flex'>
            <div className='pt-40'>
                <h1 className='text-[150px] font-medium'>SkinFirst</h1>
                <h2 className='text-[47px] w-1/2 font-medium'>Nourish your skin, aware your skin health with SkinFirst.</h2>
                <button className='bg-[#F0EFE1] hover:bg-[#c6c4a9] text-[#00695B] font-medium duration-200 hover:text-[#679a94] px-20 py-4 text-[28px] rounded-full text-[]'>Get started</button>
            </div>
            <div className='pt-40 flex items-center animate-spin '>
                <img src={ImgLogo} className=' select-none'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage